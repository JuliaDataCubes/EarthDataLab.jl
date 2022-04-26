# Accessing the Data Cube

## Open a datacube

Before one can read data from a cube, it has to be opened. To open a data cube
which is accesible through the file system, use the `Cube` constructor:

 ```julia
using EarthDataLab
c = Cube("/patch/to/cube")
```
```
EarthDataLab data cube at /Net/Groups/BGI/scratch/DataCube/v0.2.0/high-res/
Spatial resolution:  4320x2160 at 0.083333 degrees.
Temporal resolution: 2001-01-01T00:00:00 to 2012-01-01T00:00:00 at 8daily time steps
Variables:           aerosol_optical_thickness_1610 aerosol_optical_thickness_550 aerosol_optical_thickness_555 aerosol_optical_thickness_659 aerosol_optical_thickness_865 air_temperature_2m bare_soil_evaporation black_sky_albedo burnt_area c_emissions country_mask evaporation evaporative_stress fractional_snow_cover gross_primary_productivity interception_loss land_surface_temperature latent_energy net_ecosystem_exchange open_water_evaporation ozone potential_evaporation precipitation root_moisture sensible_heat snow_sublimation snow_water_equivalent soil_moisture surface_moisture terrestrial_ecosystem_respiration transpiration water_mask water_vapour white_sky_albedo
```

This returns a `Cube` object that contains some basics information about the cube which is printed on the screen.

## Getting a data handle

```julia
using EarthDataLab
c=Cube()
```

```julia
var=["c_emissions","air_temperature_2m"]
time=(Date("2003-01-01"),Date("2003-12-31"))
cubedata = subsetcube(c,lon=(30,31),lat=(50,51),time=time,variable=var)
```

This returns a view into the Data Cube, on which further calculations can be applied.

No data is read yet. In case you want to load some data into memory and store it in a Julia array, just use square-bracket indexing. For example, to read the first time step  of the first variable as a Lon-Lat array, just do

```julia
cubedata[:,:,1,1]
```

Here you can start to do some calculations on your sub-cube, see either
[Analysis](@ref) for a list of methods provided by this framework or
[Applying custom functions](@ref) to apply your own functions on the cube.

## Extracting a list of lon/lat coordinates from a data cube

There are situations in which only a certain list of longitude/latitude pairs is
needed for the analysis. One can extract such a list by first creating a cube view
containing all the needed variables and then apply the `extractLonLats` function.

```@docs
    EarthDataLab.Proc.extractLonLats
```

Here is an example how to apply the function:

```julia
cubedata = subsetcube(c,lon=(30,31),lat=(50,51),time=time,variable=var)
ll       = [30.1 50.2;
            30.5 51.1;
            30.7 51.1] #Lon/Lats to be extracted
cubenew  = extractLonLats(cubedata,ll)
```

## Cube Types

While the `subsetcube` command returns an object of type `ZarrCube`, which represents a view into the ESDC, other cube operations will return different types of data cubes.
The returned type will depend on the size of the returned cube. If it is small enough to fit into memory, it will be a `CubeMem`, otherwise a `ZArrayCube`. All these types of data cubes share the same interface defined by, which means you can index them, do calculation using `mapCube` or plot them.


## Cube Dimensions

Dimensions are an essential part of each Cube in EarthDataLab. Every dimension that a cube has is associated
with an axis that stores the values of the dimension. For example, a `LatAxis` will contain a
field `values` representing the chosen latitudes. Similarly, a `VariableAxis` will contain a list of
Variable names. Axes types are divided in categorical axes and axes represented by ranges. All of them
are subtypes of the abstract type `CubeAxis`.

## List of known regions

```@docs
    EarthDataLab.known_regions
```
