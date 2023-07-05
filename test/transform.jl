using EarthDataLab
using Test
using Statistics

@testset "Transformed cubes" begin
c=Cube()

@testset "ConcatCubes" begin
    c2 = c[lon=10..11,lat=50..51,time=Date("2002-01-01")..Date("2008-12-31")]
    d1 = c2[variable=DD.At("air_temperature_2m")]
    d2 = c2[variable=DD.At("gross_primary_productivity")]
    d3 = c[variable=DD.At("net_ecosystem_exchange")]
conccube = concatenatecubes([d1,d2],DD.Dim{:NewAxis}(["v1","v2"]))
@test size(conccube)==(4,4,322,2)
@test EarthDataLab.caxes(conccube)[1:3]==EarthDataLab.caxes(d1)
@test EarthDataLab.caxes(conccube)[4]==DD.Dim{:NewAxis}(["v1","v2"])
@test_throws ErrorException concatenatecubes([d1,d3],CategoricalAxis("NewAxis",["v1","v2"]))
dd1 = readcubedata(d1)
dd2 = readcubedata(d2)
aout = zeros(Float32,4,4,322,2)
mout = zeros(UInt8,4,4,322,2)
ddconc = readcubedata(conccube)
@test ddconc.data[:,:,:,1] == dd1.data
@test ddconc.data[:,:,:,2] == dd2.data
#@test isa(EarthDataLab.Cubes.gethandle(conccube,(2,2,2,2)),EarthDataLab.CubeAPI.CachedArrays.CachedArray)
@test mean(ddconc.data,dims=1)[1,:,:,:]==mapslices(mean∘skipmissing,conccube,dims="Lon").data
conccube2 = concatenatecubes([dd1,dd2],CategoricalAxis("NewAxis",["v1","v2"]))
#@test isa(EarthDataLab.Cubes.gethandle(conccube2,(2,2,2,2)),Tuple{AbstractArray,AbstractArray})
@test mean(ddconc.data,dims=1)[1,:,:,:]==mapslices(mean∘skipmissing,conccube2,dims="Lon").data
end
end
