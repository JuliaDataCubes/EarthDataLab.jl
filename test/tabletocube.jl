using EarthDataLab
using Test
using Dates
using IterTools
using WeightedOnlineStats
using Tables

c=Cube()
d = subsetcube(c,variable=["air_temperature_2m", "gross_primary_productivity", "land_surface_temperature"],lon=(30,31),lat=(50,51),
              time=(Date("2002-01-01"),Date("2008-12-31")))
mytable = CubeTable(value=d, expandaxes=("var",))

mytable2 = CubeTable(data=d)

@testset "cubefittable and WeightedCovMatrix fittable" begin
    covmCube = cubefittable(mytable, WeightedCovMatrix, :value, weight=(x->cosd(x.lat)),showprog=false)
    covmVal = WeightedCovMatrix()
    for t in mytable
        for row in Tables.rows(t)
            obs = row.value
            obslat = row.lat
            if !any(ismissing.(obs))
                fit!(covmVal, obs, cosd(obslat))
            end
        end
    end
    @test all(isapprox.(covmCube.data, value(covmVal)))
end

@testset "remaining functions in tablestats.jl" begin
    meanCube = cubefittable(mytable2, WeightedMean, :data, weight=(x->cosd(x.lat)),
                            by=(:Variable,))
    weightedTableMeans = fittable(mytable2, WeightedMean, :data, by=(:Variable,),
                                    weight=(x -> cosd(x.lat)))
    foreach(enumerate(["air_temperature_2m", "gross_primary_productivity", "land_surface_temperature"])) do (i,v)
      @test isapprox(value(weightedTableMeans)[(v,)], meanCube.data[i])
    end
end
