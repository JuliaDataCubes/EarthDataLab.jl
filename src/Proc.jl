module Proc
using YAXArrays.Cubes: YAXArray, cubechunks, caxes
using YAXArrays.Cubes.Axes: getAxis, findAxis, CategoricalAxis, axVal2Index,
  RangeAxis, get_bb, axisfrombb, CubeAxis, axname
using YAXArrays.DAT: mapCube, InDims, OutDims, NValid, AnyMissing
using YAXArrays.Datasets: getsavefolder, Cube
using Dates: year, Date, DateTime
"""
    getNpY(cube)

Get the number of time steps per year
"""
function getNpY(cube)
    timax = getAxis("Time",cube)
    years = year.(timax.values)
    years[end] > years[1] + 1 || error("Must have at least 3 years to estimate number of time steps per year")
    return count(i -> i == years[1] + 1, years)
end

include("MSC.jl")
include("Stats.jl")
include("TSDecomposition.jl")
include("remap.jl")
include("Shapes.jl")
include("extractlonlats.jl")

end
