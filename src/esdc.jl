module ESDC
import YAXArrays.Datasets: Dataset, Cube, open_dataset
using Zarr: S3Store, zopen, aws_config
using Dates: Dates, now
export esdc, esdd
global aws, cubesdict

function __init__()
  global aws, cubesdict
  aws = aws_config(creds=nothing, region="eu-de", service_name="obs", service_host="otc.t-systems.com")
  cubesdict = Dict(
    ("low","ts","global") => ("obs-esdc-v2.0.0","esdc-8d-0.25deg-184x90x90-2.0.0.zarr"),
    ("low","map","global") => ("obs-esdc-v2.0.0","esdc-8d-0.25deg-1x720x1440-2.0.0.zarr"),
    ("high","ts","global") => ("obs-esdc-v2.0.0","esdc-8d-0.083deg-184x270x270-2.0.0.zarr"),
    ("high","map","global") => ("obs-esdc-v2.0.0","esdc-8d-0.083deg-1x2160x4320-2.0.0.zarr"),
    ("low","ts","Colombia") => ("obs-esdc-v2.0.1","Cube_2019lowColombiaCube_184x60x60.zarr"),
    ("low","map","Colombia") => ("obs-esdc-v2.0.1","Cube_2019lowColombiaCube_1x336x276.zarr/"),
    ("high","ts","Colombia") => ("obs-esdc-v2.0.1","Cube_2019highColombiaCube_184x120x120.zarr"),
    ("high","map","Colombia") => ("obs-esdc-v2.0.1","Cube_2019highColombiaCube_1x3360x2760.zarr"),
  )
  if isdir("/home/jovyan/work/datacube/ESDCv2.0.0/esdc-8d-0.25deg-184x90x90-2.0.0.zarr/")
    YAXArrays.YAXDefaults.cubedir[] = "/home/jovyan/work/datacube/ESDCv2.0.0/esdc-8d-0.25deg-184x90x90-2.0.0.zarr/"
  end
end

"""
    function esdd(;kwargs...)

Opens a datacube from the Telecom Object Storage Service as a Dataset. This works on any system, but
might involve some latency depending on connection speed. One can either specify a `bucket`
and `store` or pick a resolution, chunking and cube region.

### Keyword arguments

  * `bucket=nothing` specify an OBS bucket for example "obs-esdc-v2.0.0"
  * `store=""` specify the root path of the cube, for example "esdc-8d-0.25deg-184x90x90-2.0.0.zarr"
  * `res="low"` pick a datacube resolution (`"low"` or `"high"`)
  * `chunks="ts"` choose a chunking (`"ts"` for time series access or `"map"` for spatial analyses)
  * `region="global"` choose a datacube (either `"global"` or `"Colombia"`)

"""
function esdd(;bucket=nothing, store="", res="low", chunks="ts", region="global")
  if bucket===nothing
    bucket, store = cubesdict[(res,chunks,region)]
  end
  open_dataset(zopen(S3Store(bucket,store,2,aws),consolidated=true))
end

"""
    function esdc(;kwargs...)

Opens a datacube from the Telecom Object Storage Service as a Dataset. This works on any system, but
might involve some latency depending on connection speed. One can either specify a `bucket`
and `store` or pick a resolution, chunking and cube region.

### Keyword arguments

  * `bucket=nothing` specify an OBS bucket for example "obs-esdc-v2.0.0"
  * `store=""` specify the root path of the cube, for example "esdc-8d-0.25deg-184x90x90-2.0.0.zarr"
  * `res="low"` pick a datacube resolution (`"low"` or `"high"`)
  * `chunks="ts"` choose a chunking (`"ts"` for time series access or `"map"` for spatial analyses)
  * `region="global"` choose a datacube (either `"global"` or `"Colombia"`)

"""
esdc(;kwargs...) = Cube(esdd(;kwargs...))

end # module
