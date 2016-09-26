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
    "page": "Reading data",
    "title": "Reading data",
    "category": "page",
    "text": ""
},

{
    "location": "cube_access.html#Reading-data-1",
    "page": "Reading data",
    "title": "Reading data",
    "category": "section",
    "text": "some information on how to open a cube and select datasets"
},

{
    "location": "cube_access.html#Cube-Types-1",
    "page": "Reading data",
    "title": "Cube Types",
    "category": "section",
    "text": ""
},

{
    "location": "cube_access.html#Cube-Axes-1",
    "page": "Reading data",
    "title": "Cube Axes",
    "category": "section",
    "text": "Modules = [CABLAB.Cubes.Axes]\nPrivate = false"
},

{
    "location": "cube_access.html#Cube-Masks-1",
    "page": "Reading data",
    "title": "Cube Masks",
    "category": "section",
    "text": "Modules = [CABLAB.CubeAPI.Mask]\nPrivate = false"
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
    "location": "analysis.html#Seasonal-cycles-1",
    "page": "Analysis",
    "title": "Seasonal cycles",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.MSC]\nPrivate = false"
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
    "text": ""
},

{
    "location": "plotting.html#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": ""
},

{
    "location": "plotting.html#Plot-geographical-maps-1",
    "page": "Plotting",
    "title": "Plot geographical maps",
    "category": "section",
    "text": "plotMAP"
},

{
    "location": "plotting.html#Other-plots-1",
    "page": "Plotting",
    "title": "Other plots",
    "category": "section",
    "text": "plotXY"
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
    "text": "It is possible for the user to register their own functions into the data cube so that they can easily be applied through the mapCube function as if it was a built-in function.First of all one needs to define the function that is supposed to be applied on the cube. In general, it should have the following signature: f(x_out,m_out,x_in,m_in,addargs...), where x_out is the output array, m_mout the output mask, x_in is the input array and m_in the input mask. This can be followed by an arbitrary number of additional arguments addargs.You can read about cube masks here Cube Masks. In case you don't want to treat the cube's mask individually, you can leave out the m_out arguments and have missing values treated through DataArrays or using NaNs. Once you have defined your function, you can register it whith registerDATFunctionIn most processing frameworks of this kind, you have some kind of apply function that you pass your function to and specify the dimension number of your array that you want to slice. Here we take a different approach. Our datacubes have named axes and usually a function is supposed to be applied on slices of a certain axis type. For example, a time series decomposition will always be applied along the time dimension. So we register the function once so that the system knows which named dimension the function is applied to, and the apply function will work on cubes of any shape, as long as they contain a time dimension. The same works for combinations of dimensions. Lets suppose you want to apply a multivariate event detection method on all multivariate time series in a cube and your function happens to need a Variable x Time Matrix as an input. You can specify this in registerDATFunction and then the system will automatically read slices of the cube efficiently (transposed if necessary). The only limitation currently is that a slice of data that needs to be processed must fit in memory. It is not (yet) possible to perform operations requiring random array access on the whole cube. The signature of registerDATFunction is the following:registerDATFunction"
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
    "text": "In order to understand better what happens, lets look at some examples. We want to register a gap filling function which accepts single time series and returns time series of the same length. We register the function the following way:                  using CABLAB #hide\nfunction fillGaps(xout::Vector, mout::Vector{UInt8}, xin::Vector, min::Vector{UInt8})\n  # code goes here\nend\n\ninAxes  = (TimeAxis,)\noutAxes = (TimeAxis,)\nregisterDATFunction(fillGaps,inAxes,outAxes)After this you can apply your function like this mapCube(fillGaps, cubedata), where cubedata can be any type of cube, the only condition is that it must contain a TimeAxis.  "
},

{
    "location": "adding_new.html#Using-Data-Arrays-for-missing-data-1",
    "page": "Applying custom functions",
    "title": "Using Data Arrays for missing data",
    "category": "section",
    "text": "In the next example we assume want to register a function that calculates the time variance of a variable. Internally we want to use the StatsBase methods to calculate the variance in the presence of missing data. To do this, the input data is best represented as a DataArray. We register the function in the following way:using CABLAB\nusing DataArrays\nfunction timeVariance{T}(xout::DataArray{T,0}, xin::DataVector)\n  xout[1]=var(xin)\nend\n\ninAxes  = (TimeAxis,)\n\nregisterDATFunction(timeVariance, inAxes, (), inmissing=(:dataarray,), outmissing=:dataarray, no_ocean=1)Here, the only input axis is again the time axis. However, the output axis is an empty tuple, which means that a single value is returned by the function and written to the 0-dimensional array xout. The optional argument inmissing is a tuple of symbols, here it is length one because there is only a single input cube. When :dataarray is chosen, missing values in the cube will be converted to NAs in the function's input array. The same hold true for the outmissing argument. Any NA value in the output array will be converted to a missing value in the resulting cube's mask.There is one additional optional argument set, no_ocean=1. This tells the kernel to check the landsea mask if a certain value is an ocean point and not enter the calculation for these points, but to just set the resulting mask to OCEAN."
},

{
    "location": "adding_new.html#Passing-additional-arguments-1",
    "page": "Applying custom functions",
    "title": "Passing additional arguments",
    "category": "section",
    "text": "If a function call needs additional arguments, they are simple appended to the mapCube call and then get passed to the registered function. For example, if one wants to register a multivariate extreme event detection method detectExtremes, where one can choose from several methods, the function signature would look like this:using CABLAB\nfunction detectExtremes(xout::Vector, xin::Matrix, method)\n  #code goes here\nend\n\ninAxes  = (TimeAxis,VariableAxis)\noutAxes = (TimeAxis,)\nregisterDATFunction(detectExtremes, inAxes, outAxes, inmissing=(:nan,), outmissing=:nan, no_ocean=1)The method would then be called e.g. with mapCube(fillGaps, cubedata, \"KDE\") which would pass the String \"KDE\" as the third positional argument to the registered function."
},

{
    "location": "adding_new.html#Determine-additional-arguments-from-cube-properties-1",
    "page": "Applying custom functions",
    "title": "Determine additional arguments from cube properties",
    "category": "section",
    "text": "Sometimes the registered function depends on additional arguments that are not user-supplied, but determined based on some properties of the input data cube. For example, a function that removes the mean annual cycle from a time series might have the following signature"
},

]}
