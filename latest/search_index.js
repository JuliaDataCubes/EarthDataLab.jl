var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#CABLAB.jl-1",
    "page": "Home",
    "title": "CABLAB.jl",
    "category": "section",
    "text": "A package to explore and analyze the Earth System Data Cube"
},

{
    "location": "index.html#Package-features-1",
    "page": "Home",
    "title": "Package features",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Example-Notebooks-1",
    "page": "Home",
    "title": "Example Notebooks",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"thecube.md\",\n    \"cube_access.md\",\n    \"plotting.md\",\n    \"analysis.md\",\n    \"adding_new.md\",\n]\nDepth = 1"
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "thecube.html#",
    "page": "The CABLAB Data Cube",
    "title": "The CABLAB Data Cube",
    "category": "page",
    "text": ""
},

{
    "location": "thecube.html#The-CABLAB-Data-Cube-1",
    "page": "The CABLAB Data Cube",
    "title": "The CABLAB Data Cube",
    "category": "section",
    "text": "short description of the cube should go here"
},

{
    "location": "cube_access.html#",
    "page": "Accessing the Datat Cube",
    "title": "Accessing the Datat Cube",
    "category": "page",
    "text": ""
},

{
    "location": "cube_access.html#Accessing-the-Datat-Cube-1",
    "page": "Accessing the Datat Cube",
    "title": "Accessing the Datat Cube",
    "category": "section",
    "text": ""
},

{
    "location": "cube_access.html#Open-a-datacube-1",
    "page": "Accessing the Datat Cube",
    "title": "Open a datacube",
    "category": "section",
    "text": "Before one can read data from a cube, it has to be opened. To open a data cube which is accesible through the file system, use the Cube constructor:using CABLAB\nc = Cube(\"/patch/to/cube\")CABLAB data cube at /Net/Groups/BGI/scratch/DataCube/v0.2.0/high-res/\nSpatial resolution:  4320x2160 at 0.083333 degrees.\nTemporal resolution: 2001-01-01T00:00:00 to 2012-01-01T00:00:00 at 8daily time steps\nVariables:           aerosol_optical_thickness_1610 aerosol_optical_thickness_550 aerosol_optical_thickness_555 aerosol_optical_thickness_659 aerosol_optical_thickness_865 air_temperature_2m bare_soil_evaporation black_sky_albedo burnt_area c_emissions country_mask evaporation evaporative_stress fractional_snow_cover gross_primary_productivity interception_loss land_surface_temperature latent_energy net_ecosystem_exchange open_water_evaporation ozone potential_evaporation precipitation root_moisture sensible_heat snow_sublimation snow_water_equivalent soil_moisture surface_moisture terrestrial_ecosystem_respiration transpiration water_mask water_vapour white_sky_albedoThis returns a Cube object that contains some basics information about the cube which is printed on the screen."
},

{
    "location": "cube_access.html#Getting-a-data-handle-1",
    "page": "Accessing the Datat Cube",
    "title": "Getting a data handle",
    "category": "section",
    "text": "using CABLAB\nc=RemoteCube()var=[\"c_emissions\",\"air_temperature_2m\"]\ntime=(DateTime(\"2001-01-01\"),DateTime(\"2001-12-31\"))\ncubedata = getCubeData(c,longitude=(30,31),latitude=(50,51),variable=var)This returns a view into the Data Cube, on which further calculations can be applied. All keyword arguments default to the full range, so calling getCubeData without keyword arguments will return a view No data is read yet. Here you can start to do some calculations on your sub-cube, see either Analysis for a list of methods provided by this framework or Applying custom functions to apply your own functions on the cube. If you just want to visualize the cube see this section Plotting."
},

{
    "location": "cube_access.html#CABLAB.Cubes.AbstractCubeData",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.AbstractCubeData",
    "category": "Type",
    "text": "AbstractCubeData{T,N}\n\nSupertype of all cubes. T is the data type of the cube and N the number of dimensions. Beware that an AbstractCubeData does not implement the AbstractArray interface. However, the CABLAB functions mapCube, reduceCube, readCubeData, plotMAP and plotXY will work on any subtype of AbstractCubeData\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.CubeMem",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.CubeMem",
    "category": "Type",
    "text": "CubeMem{T,N} <: AbstractCubeMem{T,N}\n\nAn in-memory data cube. It is returned by applying mapCube when the output cube is small enough to fit in memory or by explicitly calling readCubeData on any type of cube.\n\nFields\n\naxes a Vector{CubeAxis} containing the Axes of the Cube\ndata N-D array containing the data\nmask N-D array containgin the mask\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.SubCube",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.CubeAPI.SubCube",
    "category": "Type",
    "text": "immutable SubCube{T,C} <: AbstractCubeData{T,4}\n\nA view into the data cube of a single variable. Is the type returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable selected variable\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.SubCubeV",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.CubeAPI.SubCubeV",
    "category": "Type",
    "text": "immutable SubCubeV{T, C} <: AbstractCubeData{T,4}\n\nA view into the data cube with multiple variables. Returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable list of selected variables\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\nvarAxis\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.TempCubes.TempCube",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.TempCubes.TempCube",
    "category": "Type",
    "text": "type TempCube{T,N} <: AbstractCubeData{T,N}\n\nThe main data structure for storing temporary results from cube operations. Is usually returned by mapCube, if the result is larger than max_cache\n\nFields\n\naxes a vector of CubeAxis containing the axes\nfolder folder containing the data\nblock_size dimension of the files that the cube is split into\n\nEach TempCube is stored in a single folder, but can contain several files. The rule is that one file is small enough to be read into memory and the block_size determines the size and shape of each sub-file. This data structure is quite convenient for parrallel access, because different processes can write their results at the same time.\n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Types-1",
    "page": "Accessing the Datat Cube",
    "title": "Cube Types",
    "category": "section",
    "text": "In CABLAB, you willCABLAB.Cubes.AbstractCubeDataCABLAB.Cubes.CubeMemCABLAB.CubeAPI.SubCubeCABLAB.CubeAPI.SubCubeVCABLAB.Cubes.TempCubes.TempCube"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.CubeAxis",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.Axes.CubeAxis",
    "category": "Type",
    "text": "abstract CubeAxis{T} <: AbstractCubeData{T,1}\n\nSupertype of all axes. Every CubeAxis is 1D Cube itself and can be passed to mapCube operationes. Although all cube axes are instances of the parametric typealias CategoricalAxis and RangeAxis, there are some typealiases defined to provide shorter and more convenient names for commonly used cube axes. Here is a list of the aliases:\n\nCategorical Axes\n\nVariableAxis represents different variables\nSpatialPointAxis represents a list of coordinates\nCountryAxis countries\nTimeScaleAxis time scasles after time series decomposition\n\nCotinuous Axes\n\nLonAxis longitudes\nLatAxis latitudes\nTimeAxis time\nMSCAxis time step inside a year (for seasonal statistics)\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.CategoricalAxis",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.Axes.CategoricalAxis",
    "category": "Type",
    "text": "CategoricalAxis{T,S}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol). The default constructor is:\n\nCategoricalAxis(axname::String,values::Vector{T})\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.RangeAxis",
    "page": "Accessing the Datat Cube",
    "title": "CABLAB.Cubes.Axes.RangeAxis",
    "category": "Type",
    "text": "RangeAxis{T,S,R}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol) and R the type of the range which is used to represent the axis values. The default constructor is:\n\nRangeAxis(axname::String,values::Range{T})\n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Axes-1",
    "page": "Accessing the Datat Cube",
    "title": "Cube Axes",
    "category": "section",
    "text": "Axes are an essential part of each Cube in CABLAB. Every dimension that a cube has is associated with an axis that stores the values of the dimension. For example, a LatitudeAxis will contains a field values representing the chosen latitudes. Similarly, a VariableAxis will contain a list of Variable names. Axes types are divided in categorical axes and axes represented by ranges. All of them are subtypes of the abstract type CubeAxis.CABLAB.Cubes.Axes.CubeAxisCABLAB.Cubes.Axes.CategoricalAxisCABLAB.Cubes.Axes.RangeAxis"
},

{
    "location": "cube_access.html#Cube-Masks-1",
    "page": "Accessing the Datat Cube",
    "title": "Cube Masks",
    "category": "section",
    "text": "Every data cube type in CABLAB contains has a representation for the mask, which has the primary purpose of describing missing values and the reason for missingness. CABLAB masks are represented as UInt8-arrays, where each value can be one of the following:VALID a regular data entry\nMISSING classical missing value\nOCEAN masked out by the land-sea mask\nOUTOFPERIOD current time step is not inside the measurement period\nFILLED does not count as missing, but still denotes that the value is gap filled and not measuredThese names can be imported by using CABLAB.Mask. The user can decide if he wants to use the masks in his analyses or rather wants to refer to a different representation with NullableArrays or just representing missings with NaNs. See registerDATFunction for details. "
},

{
    "location": "analysis.html#",
    "page": "Analysis",
    "title": "Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis.html#Analysis-1",
    "page": "Analysis",
    "title": "Analysis",
    "category": "section",
    "text": ""
},

{
    "location": "analysis.html#Apply-functions-1",
    "page": "Analysis",
    "title": "Apply functions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis.html#List-of-functions-1",
    "page": "Analysis",
    "title": "List of functions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.getMSC",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.getMSC",
    "category": "Function",
    "text": "Calculate the mean seasonal cycle of xin and write the output to xout.\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.getMedSC-Tuple{AbstractArray{T,1},AbstractArray{UInt8,1},AbstractArray{T,1},AbstractArray{UInt8,1}}",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.getMedSC",
    "category": "Method",
    "text": "Calculate the median seasonal cycle of xin and write the output to xout.\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.removeMSC-Tuple{AbstractArray,AbstractArray{UInt8,N},AbstractArray,AbstractArray{UInt8,N},Integer,Any,Any}",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.removeMSC",
    "category": "Method",
    "text": "removeMSC\n\nRemoves the mean annual cycle from each time series.\n\nCall signature\n\nmapCube(removeMSC, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis\n\n\n\n"
},

{
    "location": "analysis.html#Seasonal-cycles-1",
    "page": "Analysis",
    "title": "Seasonal cycles",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.MSC]\nPrivate = false"
},

{
    "location": "analysis.html#CABLAB.Proc.Outlier.DAT_detectAnomalies!-Tuple{AbstractArray,AbstractArray,MultivariateAnomalies.PARAMS}",
    "page": "Analysis",
    "title": "CABLAB.Proc.Outlier.DAT_detectAnomalies!",
    "category": "Method",
    "text": "DAT_detectAnomalies!\n\nA simple wrapper around the function detectAnomalies! from the MultivariateAnomalies package.\n\nCall signature\n\nmapCube(DAT_detectAnomalies!, cube, methods, trainArray)\n\ncube data cube with a axes: TimeAxis, VariableAxis\nmethods vector of methods to be applied, choose from: KDE,T2,REC,KNN-Gamma,KNN-Delta,SVDD,KNFST\ntrainArray a matrix of nsample x nvar, to estimate the training parameters for the model. Ideally does not contain any extreme values\n\nInput Axes TimeAxis, Variableaxis\n\nOutput Axes TimeAxis, Methodaxis\n\nFor an example on how to apply this function, see this notebook.\n\n\n\n"
},

{
    "location": "analysis.html#Outlier-detection-1",
    "page": "Analysis",
    "title": "Outlier detection",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.Outlier]\nPrivate = false"
},

{
    "location": "analysis.html#Simple-Statistics-1",
    "page": "Analysis",
    "title": "Simple Statistics",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.Stats]\nPrivate = false"
},

{
    "location": "analysis.html#Time-series-decomposition-1",
    "page": "Analysis",
    "title": "Time series decomposition",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.TSDecomposition]\nPrivate = false"
},

{
    "location": "analysis.html#Cube-transformations-1",
    "page": "Analysis",
    "title": "Cube transformations",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.CubeIO]\nPrivate = false"
},

{
    "location": "plotting.html#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": "#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using CABLAB # hide\nimport Documenter\nds=RemoteCube() # hide"
},

{
    "location": "plotting.html#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "CurrentModule = CABLAB.Plot"
},

{
    "location": "plotting.html#CABLAB.Plot.plotMAP",
    "page": "Plotting",
    "title": "CABLAB.Plot.plotMAP",
    "category": "Function",
    "text": "plotMAP(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)\n\nMap plotting tool for cube objects, can be called on any type of cube data\n\nKeyword arguments\n\ndmin, dmax Minimum and maximum value to be used for color transformation\ncolorm colormap to be used. Find a list of colormaps in the Colors.jl package\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plot\n\nIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n"
},

{
    "location": "plotting.html#Plot-geographical-maps-1",
    "page": "Plotting",
    "title": "Plot geographical maps",
    "category": "section",
    "text": "Map plotting is generally done using the plotMAP function:plotMAPHere is an example on how to plot a map. The keyword arguments specify the time step (time=1) and the variable (var=1).\ncdata=getCubeData(ds,variable=[\"air_temperature_2m\",\"gross_primary_productivity\"])\nplotMAP(cdata,time=1,var=1)Inside a Jupyter notebook, the keyword arguments can be omitted and sliders or dropdown menus will be shown to select the desired values."
},

{
    "location": "plotting.html#CABLAB.Plot.plotXY",
    "page": "Plotting",
    "title": "CABLAB.Plot.plotXY",
    "category": "Function",
    "text": "plotXY(cube::AbstractCubeData; group=0, xaxis=-1, kwargs...)\n\nGeneric plotting tool for cube objects, can be called on any type of cube data.\n\nKeyword arguments\n\nxaxis which axis is to be used as x axis. Can be either an axis Datatype or a string. Short versions of axes names are possible as long as the axis can be uniquely determined.\ngroup it is possible to group the plot by a categorical axis. Can be either an axis data type or a string.\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plot\n\nIf a dimension is not the x axis or group variable and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n"
},

{
    "location": "plotting.html#Other-plots-1",
    "page": "Plotting",
    "title": "Other plots",
    "category": "section",
    "text": "Generating x-y type plots is done with the generic plotXY function.plotXYHere are two examples for using this function:cdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nnothing # hideusing CABLAB # hide\nimport Documenter # hide\nds=RemoteCube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotXY(cdata,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))This is a time series plot, grouped by variables for a specific longitude/latitude.m=reduceCube(mean,cdata,TimeAxis)\nplotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)using CABLAB # hide\nimport Documenter # hide\nds=RemoteCube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nm=reduceCube(mean,cdata,TimeAxis, max_cache=1e8)\np=plotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))"
},

{
    "location": "adding_new.html#",
    "page": "Applying custom functions",
    "title": "Applying custom functions",
    "category": "page",
    "text": ""
},

{
    "location": "adding_new.html#Applying-custom-functions-1",
    "page": "Applying custom functions",
    "title": "Applying custom functions",
    "category": "section",
    "text": ""
},

{
    "location": "adding_new.html#registerDATFunction-1",
    "page": "Applying custom functions",
    "title": "registerDATFunction",
    "category": "section",
    "text": "It is possible for the user to register their own functions into the data cube so that they can easily be applied through the mapCube function as if it was a built-in function.First of all one needs to define the function that is supposed to be applied on the cube. In general, it should have the following signature: f(x_out,m_out,x_in,m_in,addargs...), where x_out is the output array, m_mout the output mask, x_in is the input array and m_in the input mask. This can be followed by an arbitrary number of additional arguments addargs.You can read about cube masks here Cube Masks. In case you don't want to treat the cube's mask individually, you can leave out the m_out arguments and have missing values treated through NullableArrays or using NaNs. Once you have defined your function, you can register it whith registerDATFunctionIn most processing frameworks of this kind, you have some kind of apply function that you pass your function to and specify the dimension number of your array that you want to slice. Here we take a different approach. Our datacubes have named axes and usually a function is supposed to be applied on slices of a certain axis type. For example, a time series decomposition will always be applied along the time dimension. So we register the function once so that the system knows which named dimension the function is applied to, and the apply function will work on cubes of any shape, as long as they contain a time dimension. The same works for combinations of dimensions. Lets suppose you want to apply a multivariate event detection method on all multivariate time series in a cube and your function happens to need a Variable x Time Matrix as an input. You can specify this in registerDATFunction and then the system will automatically read slices of the cube efficiently (transposed if necessary). The only limitation currently is that a slice of data that needs to be processed must fit in memory. It is not (yet) possible to perform operations requiring random array access on the whole cube. The signature of registerDATFunction is the following:registerDATFunction"
},

{
    "location": "adding_new.html#Examples-1",
    "page": "Applying custom functions",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "adding_new.html#Simple-registration-1",
    "page": "Applying custom functions",
    "title": "Simple registration",
    "category": "section",
    "text": "In order to understand better what happens, lets look at some examples. We want to register a gap filling function which accepts single time series and returns time series of the same length. We register the function the following way:                  using CABLAB # hide\nfunction fillGaps(xout::Vector, mout::Vector{UInt8}, xin::Vector, min::Vector{UInt8})\n  # code goes here\nend\n\ninAxes  = (TimeAxis,)\noutAxes = (TimeAxis,)\nregisterDATFunction(fillGaps,inAxes,outAxes);After this you can apply your function like this mapCube(fillGaps, cubedata), where cubedata can be any type of cube, the only condition is that it must contain a TimeAxis.  "
},

{
    "location": "adding_new.html#Using-Nullable-Arrays-for-missing-data-1",
    "page": "Applying custom functions",
    "title": "Using Nullable Arrays for missing data",
    "category": "section",
    "text": "In the next example we assume want to register a function that calculates the time variance of a variable. Internally we want to use the StatsBase methods to calculate the variance in the presence of missing data. To do this, the input data is best represented as a NullableArray. We register the function in the following way:using CABLAB # hide\nusing NullableArrays\nfunction timeVariance{T}(xout::NullableArray{T,0}, xin::NullableVector)\n  xout[1]=var(xin)\nend\n\ninAxes  = (TimeAxis,)\n\nregisterDATFunction(timeVariance, inAxes, (), inmissing=(:nullable,), outmissing=:nullable, no_ocean=1);Here, the only input axis is again the time axis. However, the output axis is an empty tuple, which means that a single value is returned by the function and written to the 0-dimensional array xout. The optional argument inmissing is a tuple of symbols, here it is length one because there is only a single input cube. When :nullable is chosen, missing values in the cube will be converted to nulls in the function's input array. The same hold true for the outmissing argument. Any null value in the output array will be converted to a missing value in the resulting cube's mask.There is one additional optional argument set, no_ocean=1. This tells the kernel to check the landsea mask if a certain value is an ocean point and not enter the calculation for these points, but to just set the resulting mask to OCEAN. Please notice also that simple statistics can be done more conveniently using the reduceCube function."
},

{
    "location": "adding_new.html#Passing-additional-arguments-1",
    "page": "Applying custom functions",
    "title": "Passing additional arguments",
    "category": "section",
    "text": "If a function call needs additional arguments, they are simple appended to the mapCube call and then get passed to the registered function. For example, if one wants to register a multivariate extreme event detection method detectExtremes, where one can choose from several methods, the function signature would look like this:using CABLAB # hide\nfunction detectExtremes(xout::Vector, xin::Matrix, method)\n  #code goes here\nend\n\ninAxes  = (TimeAxis,VariableAxis)\noutAxes = (TimeAxis,)\nregisterDATFunction(detectExtremes, inAxes, outAxes, inmissing=(:nan,), outmissing=:nan, no_ocean=1);The method would then be called e.g. with mapCube(fillGaps, cubedata, \"KDE\") which would pass the String \"KDE\" as the third positional argument to the registered function."
},

{
    "location": "adding_new.html#Determine-additional-arguments-from-cube-properties-1",
    "page": "Applying custom functions",
    "title": "Determine additional arguments from cube properties",
    "category": "section",
    "text": "Sometimes the registered function depends on additional arguments that are not user-supplied, but determined based on some properties of the input data cube. For example, a function that removes the mean annual cycle from a time series might have the following signature:using CABLAB # hide\nfunction removeMSC(xout,xin,NpY,xmsc)\n  #code\nendHere NpY is the number of time steps per year. xmsc is a temporary array where the mean annual cycle is stored before subtraction. For better performance it makes sense to allocate this array once and then re-use it for each grid cell and variable instead of allocating new space at each iteration. Now there are two choices, we either let the user determine these two additional function arguments or we write a callback function that does this automatically. Here is an example:using CABLAB # hide\nfunction prepareArgs(cubes, pargs)\n  timeAxis = CABLAB.DAT.getAxis(TimeAxis,cube[1])\n  npy = timeAxis.values.NPY\n  xmsc = zeros(Float32,npy)\n  return npy,xmsc\nend;The callback function accepts two arguments, a tuple of input cubes (cubes) and the arguments supplied to mapCube by the user (pargs).  It returns a tuple of arguments that are appended to each call of the registered function. So we can register the removeMSC function the following way:using CABLAB # hide\nfunction prepareArgs(cubes, pargs) # hide\n  timeAxis = CABLAB.DAT.getAxis(TimeAxis,cube[1]) # hide\n  npy = timeAxis.values.NPY # hide\n  xmsc = zeros(Float32,npy) # hide\n  return npy,xmsc # hide\nend; # hide\ninAxes  = (TimeAxis,)\noutAxes = (TimeAxis,)\nregisterDATFunction(removeMSC, inAxes, outAxes, prepareArgs, inmissing=(:nan,), outmissing=:nan);Now the user can apply the function on the whole cube using mapCube(removeMSC, cubedata) without caring about getting the number of time steps or pre-allocating the intermediate array."
},

{
    "location": "adding_new.html#Calculations-on-multiple-cubes-1",
    "page": "Applying custom functions",
    "title": "Calculations on multiple cubes",
    "category": "section",
    "text": "So far we showed only examples with a single input data cube. Here we give a first example for doing operations on two input cubes having different shapes. Let's say we have a model that predicts the biospheric CO2 uptake over a given time range based on the data cube cubedata, which has the axes lon x lat x time x variable. This model depends on the vegetation type of each grid cell, which is a static variable and stored in a second data cube staticdata with the axes lon x lat. Registering the function is quite straightforward:using CABLAB # hide\nfunction predictCarbonSink{T,U}(xout::Array{T,0}, xin::Matrix, vegmask::Array{U,0})\n  #Code goes here\nend\ninAxes=((TimeAxis, VariableAxis), ())\noutAxes=()\nregisterDATFunction(predictCarbonSink, inAxes, outAxes, no_ocean=2);The input axes inAxes is now a tuple of tuples, one for each input cube. From cubedata we want to extract the whole time series of all variables, while from staticdata we only need one value for the current pixel. When calling this function, make sure to put the input cubes into a tuple (mapCube(predictCarbonSink,(cubedata, staticdata))). Note that we set the optional argument no_ocean=2 This means that, again, ocean grid cells are skipped, but the 2 denotes that this time the second input cube will be checked for ocean cells, not the first one."
},

{
    "location": "adding_new.html#Even-Axes-are-cubes-1",
    "page": "Applying custom functions",
    "title": "Even Axes are cubes",
    "category": "section",
    "text": "In some cases one needs to have access to the value of an axis, for example when one wants to calculate a spatial Aggregation, the latitudes are important to determine grid cell weights. To do this, one can pass a cube axis to mapCube as if it was a cube having only one dimension.using CABLAB # hide\nfunction spatialAggregation{T}(xout::Array{T,0}, xin::Matrix, latitudes::AbstractVector)\n  #code goes here\nend\n\ninAxes=((LonAxis, LatAxis), (LatAxis,))\noutAxes=()\nregisterDATFunction(spatialAggregation, inAxes, outAxes, inmissing=(:nullable,:nan), outmissing=:nullable);Here, the function will operate on a lon x lat matrix and one has access to the latitude values inside the function. For the second input cube the input axis we extract the latitude axis from the first user-supplied cube and pass it to the calculation as a second input cube. So we apply the function using: mapCube(spatialAggregation, (cubedata, CABLAB.DAT.getAxis(LatAxis, cubedata))."
},

{
    "location": "adding_new.html#Determine-output-axis-from-cube-properties-1",
    "page": "Applying custom functions",
    "title": "Determine output axis from cube properties",
    "category": "section",
    "text": "For some calculations the output axis does not equal any of the input axis, but has to be generated before the cube calculation starts. You can probably guess that this will happen through callback functions again, which have the same form as in the other examples. In this example we want to register a function that does a polynomial regression between time series of two variables. The result of this calculation are the regression parameters, so the output axis will be a newly created Parameter-axis (see Cube Axes). For the axis we define a default constructor which names the fitting parameters. In this example we create a ParameterAxis for a quadratic regression.using CABLAB # hide\nfunction ParameterAxis(order::Integer)\n  order > 0 || error(\"Regression must be at least linear\")\n  CategoricalAxis(\"Parameter\",[\"offset\";[\"p$i\" for i=1:order]])\nend\nParameterAxis(2)Now we can go and register the function, while we specify the output axis with a function calling the Axis constructor.using CABLAB # hide\nfunction ParameterAxis(order::Integer) # hide\n  order > 0 || error(\"Regression must be at least linear\") # hide\n  ParameterAxis([\"offset\";[\"p$i\" for i=1:order]]) # hide\nend # hide\nfunction polyRegression(xout::Vector, xin::Matrix, order::Integer)\n  #code here\nend\n\ninAxes=(TimeAxis,)\noutAxes=((cube,pargs)->ParameterAxis(pargs[1]),)\nregisterDATFunction(polyRegression, inAxes, outAxes, inmissing=(:nan,), outmissing=:nan);The user can apply the function now using mapCube(polyRegression, cubedata, regOrdeer) where regOrder is the order of the Regression."
},

]}
