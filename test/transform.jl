using EarthDataLab
using Test
using Statistics

@testset "Transformed cubes" begin
c=Cube()

@testset "ConcatCubes" begin
d1 = subsetcube(c,variable="air_temperature_2m",lon=(10,11),lat=(50,51),
                time=(Date("2002-01-01"),Date("2008-12-31")))
d2 = subsetcube(c,variable="gross_primary_productivity",lon=(10,11),lat=(50,51),
                time=(Date("2002-01-01"),Date("2008-12-31")))
d3 = subsetcube(c,variable="net_ecosystem_exchange",lon=(10,11),lat=(50,51),
                time=(Date("2002-01-01"),Date("2007-12-31")))
conccube = concatenatecubes([d1,d2],CategoricalAxis("NewAxis",["v1","v2"]))
@test size(conccube)==(4,4,322,2)
@test EarthDataLab.caxes(conccube)[1:3]==EarthDataLab.caxes(d1)
@test EarthDataLab.caxes(conccube)[4]==CategoricalAxis("NewAxis",["v1","v2"])
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
