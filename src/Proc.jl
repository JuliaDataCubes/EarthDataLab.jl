module Proc
using YAXArrays.Cubes: YAXArray, cubechunks, caxes
using YAXArrays.DAT: mapCube, InDims, OutDims, NValid, AnyMissing
using YAXArrays.Datasets: getsavefolder, Cube
using YAXArrays: getAxis
using Dates: year, Date, DateTime
"""
    getNpY(cube)

Get the number of time steps per year
"""
function getNpY(cube)
    timax = getAxis("Time",cube)
    years = year.(timax.val)
    years[end] > years[1] + 1 || error("Must have at least 3 years to estimate number of time steps per year")
    return count(i -> i == years[1] + 1, years)
end

include("MSC.jl")
include("Stats.jl")
include("TSDecomposition.jl")
include("remap.jl")
include("Shapes.jl")

end
