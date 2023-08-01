using EarthDataLab, NetCDF, YAXArrays
import DimensionalData as DD
using Test

newcubedir = mktempdir()
YAXdir(newcubedir)
# Download Cube subset
c = esdc(version=2)

cgermany = c[
  region = "Germany",
  var = DD.At(["gross_primary_productivity", "net_ecosystem_exchange", "air_temperature_2m", "terrestrial_ecosystem_respiration", "land_surface_temperature"]),
  time = 2000:2010
]
cgermany = setchunks(cgermany,Dict("lon"=>20,"lat"=>20,"time"=>92))
savecube(cgermany,"germanycube")
YAXArrays.YAXDefaults.cubedir[] = joinpath(newcubedir,"germanycube")
include("access.jl")
include("analysis.jl")
#include("artype.jl")
include("transform.jl")
include("remap.jl")
include("tabletocube.jl")
