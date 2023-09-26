using Dates
import DimensionalData

c=Cube()

@testset "Access single variable" begin
  d = c[variable=DD.At("air_temperature_2m"),lon=10..11,lat=50..51,
  time=Date("2002-01-01")..Date("2008-12-31")]

  d.data.v.indices==(18:21, 17:20, 93:414)
  @test d.axes[1].val==10.125:0.25:10.875
  @test d.axes[2].val==50.875:-0.25:50.125
  @test d.axes[1] == Dim{:lon}(10.125:0.25:10.875)
  @test d.axes[2] == Dim{:lat}(50.875:-0.25:50.125)
end



@testset "Access multiple variables" begin
  d2 = c[variable=DD.At(["air_temperature_2m","gross_primary_productivity"]),lon=10..11,lat=50..51,
  time=Date("2002-01-01")..Date("2008-12-31")]

@test d2.axes[4].val == ["air_temperature_2m", "gross_primary_productivity"]
@test d2.data.arrays[1].v.indices ==(18:21, 17:20, 93:414)
@test d2.axes[1].val==10.125:0.25:10.875
@test d2.axes[2].val==50.875:-0.25:50.125
@test first(d2.axes[3].val) == Dates.Date(2002,1,5)
@test last(d2.axes[3].val) == Dates.Date(2008, 12, 30)
end

@testset "Test values in MemCube" begin
  d = c[variable=DD.At("air_temperature_2m"),lon=10..11,lat=50..51,
  time=Date("2002-01-01")..Date("2008-12-31")]
d2 = c[variable=DD.At(["air_temperature_2m","gross_primary_productivity"]),lon=10..11,lat=50..51,
  time=Date("2002-01-01")..Date("2008-12-31")]
data1=readcubedata(d)
data2=readcubedata(d2)

@test size(data1.data)==(4,4,322)
@test size(data2.data)==(4,4,322,2)


@test isapprox(data1.data[1,1,1:10],Float32[267.9917, 269.9631, 276.71036, 280.88998,
280.90665, 277.02243, 274.5466, 276.919, 279.96243, 279.42276])

@test isapprox(data2.data[1,1,1:10,1],Float32[267.9917, 269.9631, 276.71036, 280.88998,
280.90665, 277.02243, 274.5466, 276.919, 279.96243, 279.42276])

@test caxes(data1)[1:2]==(Dim{:lon}(10.125:0.25:10.875),Dim{:lat}(50.875:-0.25:50.125))

tax = caxes(data1)[3]
@test DD.name(tax)==:Time
@test tax.val[1] == Date(2002,1,5)
@test tax.val[end] == Date(2008,12,30)
@test length(tax.val) == 7*46

@test caxes(data2)[[1,2,4]]==(Dim{:lon}(10.125:0.25:10.875),Dim{:lat}(50.875:-0.25:50.125),Dim{:Variable}(["air_temperature_2m","gross_primary_productivity"]))

tax = caxes(data2)[3]
@test DD.name(tax)==:Time
@test tax.val[1] == Date(2002,1,5)
@test tax.val[end] == Date(2008,12,30)
@test length(tax.val) == 7*46


end

@testset "Accessing regions" begin
#Test access datacube by region
d3 = c[variable=DD.At("gross_primary_productivity"),region="Austria",time=DD.Near(DateTime("2005-01-01"))]
@test d3.axes==(Dim{:lon}(9.625:0.25:14.875),RangeAxis("lat",48.875:-0.25:47.375))

end

using DiskArrayTools: DiskArrayStack

@testset "Saving and loading cubes" begin
  d = c[variable=DD.At("air_temperature_2m"),lon=(10..31),lat=(50..51),
                  time=(Date("2002-01-01")..Date("2008-12-31"))]
  data1=readcubedata(d)
  #Test saving cubes
  dire=tempname()
  savecube(data1,dire)


  data3=readcubedata(Cube(dire))
  @test data1.axes==data3.axes
  @test data1.data==data3.data

  # Test loadOrGenerate macro
  d=c[time=Date(2001)..Date(2005),lon=(10..11),lat=(50..51),variable=DD.At(["gross_primary_productivity","net_ecosystem_exchange"])]

  danom = removeMSC(d)

  zp = tempname()
  savecube(danom, zp, overwrite=true)


  danom=readcubedata(danom)
  danom2=readcubedata(Cube(zp))

  @test danom.axes[1:3]==danom2.axes[1:3]
  @test all(map(isequal,danom.data,danom2.data))

  ncf = string(tempname(),".nc")
  savecube(danom,ncf,backend=:netcdf)

  using NetCDF, Dates
  #Test exportcube
  @test ncread(ncf,"lon") == 10.125:0.25:10.875
  @test ncread(ncf,"lat") == 50.875:-0.25:50.125
  @test ncgetatt(ncf,"Time","units") == "days since 1980-01-01"
  @test getAxis("Time",danom).val .- DateTime(1980) == Millisecond.(Day.(ncread(ncf,"Time")))

  anc = replace(ncread(ncf,"gross_primary_productivity")[:,:,:],-9999.0=>missing)
  @test all(isequal.(anc, danom.data[:,:,:,1]))
  neear = replace(danom.data[:,:,:,2],missing=>-9999.0)
  @test all(isequal.(ncread(ncf,"net_ecosystem_exchange")[:,:,:],neear))
  cnc = Cube(ncf)
  @test all(cnc.data[:,:,:,:] .== danom.data[:,:,:,:])
end

@testset "ESDC v3" begin
  c = esdd(res="low")
  d = c.gross_primary_productivity[time=DD.Near(DateTime(2005))].data[443:444,139:140]
  d == Float32[3.1673577 3.7342484; 3.3267372 4.0305696]

  c = esdd(res="tiny")
  c.gross_primary_productivity[time=DD.Near(DateTime(2005))].data[44,14] == 2.3713999f0
end

@testset "regions work" begin
    c1 = esdc(region = "Colombia")
    @test DimensionalData.bounds(c1, :lon) == (-82.9587215, -60.0421465)
    @test DimensionalData.bounds(c1, :lat) == (-13.957917500000002, 13.9586375)

    c2 = esdc() # global low resolution
    @test DimensionalData.bounds(c2, :lon) == (-179.875, 179.875)
    @test DimensionalData.span(c2, :lon).step == 0.25

    c3 = esdc(res = "high", version = 2) # global high resolution
    @test DimensionalData.bounds(c3, :lon) == (-179.95833333333331, 179.95833333333331)
    @test DimensionalData.span(c3, :lon).step == 0.08333333333333333

    c4 = esdc(res = "tiny") # global tiny cube
    @test DimensionalData.span(c4, :lon).step == 2.5
    @test DimensionalData.bounds(c4, :lon) == (-178.75, 178.75)
end
