"""
## The Earth System Data Cube
![](http://earthsystemdatacube.net/wp-content/uploads/2015/07/EarthDataCube3.png "The DataCube")

Some info on the project...
"""
module EarthDataLab

include("Proc.jl")
include("countrydict.jl")
include("esdc.jl")
include("ESDLTools.jl")

using YAXArrays: @reexport
import DimensionalData as DD

@reexport using Dates: Date, DateTime
@reexport using YAXArrays: (..)
@reexport using YAXArrays: concatenatecubes, caxes,
  subsetcube, readcubedata,renameaxis!, YAXArray

@reexport using YAXArrays: mapCube, getAxis, InDims, OutDims, Dataset,
      CubeTable, cubefittable, fittable, savecube, Cube, open_dataset #From DAT module
@reexport using .Proc: removeMSC, gapFillMSC,normalizeTS,
  getMSC, filterTSFFT, getNpY,interpolatecube,
  getMedSC, cubefromshape,
  gapfillpoly, spatialinterp #From Proc module # from ESDL Tools

@reexport using .ESDC: esdc, esdd

#For backwards compatibility:
RangeAxis(name,vals) = DD.Dim{Symbol(name)}(vals)
CategoricalAxis(name,vals) = DD.Dim{Symbol(name)}(vals)

export RangeAxis, CategoricalAxis

using NetCDF: NetCDF
using Zarr: Zarr

include("cubeinfo.jl")

using YAXArrays: YAXDefaults
function __init__()
    push!(YAXDefaults.subsetextensions, replaceregion)
end

end # module
