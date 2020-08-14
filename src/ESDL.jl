"""
## The Earth System Data Cube
![](http://earthsystemdatacube.net/wp-content/uploads/2015/07/EarthDataCube3.png "The DataCube")

Some info on the project...
"""
module ESDL

include("Proc.jl")
include("countrydict.jl")
include("esdc.jl")
include("cubeinfo.jl")

using YAXArrays.YAXTools: @reexport

@reexport using Dates: Date, DateTime
@reexport using YAXArrays: (..)
@reexport using YAXArrays: concatenateCubes, caxes,
  subsetcube, readcubedata,renameaxis!, YAXArray
@reexport using YAXArrays: CubeAxis, RangeAxis, CategoricalAxis,
  getAxis

@reexport using YAXArrays: mapCube, getAxis, InDims, OutDims, Dataset,
      CubeTable, cubefittable, fittable #From DAT module
@reexport using .Proc: removeMSC, gapFillMSC,normalizeTS,
  getMSC, filterTSFFT, getNpY,
  getMedSC, extractLonLats, cubefromshape,
  gapfillpoly, spatialinterp #From Proc module
@reexport using YAXArrays: Dataset, Cube, open_dataset
@reexport using YAXArrays: @loadOrGenerate # from ESDL Tools

@reexport using .ESDC: esdc, esdd

using YAXArrays: YAXDefaults
function __init__()
    push!(YAXDefaults.subsetextensions, replaceregion)
end

end # module
