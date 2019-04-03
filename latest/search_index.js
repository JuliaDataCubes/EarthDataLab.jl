var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#ESDL.jl-1",
    "page": "Home",
    "title": "ESDL.jl",
    "category": "section",
    "text": "A package to explore and analyze the Earth System Data Cube"
},

{
    "location": "#The-ESDL-Data-Cube-1",
    "page": "Home",
    "title": "The ESDL Data Cube",
    "category": "section",
    "text": "(Image: The ESDL data cube)The Earth System data cube is a collection of land surface and atmospheric Earth observation data sets on a common spatial resolution of 5min and a common temporal resolution of 8 days in the time range from 2001 to 2011. See the Product Handbook for more information."
},

{
    "location": "#Example-Jupyter-Notebooks-1",
    "page": "Home",
    "title": "Example Jupyter Notebooks",
    "category": "section",
    "text": "You can find some example Jupyter Notebooks using ESDL.jl here"
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"cube_access.md\",\n    \"plotting.md\",\n    \"analysis.md\",\n    \"iotools.md\",\n]\nDepth = 3"
},

{
    "location": "#Acknowledgements-1",
    "page": "Home",
    "title": "Acknowledgements",
    "category": "section",
    "text": "The development of this package was funded by ESA STSE and implemented by the Max-Planck-Institute for Biogeochemistry."
},

{
    "location": "#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "cube_access/#",
    "page": "Accessing the Data Cube",
    "title": "Accessing the Data Cube",
    "category": "page",
    "text": ""
},

{
    "location": "cube_access/#Accessing-the-Data-Cube-1",
    "page": "Accessing the Data Cube",
    "title": "Accessing the Data Cube",
    "category": "section",
    "text": ""
},

{
    "location": "cube_access/#ESDL.CubeAPI.Cube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.Cube",
    "category": "type",
    "text": "Represents a data cube accessible though the file system. The default constructor is\n\nCube(base_dir)\n\nwhere base_dir is the data cube\'s base directory.\n\nFields\n\nbase_dir the cube parent directory\nconfig the cube\'s static configuration CubeConfig\ndataset_files a list of datasets in the cube\nvar_name_to_var_index basically the inverse of dataset_files\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.CubeAPI.Cube-Tuple{AbstractString}",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.Cube",
    "category": "method",
    "text": "Cube(base_dir::AbstractString)\n\nRepresents a data cube accessible though the file system.\n\nArgument\n\nbase_dir the parent directory of the data cube to be opened.\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.CubeAPI.Cube-Tuple{}",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.Cube",
    "category": "method",
    "text": "Cube(;resolution=\"low\")\n\nEmpty constructor with a default keyword argument for the resolution. Attempts to access default data cube locations in the file system. If unsuccessful attempts to open a RemoteCube.\n\nKeyword argument\n\nresolution Can be \"low\" or \"high\". Defaults to \"low\".\n\n\n\n\n\n"
},

{
    "location": "cube_access/#Open-a-data-cube-1",
    "page": "Accessing the Data Cube",
    "title": "Open a data cube",
    "category": "section",
    "text": "Before one can read data from a cube, it has to be opened. To open a data cube, which is usually accessible through the file system, use the Cube(base_dir) constructor:using ESDL\nc = Cube(\"/path/to/cube/\")ESDL data cube at /path/to/cube/\nSpatial resolution:  4320x2160 at 0.083333 degrees.\nTemporal resolution: 2001-01-01T00:00:00 to 2012-01-01T00:00:00 at 8daily time steps\nVariables:           aerosol_optical_thickness_1610 aerosol_optical_thickness_550 aerosol_optical_thickness_555 aerosol_optical_thickness_659 aerosol_optical_thickness_865 air_temperature_2m bare_soil_evaporation black_sky_albedo burnt_area c_emissions country_mask evaporation evaporative_stress fractional_snow_cover gross_primary_productivity interception_loss land_surface_temperature latent_energy net_ecosystem_exchange open_water_evaporation ozone potential_evaporation precipitation root_moisture sensible_heat snow_sublimation snow_water_equivalent soil_moisture surface_moisture terrestrial_ecosystem_respiration transpiration water_mask water_vapour white_sky_albedoThis returns a Cube object and prints some basic information (location, resolutions & variable names) about the cube. Using Cube() without any arguments will attempt to access a data cube at the path specified in the environmental variable ENV[\"ESDL_CUBEDIR\"] if applicable or else try to open a remote data cube.ESDL.CubeAPI.Cube\nESDL.CubeAPI.Cube(base_dir::AbstractString)\nESDL.CubeAPI.Cube(;resolution=\"low\")"
},

{
    "location": "cube_access/#ESDL.CubeAPI.getCubeData",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.getCubeData",
    "category": "function",
    "text": "getCubeData(cube::Cube; variable, time, latitude, longitude)\n\nReturns a SubCube object which represents a view of the original data cube. The following keyword arguments are accepted:\n\nvariable a variable index, variable name string or an iterable returning multiple of these, like: (var1, var2, ...)\ntime a single Date object or a 2-element iterable of Date objects, like: (start_time, end_time)\nlatitude a single latitude value or a 2-element iterable, like: (first_latitude, last_latitude)\nlongitude a single longitude value or a 2-element iterable, like (first_longitude, last_longitude)\nregion specify a country or SREX region by name or ISO_A3 code. Overrides latitude and longitude for AOI selection. Type ?ESDL.known_regions to see a list of pre-defined areas\n\n\n\n\n\n"
},

{
    "location": "cube_access/#Getting-a-data-handle-1",
    "page": "Accessing the Data Cube",
    "title": "Getting a data handle",
    "category": "section",
    "text": "The next step after opening the data cube, is to select the extents of the data cube to be further subject to processing. The following code example serves to illustrate this step:using ESDL\nc=Cube()var = [\"c_emissions\", \"air_temperature_2m\"]\ntime = (Date(\"2001-01-01\"), Date(\"2001-12-31\"))\nlons = (30,32), lats = (50,51)\ncubedata = getCubeData(c, longitude=lons, latitude=lats, time=time, variable=var)Data Cube view with the following dimensions\nLon                 Axis with 8 Elements from 30.125 to 31.875\nLat                 Axis with 4 Elements from 50.875 to 50.125\nTime                Axis with 46 Elements from 2001-01-01 to 2001-12-27\nVariable            Axis with 2 elements: c_emissions air_temperature_2m\nTotal size: 14.38 KBThis returns a view of the data cube, on which further calculations can be applied. The extents here are all data for the variables \"cemissions\" and \"airtemperature_2m\" between 50° and 51° North and 30° and 32° East for the year 2001. For southern latitudes and western longitudes use negative values. All keyword arguments default to the full range, so calling getCubeData() without keyword arguments will return a view of the whole data cube.Here you can start to do calculations on your sub-cube. See either Analysis for a list of methods provided by this framework or Applying custom functions to apply your own functions on the cube. If you just want to visualize the cube see the section Plotting.Note that the data wasn\'t read yet. In case you want to load some data into memory and store it in a Julia array, just use square-bracket indexing. For example, to read the first time step (2001-01-01) of the second variable (air_temperature_2m) as a Lon-Lat array, docubedata[:,:,1,2]8×4 reshape(::Array{Union{Missing, Float32},4}, 8, 4) with eltype Union{Missing, Float32}:\n 274.301  274.409  274.458  274.499\n 274.299  274.411  274.473  274.529\n 274.297  274.412  274.488  274.558\n 274.296  274.414  274.503  274.588\n 274.294  274.415  274.518  274.618\n 274.28   274.412  274.533  274.649\n 274.266  274.409  274.547  274.681\n 274.251  274.406  274.562  274.713ESDL.CubeAPI.getCubeData"
},

{
    "location": "cube_access/#ESDL.CubeAPI.RemoteCube-Tuple{}",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.RemoteCube",
    "category": "method",
    "text": "RemoteCube(;resolution=\"low\", url)\n\nKeyword arguments\n\nresolution Can be \"low\" or \"high\". Defaults to \"low\".\nurl A custom URL for the remote connection can be specified here. Defaults to the official remote server.\n\n\n\n\n\n"
},

{
    "location": "cube_access/#open_rdc-1",
    "page": "Accessing the Data Cube",
    "title": "Opening Remote Data Cubes",
    "category": "section",
    "text": "If you just want to try the ESDL and don\'t have access to the full data set, you can open a remote cube through a THREDDS server. All you need is a working internet connection to do this:RemoteCube()This will open the remote cube and calling getCubeData will return a cube view that you can process.Important: Please be nice to our servers. Use this only for testing the ESDL software for a limited amount of data (reading maps at single time steps) or time series in lon-lat boxes of size 1° x 1°."
},

{
    "location": "cube_access/#ESDL.Cubes.AbstractCubeData",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.AbstractCubeData",
    "category": "type",
    "text": "AbstractCubeData{T,N}\n\nSupertype of all cubes. T is the data type of the cube and N the number of dimensions. Beware that an AbstractCubeData does not implement the AbstractArray interface. However, the ESDL functions mapCube, readCubeData, plotMAP and plotXY will work on any subtype of AbstractCubeData\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.Cubes.CubeMem",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.CubeMem",
    "category": "type",
    "text": "CubeMem{T,N} <: AbstractCubeMem{T,N}\n\nAn in-memory data cube. It is returned by applying mapCube when the output cube is small enough to fit in memory or by explicitly calling readCubeData on any type of cube.\n\nFields\n\naxes a Vector{CubeAxis} containing the Axes of the Cube\ndata N-D array containing the data\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.CubeAPI.SubCube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.SubCube",
    "category": "type",
    "text": "immutable SubCube{T,C} <: AbstractCubeData{T,4}\n\nA view into the data cube of a single variable. Is the type returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable selected variable\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis LonAxis object\nlatAxis LatAxis object\ntimeAxis TimeAxis object\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.CubeAPI.SubCubeV",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.SubCubeV",
    "category": "type",
    "text": "immutable SubCubeV{T, C} <: AbstractCubeData{T,4}\n\nA view into the data cube with multiple variables. Returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable list of selected variables\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis LonAxis object\nlatAxis LatAxis object\ntimeAxis TimeAxis object\nvarAxis VariableAxis object\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.Cubes.MmapCube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.MmapCube",
    "category": "type",
    "text": "MmapCube{T,N}\n\nDefines a memory-mapped data cube which is stored on disk. Is generally returned by mapCube applications.\n\n\n\n\n\n"
},

{
    "location": "cube_access/#Cube-Types-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Types",
    "category": "section",
    "text": "While the getCubeData command returns an object of type SubCube, which represents a view into the ESDC, other cube operations will return different types of data cubes. The returned type will depend on the size of the returned cube. If it is small enough to fit into memory, it will be a CubeMem, otherwise a MmapCube. All these types of data cubes share the same interface defined by AbstractCubeData, which means you can index them, do calculation using mapCube or plot them using the commands described in Plotting.ESDL.AbstractCubeDataESDL.Cubes.CubeMemESDL.CubeAPI.SubCubeESDL.CubeAPI.SubCubeVESDL.Cubes.MmapCube"
},

{
    "location": "cube_access/#ESDL.Cubes.Axes.CubeAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.CubeAxis",
    "category": "type",
    "text": "abstract CubeAxis{T} <: AbstractCubeData{T,1}\n\nSupertype of all axes. Every CubeAxis is 1D Cube itself and can be passed to mapCube operationes. Although all cube axes are instances of the parametric typealias CategoricalAxis and RangeAxis, there are some typealiases defined to provide shorter and more convenient names for commonly used cube axes. Here is a list of the aliases:\n\nCategorical Axes\n\nVariableAxis represents different variables\nSpatialPointAxis represents a list of coordinates\nCountryAxis countries\nScaleAxis time scales after time series decomposition\nQuantileAxis represents different quantiles\n\nContinuous Axes\n\nLonAxis longitudes\nLatAxis latitudes\nTimeAxis time\nMSCAxis time step inside a year (for seasonal statistics)\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.Cubes.Axes.CategoricalAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.CategoricalAxis",
    "category": "type",
    "text": "CategoricalAxis{T,S}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol). The default constructor is:\n\nCategoricalAxis(axname::String,values::Vector{T})\n\n\n\n\n\n"
},

{
    "location": "cube_access/#ESDL.Cubes.Axes.RangeAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.RangeAxis",
    "category": "type",
    "text": "RangeAxis{T,S,R}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol) and R the type of the range which is used to represent the axis values. The default constructor is:\n\nRangeAxis(axname::String,values::Range{T})\n\n\n\n\n\n"
},

{
    "location": "cube_access/#Cube-Dimensions-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Dimensions",
    "category": "section",
    "text": "Dimensions are an essential part of each Cube in ESDL. Every dimension that a cube has, is associated with an axis that stores the values of the dimension. For example, a LatitudeAxis will contain a field values representing the chosen latitudes. Similarly, a VariableAxis will contain a list of Variable names. Axes types are divided in CategoricalAxis and RangeAxis types. All of them are subtypes of the abstract type CubeAxis.ESDL.Cubes.Axes.CubeAxisCategoricalAxis\nRangeAxis"
},

{
    "location": "cube_access/#ESDL.CubeAPI.known_regions",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.known_regions",
    "category": "constant",
    "text": "List of Continents\n\nAfrica\nAsia\nAustralia\nEurope\nNorth America\nSouth America\n\nList of SREX regions\n\nShort Name Long Name\nALA Alaska/N.W. Canada\nAMZ Amazon\nCAM Central America/Mexico\nCAR small islands regions Caribbean\nCAS Central Asia\nCEU Central Europe\nCGI Canada/Greenland/Iceland\nCNA Central North America\nEAF East Africa\nEAS East Asia\nENA East North America\nMED South Europe/Mediterranean\nNAS North Asia\nNAU North Australia\nNEB North-East Brazil\nNEU North Europe\nSAF Southern Africa\nSAH Sahara\nSAS South Asia\nSAU South Australia/New Zealand\nSEA Southeast Asia\nSSA Southeastern South America\nTIB Tibetan Plateau\nWAF West Africa\nWAS West Asia\nWNA West North America\nWSA West Coast South America\nANT Antarctica\nARC Arctic\nNTP Pacific Islands region\nSTP Southern Topical Pacific\nETP Pacific Islands region\nWIO West Indian Ocean\n\nList of countries\n\nShort Name Long Name\nABW Aruba\nAFG Afghanistan\nAGO Angola\nAIA Anguilla\nALB Albania\nALA Aland\nAND Andorra\nARE United Arab Emirates\nARG Argentina\nARM Armenia\nASM American Samoa\nATA Antarctica\nAshm Ashmore and Cartier Is.\nATF Fr. S. and Antarctic Lands\nATG Antigua and Barb.\nAUS Australia\nAUT Austria\nAZE Azerbaijan\nBDI Burundi\nBEL Belgium\nBEN Benin\nBFA Burkina Faso\nBGD Bangladesh\nBGR Bulgaria\nBHR Bahrain\nBHS Bahamas\nBIH Bosnia and Herz.\nBLM St. Barthelemy\nBLR Belarus\nBLZ Belize\nBMU Bermuda\nBOL Bolivia\nBRA Brazil\nBRB Barbados\nBRN Brunei\nBTN Bhutan\nBWA Botswana\nCAF Central African Rep.\nCAN Canada\nCHE Switzerland\nCHL Chile\nCHN China\nCIV Ivory Coast\nCLP Clipperton I.\nCMR Cameroon\nCNM \nCOD Congo (Kinshasa)\nCOG Congo (Brazzaville)\nCOK Cook Is.\nCOL Colombia\nCOM Comoros\nCPV Cape Verde\nCRI Costa Rica\nCSI Coral Sea Is.\nCUB Cuba\nCUW Curacao\nCYM Cayman Is.\nCYN N. Cyprus\nCYP Cyprus\nCZE Czech Rep.\nDEU Germany\nDJI Djibouti\nDMA Dominica\nDNK Denmark\nDOM Dominican Rep.\nDZA Algeria\nECU Ecuador\nEGY Egypt\nERI Eritrea\nESB Dhekelia\nESP Spain\nEST Estonia\nETH Ethiopia\nFIN Finland\nFJI Fiji\nFLK Falkland Is.\nFRA France\nFRO Faroe Is.\nFSM Micronesia\nGAB Gabon\nGaza Gaza\nGBR United Kingdom\nGEO Georgia\nGGY Guernsey\nGHA Ghana\nGIB Gibraltar\nGIN Guinea\nGMB Gambia\nGNB Guinea Bissau\nGNQ Eq. Guinea\nGRC Greece\nGRD Grenada\nGRL Greenland\nGTM Guatemala\nGUM Guam\nGUY Guyana\nHKG Hong Kong\nHMD Heard I. and McDonald Is.\nHND Honduras\nHRV Croatia\nHTI Haiti\nHUN Hungary\nIDN Indonesia\nIMN Isle of Man\nIND India\nIOA Indian Ocean Ter.\nIOT Br. Indian Ocean Ter.\nIRL Ireland\nIRN Iran\nIRQ Iraq\nISL Iceland\nISR Israel\nITA Italy\nJAM Jamaica\nJEY Jersey\nJOR Jordan\nJPN Japan\nKAB Baykonur\nKAS \nKAZ Kazakhstan\nKEN Kenya\nKGZ Kyrgyzstan\nKHM Cambodia\nKIR Kiribati\nKNA St. Kitts and Nevis\nKNM \nKOR S. Korea\nKOS Kosovo\nKWT Kuwait\nLAO Laos\nLBN Lebanon\nLBR Liberia\nLBY Libya\nLCA Saint Lucia\nLIE Liechtenstein\nLKA Sri Lanka\nLSO Lesotho\nLTU Lithuania\nLUX Luxembourg\nLVA Latvia\nMAC Macau\nMAF St. Martin\nMAR Morocco\nMCO Monaco\nMDA Moldova\nMDG Madagascar\nMDV Maldives\nMEX Mexico\nMHL Marshall Is.\nMKD Macedonia\nMLI Mali\nMLT Malta\nMMR Myanmar\nMNE Montenegro\nMNG Mongolia\nMNP N. Mariana Is.\nMOZ Mozambique\nMRT Mauritania\nMSR Montserrat\nMUS Mauritius\nMWI Malawi\nMYS Malaysia\nNAM Namibia\nNCL New Caledonia\nNER Niger\nNFK Norfolk Island\nNGA Nigeria\nNIC Nicaragua\nNIU Niue\nNLD Netherlands\nNOR Norway\nNPL Nepal\nNRU Nauru\nNZL New Zealand\nOMN Oman\nPAK Pakistan\nPAN Panama\nPCN Pitcairn Is.\nPER Peru\nPHL Philippines\nPLW Palau\nPNG Papua New Guinea\nPOL Poland\nPRI Puerto Rico\nPRK N. Korea\nPRT Portugal\nPRY Paraguay\nPYF Fr. Polynesia\nQAT Qatar\nROU Romania\nRUS Russia\nRWA Rwanda\nSAH W. Sahara\nSAU Saudi Arabia\nSDN Sudan\nSDS S. Sudan\nSEN Senegal\nSGP Singapore\nSGS S. Geo. and S. Sandw. Is.\nSHN Saint Helena\nSLB Solomon Is.\nSLE Sierra Leone\nSLV El Salvador\nSMR San Marino\nSOL Somaliland\nSOM Somalia\nSPM St. Pierre and Miquelon\nSRB Serbia\nSTP Sao Tome and Principe\nSUR Suriname\nSVK Slovakia\nSVN Slovenia\nSWE Sweden\nSWZ Swaziland\nSXM Sint Maarten\nSYC Seychelles\nSYR Syria\nTCA Turks and Caicos Is.\nTCD Chad\nTGO Togo\nTHA Thailand\nTJK Tajikistan\nTKM Turkmenistan\nTLS East Timor\nTON Tonga\nTTO Trinidad and Tobago\nTUN Tunisia\nTUR Turkey\nTUV Tuvalu\nTWN Taiwan\nTZA Tanzania\nUGA Uganda\nUKR Ukraine\nUMI U.S. Minor Outlying Is.\nURY Uruguay\nUSA United States\nUSG Guantanamo Bay USNB\nUZB Uzbekistan\nVAT Vatican\nVCT St. Vin. and Gren.\nVEN Venezuela\nVGB British Virgin Is.\nVIR U.S. Virgin Is.\nVNM Vietnam\nVUT Vanuatu\nPSE West Bank\nWLF Wallis and Futuna\nWSB Akrotiri\nWSM Samoa\nYEM Yemen\nZAF South Africa\nZMB Zambia\nZWE Zimbabwe\n\n\n\n\n\n"
},

{
    "location": "cube_access/#List-of-known-regions-1",
    "page": "Accessing the Data Cube",
    "title": "List of known regions",
    "category": "section",
    "text": "ESDL.CubeAPI.known_regions"
},

{
    "location": "analysis/#",
    "page": "Analysis",
    "title": "Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/#Analysis-1",
    "page": "Analysis",
    "title": "Analysis",
    "category": "section",
    "text": "The ESDL package comes with a list of predefined methods for statistical analysis. The functions are defined to work on specific axes. For example a function that removes the mean annual cycle, will always extract one time series after the other from a cube, process them, store the results and concatenate the resulting time series to a new output cube. It does not matter which other axes are defined in the input cube, the function will simply loop over these.The function will be applied to the whole cube in a memory-efficient way, which means that chunks of data are read, processed and then saved in the output cube. Whether the output cube is a MmapCube or a CubeMem is decided by the system, depending on parallelization and the size of the output cube.Here follows a list of analysis functions included in this package. If you have implemented or wrapped a method, that might be of interest to a broader community, please feel free to open a pull request."
},

{
    "location": "analysis/#Built-in-Functions-1",
    "page": "Analysis",
    "title": "Built-in Functions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis/#ESDL.Proc.MSC.gapFillMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.gapFillMSC",
    "category": "method",
    "text": "gapFillMSC(c::AbstractCubeData)\n\nFills missing values of each time series in a cube with the mean annual cycle.\n\nInput Axis Timeaxis\n\nOutput Axis Timeaxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.Proc.MSC.getMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.getMSC",
    "category": "method",
    "text": "getMSC(c::AbstractCubeData)\n\nReturns the mean annual cycle from each time series.\n\nInput Axis Timeaxis\n\nOutput Axis MSCaxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.Proc.MSC.getMedSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.getMedSC",
    "category": "method",
    "text": "getMedMSC(c::AbstractCubeData)\n\nReturns the median annual cycle from each time series.\n\nInput Axis Timeaxis\n\nOutput Axis MSCaxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.Proc.MSC.removeMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.removeMSC",
    "category": "method",
    "text": "removeMSC(c::AbstractCubeData)\n\nRemoves the mean annual cycle from each time series of a data cube.\n\nInput Axis Timeaxis\n\nOutput Axis Timeaxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#Seasonal-cycles-1",
    "page": "Analysis",
    "title": "Seasonal cycles",
    "category": "section",
    "text": "All of these functions take a data cube as an argument, process the input axis and replace it with the output axis.Modules = [ESDL.Proc.MSC]\nPrivate = false"
},

{
    "location": "analysis/#ESDL.Proc.TSDecomposition.filterTSFFT-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.TSDecomposition.filterTSFFT",
    "category": "method",
    "text": "filterTSFFT(c::AbstractCubeData)\n\nFilter each time series using a Fourier filter and return the decomposed series in 4 time windows (Trend, Long-Term Variability, Annual Cycle, Fast Oscillations)\n\nInput Axis Timeaxis\n\nOutput Axes Timeaxis, Scaleaxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#Time-series-decomposition-1",
    "page": "Analysis",
    "title": "Time series decomposition",
    "category": "section",
    "text": "This function takes a data cube as an argument. It adds an additional dimension to the cube and returns it. Every variable, time step and location will have a set of four values in the new dimension instead of just one.Modules = [ESDL.Proc.TSDecomposition]\nPrivate = false"
},

{
    "location": "analysis/#ESDL.Proc.CubeIO.exportcube-Tuple{ESDL.Cubes.AbstractCubeData,String}",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.exportcube",
    "category": "method",
    "text": "exportcube(r::AbstractCubeData,filename::String)\n\nSaves a cube object to a portable NetCDF file in filename.\n\nWhen saving, every RangeAxis will be converted to an axis in the NetCDF cube, while every categorical axis will be represented by a different variable inside the resulting file. Dimensions will be ordered according to the priorities keyword argument, which defaults to Dict(\"LON\"=>1,\"LAT\"=>2,\"TIME\"=>3), which means that the file will be stored with longitudes varying fastest.\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.Proc.CubeIO.extractLonLats-Tuple{ESDL.Cubes.AbstractCubeData,Array{T,2} where T}",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.extractLonLats",
    "category": "method",
    "text": "extractLonLats(c::AbstractCubeData,pl::Matrix)\n\nExtracts a list of longitude/latitude coordinates from a data cube. The coordinates are specified through the matrix pl where size(pl)==(N,2) and N is the number of extracted coordinates. Returns a data cube without LonAxis and LatAxis but with a SpatialPointAxis containing the input locations.\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.Proc.CubeIO.sampleLandPoints",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.sampleLandPoints",
    "category": "function",
    "text": "sampleLandPoints(cube, nsample;nomissing=false)\n\nGet an area-weighted sample from all non-ocean grid cells. This will return a new Cube where the LonAxis and LatAxis are condensed into a single SpatialPointAxis of length nsample. If nomissing=true only grid cells will be selected which don\'t contain any missing values. This makes sense for gap-filled cubes to make sure that grid cells with systematic seasonal gaps are not selected in the sample.\n\n\n\n\n\n"
},

{
    "location": "analysis/#Cube-transformations-1",
    "page": "Analysis",
    "title": "Cube transformations",
    "category": "section",
    "text": "Modules = [ESDL.Proc.CubeIO]\nPrivate = false"
},

{
    "location": "analysis/#ESDL.Proc.Stats.normalizeTS-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.Stats.normalizeTS",
    "category": "method",
    "text": "normalizeTS(c::AbstractCubeData)\n\nNormalize a time series to zero mean and unit variance\n\nInput Axes TimeAxis\n\nOutput Axes TimeAxis\n\n\n\n\n\n"
},

{
    "location": "analysis/#Simple-Statistics-1",
    "page": "Analysis",
    "title": "Simple Statistics",
    "category": "section",
    "text": "Another typical use case is the application of basic statistics like sum, mean and std applied on one or more cube axes. We therefore overload the method mapslices for data cubes.The main difference to the function exported in Base is that the dimensions to be sliced over are given by name and not by dimension index. For example,mapslices(mean, cube, (\"Lon\",\"Lat\"))will compute the mean over each spatial map contained in the data cube. Please note that that the mapslices function will execute the function once with random number input to determine the shape of the returned values and then pre-allocate the output array. Keep this in mind when your function has some side-effects. Although the mapslices function should work in most cases, it is advised to read about the mapCube function in Applying custom functions which gives you much more detailed control over the mapping operation.Applying these basic statistics functions makes sense, if the slices one wants to reduce fit in memory. However, if one wants to calculate some statistics on e.g. a time x lon x lat cube, one would preferably call one of the (Weighted-)OnlineStats methods.  An additional simple statistic function is:Modules = [ESDL.Proc.Stats]\nPrivate = false"
},

{
    "location": "analysis/#ESDL.DAT.@CubeTable",
    "page": "Analysis",
    "title": "ESDL.DAT.@CubeTable",
    "category": "macro",
    "text": "@CubeTable input_vars...\n\nMacro to turn a DataCube object into an iterable table. Takes a list of as arguments, specified either by a cube variable name alone or by a name=cube expression. For example @CubeTable cube1 country=cube2 would generate a Table with the entries cube1 and country, where cube1 contains the values of cube1 and country the values of cube2. The cubes are matched and broadcasted along their axes like in mapCube.\n\nIn addition, one can specify axes=(ax1,ax2...) when one wants to include the values of certain xes in the table. For example the command @CubeTable tair=cube1 axes=(lon,lat,time) would produce an iterator over a data structure with entries tair, lon, lat and time.\n\nLastly there is an option to specify which axis shall be the fastest changing when iterating over the cube. For example @CubeTable cube1 fastest=time will ensure that the iterator will always loop over consecutive time steps of the same location.\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.DAT.fittable",
    "page": "Analysis",
    "title": "ESDL.DAT.fittable",
    "category": "function",
    "text": "fittable(tab,o,fitsym;by=(),weight=nothing)\n\nLoops through an iterable table tab and thereby fitting an OnlineStat o with the values specified through fitsym. Optionally one can specify a field (or tuple) to group by. Any groupby specifier can either be a symbol denoting the entry to group by or an anynymous function calculating the group from a table row.\n\nFor example the following would caluclate a weighted mean over a cube weighted by grid cell area and grouped by country and month:\n\nfittable(iter,WeightedMean,:tair,weight=(i->abs(cosd(i.lat))),by=(i->month(i.time),:country))\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.DAT.cubefittable",
    "page": "Analysis",
    "title": "ESDL.DAT.cubefittable",
    "category": "function",
    "text": "cubefittable(tab,o,fitsym;post=getpostfunction(o),kwargs...)\n\nExecutes fittable on the @CubeTable tab with the (Weighted-)OnlineStat o, looping through the values specified by fitsym. Finally, writes the results from the TableAggregator to an output data cube.\n\n\n\n\n\n"
},

{
    "location": "analysis/#(Weighted-)OnlineStats-1",
    "page": "Analysis",
    "title": "(Weighted-)OnlineStats",
    "category": "section",
    "text": "It is possible to directly apply statistics included in the OnlineStats.jl package, as well as the WeightedOnlineStats.jl package on the data cube. Thus, statistical operations on data too big to fit into memory can be handled. The way to do this, is to first create a table interface to the cube, using the @CubeTable macro and then applying the required type of statistic using the cubefittable function:cTable = @CubeTable value=cube axes=(lat, lon, time, variable) fastest=variable\noutCube = cubefittable(cTable, o, :value; by=by, weight=weightfun)where o is a (Weighted-)OnlineStat data type and cube is the cube you want to apply the statistics to. The parameter name value in the @CubeTable macro and the corresponding symobl :value in the example above can be chosen arbitrarily, as long as they are equal in the macro and the cubefittable function. By default the cubefittable function will reduce all values over all axes of the cube, so if you want to do statistics grouped by variables on a certain axis, it has to be specified using the by keyword argument. by accepts a tuple of symbols and/or functions. If the cube supplied to the macro has more than one variable, it makes sense to at least supply by=(:variable,) to the function or else values of different variables will be mixed during calculation. The use of WeightedOnlineStats is encouraged to compensate for the increasing number of grid cells per area unit in higher latitudes.The following two examples illustrate the use of these functions. Suppose we want to calculate the mean of GPP, NEE and TER under the condition that Tair<280K and Tair>280K over all time steps and grid cells. This is achieved through the following lines of code:using ESDL, WeightedOnlineStats\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nc = Cube()\ncube  = getCubeData(c,variable=vars,longitude=lons,latitude=lats)\nt     = getCubeData(c,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\n\nsplitTemp(t) = if !ismissing(t) if t>280 return \"T>7C\" else return \"T<7C\" end else return missing end # Define the classification function\ncTable = @CubeTable value=cube axes=(lat,lon,time,variable) temp=t\ncubefittable(cTable, WeightedMean, :value, by=(i->splitTemp(i.temp), :variable), weight=(i->cosd(i.lat)))In-Memory data cube with the following dimensions\nCategory1           Axis with 2 elements: T<7C T>7C\nVariable            Axis with 3 elements: gross_primary_productivity net_ecosystem_exchange terrestrial_ecosystem_respiration\nTotal size: 54.0 bytes#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using ESDL\nusing WeightedOnlineStats\nusing Documenter\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nc = Cube()\ncube  = getCubeData(c,variable=vars,longitude=lons,latitude=lats)\nt     = getCubeData(c,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\n\nsplitTemp(t) = if !ismissing(t) if t>280 return \"T>7C\" else return \"T<7C\" end else return missing end # Define the classification function\ncTable = @CubeTable value=cube axes=(lat,lon,time,variable) temp=t\nmT = cubefittable(cTable, WeightedMean, :value, by=(i->splitTemp(i.temp), :variable), weight=(i->cosd(i.lat)))\nusing ESDLPlots\ngr()\np=plotXY(mT,xaxis=\"var\",group=\"tempclass\")\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))A second example would be that we want to calculate averages of the fluxes according to a country mask.using ESDL, WeightedOnlineStats\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nc     = Cube()\nm     = getCubeData(c,variable=\"country_mask\",longitude=lons,latitude=lats)\ncube  = getCubeData(c,variable=vars,longitude=lons,latitude=lats)\n\ncTable = @CubeTable value=cube axes=(lat,lon,time,variable) country=m\ncubefittable(cTable, WeightedMean, :value, by=(:country, :variable), weight=(i->cosd(i.lat)))In-Memory data cube with the following dimensions\nCountry             Axis with 1 elements: Ukraine\nVariable            Axis with 3 elements: gross_primary_productivity net_ecosystem_exchange terrestrial_ecosystem_respiration\nTotal size: 27.0 bytesThis will split the cube by country and variable and compute averages over the input variables.ESDL.DAT.@CubeTable\nESDL.DAT.fittable\nESDL.DAT.cubefittable"
},

{
    "location": "analysis/#Online-Histograms-and-quantiles-1",
    "page": "Analysis",
    "title": "Online Histograms and quantiles",
    "category": "section",
    "text": "It is possible to estimate histograms and quantiles of larger-than-memory datasets using an adaptive-bin histogram algorithm. The Base.quantile method is overloaded for objects of type AbstractCubeData, so the following works to estimate the 10% and 90% quantiles of all datapoints for each variable:using WeightedOnlineStats\nc=Cube()\nd=getCubeData(c,variable=[\"gross_primary_productivity\",\"net_ecosystem_exchange\"], region=\"Europe\")\ncTable = @CubeTable value=d axes=(lat,lon,time,variable)\n\nfitCube=cubefittable(cTable, WeightedHist(20), :value, by=(:variable,), weight=(i->cosd(i.lat)))\n\nq = quantile(fitCube,[0.1,0.9])In-Memory data cube with the following dimensions\nQuantile            Axis with 2 Elements from 0.1 to 0.9\nVariable            Axis with 2 elements: gross_primary_productivity net_ecosystem_exchange\nTotal size: 36.0 bytesq.data2×2 Array{Union{Missing, Float64},2}:\n 0.169621  -1.75922\n 6.04165    0.641276The WeightedHist call in the cubefittable function requires an integer argument, which sets the number of adaptive bins per histogram."
},

{
    "location": "analysis/#Elementwise-calculations-1",
    "page": "Analysis",
    "title": "Elementwise calculations",
    "category": "section",
    "text": "Doing elementwise calculations on the cube is generally done using the map function. A simple example is the conversion of degree Kelvin to degree Celsius. To subtract from each element of a data cube with 273.15, you can callc=Cube()\nkelvinCube = getCubeData(c, variable=\"air_temperature_2m\", region=\"Europe\")\ncelsiusCube = map(x -> x-273.15, kelvinCube)Transformed cube Data Cube view with the following dimensions\nLon                 Axis with 172 Elements from -9.875 to 32.875\nLat                 Axis with 140 Elements from 69.875 to 35.125\nTime                Axis with 1702 Elements from 1980-01-01 to 2016-12-26\nTotal size: 195.43 MBThis will not execute the computation immediately, but on the fly during the next computation or plotting. Please note that all values in the cube will be subject to the operation. So if the cube has more than one variable, this operation will apply to the values of all variables. The following is an example for mapping multiple values:c=Cube()\ntime = (Date(\"2001-01-01\"), Date(\"2001-12-31\"))\n\nfirstCube = getCubeData(c, time=time, variable=\"precipitation\")\nsecondCube = getCubeData(c, time=time, variable=\"interception_loss\")\ndiffcube = map((x,y)->x-y, firstCube, secondCube)Transformed cube Data Cube view with the following dimensions\nLon                 Axis with 1440 Elements from -179.875 to 179.875\nLat                 Axis with 720 Elements from 89.875 to -89.875\nTime                Axis with 46 Elements from 2001-01-01 to 2001-12-27\nTotal size: 227.42 MBThis calculates the difference of two data cubes, in this case the difference of precipitation and interception. Note here, that in this case both cubes must have the exact same dimensions and the dimensions must consist of the same elements.Common operations like the above examples can even be expressed in an easier way:  commonly used operators (+, -, *, /, max, min) and functions (sin, cos, exp, log, log10) are overloaded and can be applied on data cubes directly. So celsiusCube = (kelvinCube - 273.15) and diffcube = abs(firstCube - secondCube) would work as expected."
},

{
    "location": "analysis/#Applying-custom-functions-1",
    "page": "Analysis",
    "title": "Applying custom functions",
    "category": "section",
    "text": "The main feature of this package, and probably the one one that is most different to other geospatial frameworks is the mapCube function that executes arbitrary functions on arbitrary slices (and permutations) of one or more input data cubes. The function can be written in Julia or call into C libraries, call other packages, etc. In addition, the computation will be carried out in a memory-efficient manner, such that  data is read only in chunks, processed and then re-written slice-by-slice to allow out-of-core computation. The basic working principles are:The user-defined function (UDF) f takes a number N_in of arrays as input and its output is represented in a number N_out of output arrays.\nThe function f has at least N_out + N_in arguments, where so its signature is f(xout1, xout2, .... ,xoutN, xin1, xin2, ... xinN, addargs...; kwargs...)\nEvery input array of f will be a slice of an input data cube. The user specifies the axes that will be used for slicing by creating an InDims object for every input cube object and passing it to the mapCube function.\nThe dimensions of every output array have to be specified by the user by creating an OutDims object for every output cube and passing it to the mapCube function.\nThe input data cubes may have additional dimensions which are not used for slicing, these will be iterated over and the function f will be called repeatedly for every slice. If there are multiple input cubes, and contain additional axes of the same name, they are required to have the same axis elements, so that these elements are matched in the loop. If different input cubes have differently named additional axes, their oputer product will be applied and the axes will all be added to the output cubes."
},

{
    "location": "analysis/#A-minimal-example-1",
    "page": "Analysis",
    "title": "A minimal example",
    "category": "section",
    "text": "In order to understand how these principles are applied, let us walk through a very basic example, namely a function that normalizes the time series of a data cube. This means, we want to scale each time series in the cube in a way so its mean will be 0 and its standard deviation will be 1. To translate this into the principles mentioned above:Our function that we want to writes will take a 1D-array as an input (a time series) and write an output of the same length.\nSo the function will have to accept two arguments, which will be called xin for the input time series and xout for the output time series. Such a function can be defined like this:using ESDL\n\nfunction mynorm(xout, xin)\n    # if all values in the current input slice are missing, return all missings in the output slice\n    all(ismissing, xin) && return xout[:]=missing\n    # else calculate the mean and std of the current slice (time series of 1 variable at one location (lat/lon))\n    m = mean(skipmissing(xin))\n    s = std(skipmissing(xin))\n\n    if s > 0 # std non-zero\n        xout[:].=(xin.-m)./s # elementwise calculation of normalized values\n    else # time series is probably constant\n        xout[:]=0\n    end\nendNext we have to define the input dimensions for our data cube. We want the function to operate on the time axis, so we create an object:indims = InDims(\"Time\")The InDims constructor takes any number of positional arguments and tries to convert them into a description of a cube axis, so you can pass it a string, an axis type or an axis itself, all of which will be matched against the axes of the input data cube. Next we define the output axis:outdims = OutDims(\"Time\")Similarly to the input cube constructor, for OutDims any number of descriptors is allowed. When passed a single string or axis type, then a matching input axis will be used as the output dimension. However, when a new output axis is created by the function, other possibilities for the output axis description are possible.Having defined these objects, we can finally load a data cube handle and apply the function, the dimension description gets passed using the indims and outdims keywords:c = Cube()\nd = getCubeData(c,variable = [\"gross_primary_productivity\", \"net_ecosystem_exchange\"],time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\nd_norm = mapCube(mynorm, d, indims=indims, outdims=outdims)In-Memory data cube with the following dimensions\nTime                Axis with 92 Elements from 2001-01-01 to 2002-12-27\nLon                 Axis with 4 Elements from 50.125 to 50.875\nLat                 Axis with 4 Elements from 30.875 to 30.125\nVariable            Axis with 2 elements: gross_primary_productivity net_ecosystem_exchange\nTotal size: 14.38 KBThe resulting cube has the same dimensions like the input cube. All variables except Time were just looped over and the result was stored in a new data cube."
},

{
    "location": "analysis/#Calculations-on-multiple-cubes-1",
    "page": "Analysis",
    "title": "Calculations on multiple cubes",
    "category": "section",
    "text": "The first example showed how to handle a single input- and a single output- data cube. Here we give a first example for doing an operation on two output cubes having different shapes. To do this, let\'s go back to the myNorm example and assume that we do not only want to return the normalized time series but also the standard deviation and the mean of each time series. The problem is, that mean and standard deviation are scalars while the time series is a vector so they can not easily be coerced into a single output cube. The solution is to return multiple output cubes. So we define the norm function and Indims and Outdims as follows:function mynorm_return_stdm(xout_ts, xout_m, xout_s, xin)\n  # Check if we have only missing values\n  if all(ismissing,xin)\n    xout_ts[:].=missing\n    xout_m[1]=missing\n    xout_s[1]=missing\n  else\n    m = mean(skipmissing(xin))\n    s = std(skipmissing(xin))\n    if s>0 # See if time series is not constant\n      xout_ts[:].=(xin.-m)./s\n    else #Time series is probably constant\n      xout_ts[:].=0.0\n    end\n    # Now write mean and std to output\n    xout_s[1]=s\n    xout_m[1]=m\n  end\nend\n\nindims     = InDims(\"Time\")\noutdims_ts = OutDims(\"Time\")\noutdims_m  = OutDims()\noutdims_s  = OutDims()\n\nd_norm, m, s = mapCube(mynorm_return_stdm, d, indims=indims, outdims=(outdims_ts, outdims_m, outdims_s))(Memory mapped cube with the following dimensions\nTime                Axis with 506 Elements from 2001-01-01 to 2011-12-27\nLon                 Axis with 172 Elements from -9.875 to 32.875\nLat                 Axis with 140 Elements from 69.875 to 35.125\nVariable            Axis with 2 elements: gross_primary_productivity transpiration\nTotal size: 116.2 MB\n, In-Memory data cube with the following dimensions\nLon                 Axis with 172 Elements from -9.875 to 32.875\nLat                 Axis with 140 Elements from 69.875 to 35.125\nVariable            Axis with 2 elements: gross_primary_productivity transpiration\nTotal size: 235.16 KB\n, In-Memory data cube with the following dimensions\nLon                 Axis with 172 Elements from -9.875 to 32.875\nLat                 Axis with 140 Elements from 69.875 to 35.125\nVariable            Axis with 2 elements: gross_primary_productivity transpiration\nTotal size: 235.16 KB\n)First of all lets see what changed. We added two more arguments to the UDF, which are the additional output arrays xout_m and xout_s. They contain the additional output cubes. Then we added an additional output cube description OutDims() for each cube, which has no argument, because these outputs are singular values (mean and standard deviation per location and variable) and don\'t contain any dimensions. When we apply the function, we simply pass a tuple of output cube descriptions to the outdims keyword and the mapCube function returns then three cubes: the full (time x lon x lat x variable) cube for the normalized time series and two (lon x lat x variable) cubes for mean and standard deviation.   Of course, this also works the same way if you want to apply a function to multiple input data cubes. To stay with the normalization example, we assume that we want to normalize our dataset with some externally given standard deviation and mean, which are different for every pixel. Then multiple InDims objects have to be defined:indims_ts = InDims(\"Time\")\nindims_m  = InDims()\nindims_s  = InDims()\noutdims   = OutDims(\"Time\")and define the function that does the scaling, which accepts now additional arguments for the scaling and offset:function mynorm_given_stdm(xout, xin_ts, m, s)\n  xout[:]=(xin_ts[:].-m[1])./s[1]\nend\n\nmapCube(mynorm_given_stdm, (d,m,s), indims = (indims_ts, indims_m, indims_s), outdims = outdims)Memory mapped cube with the following dimensions\nTime                Axis with 506 Elements from 2001-01-01 to 2011-12-27\nLon                 Axis with 172 Elements from -9.875 to 32.875\nLat                 Axis with 140 Elements from 69.875 to 35.125\nVariable            Axis with 2 elements: gross_primary_productivity transpiration\nTotal size: 116.2 MBNote that the operation will attempt to match the axes that the cubes contain. Because the cubes d,m and s all contain a LonAxis, a LatAxis and a VariableAxis with the same values, it will loop over these, so at every pixel the corresponding mean and standard deviation values are used."
},

{
    "location": "analysis/#Axes-are-cubes-1",
    "page": "Analysis",
    "title": "Axes are cubes",
    "category": "section",
    "text": "In some cases one needs to have access to the value of an axis. For example when one wants to calculate a spatial aggregation, the latitudes are important to determine grid cell weights. To do this, one can pass a cube axis to mapCube as if it was a cube having only one dimension. The values will then correspond to the axis values (the latitudes in degrees in this case).using ESDL # hide\nfunction spatialAggregation(xout::Array{T,0}, xin::Matrix, latitudes::AbstractVector) where T\n  #code goes here\nend\n\n#Extract the latitude axis\nlatitudecube = ESDL.getAxis(\"Lat\",cube)\n\nindims_map = InDims(LonAxis, LatAxis)\nindims_lat = InDims(LatAxis)\noutdims    = OutDims()\nmapCube(spatialAggregation, (cube,latitudecube), indims = (indims_map, indims_lat), outdims = outdims);Here, the function will operate on a (lon x lat) matrix and one has access to the latitude values inside the function. Note that the getAxis function is very useful in this context, since it extracts the axis of a certain name from a given data cube object. Then we pass the cube axis as a second input cube to the mapCube function (see also Calculations on multiple cubes)."
},

{
    "location": "analysis/#Passing-additional-arguments-1",
    "page": "Analysis",
    "title": "Passing additional arguments",
    "category": "section",
    "text": "If a function call needs additional arguments, they are simply appended to the mapCube call and then get passed to the function. For example, if one wants to apply a multivariate extreme event detection method detectExtremes, where one can choose from several methods, the function signature would look like this:function detectExtremes(xout, xin, method_name)\n  #code goes here\nend\n\ninAxes  = InDims(TimeAxis,VariableAxis)\noutAxes = OutDims(TimeAxis)\nmethod = \"KDE\"\nmapCube(detectExtremes, d, method, indims = inAxes, outdims = outAxes);The method would then be called e.g. with which would pass the String \"KDE\" as the third positional argument to the function."
},

{
    "location": "analysis/#Generating-new-output-axes-1",
    "page": "Analysis",
    "title": "Generating new output axes",
    "category": "section",
    "text": "So far in our examples we always re-used axes from the input cube as output cube axes. However, it is possible to create new axes and use them for the resulting data cubes from a mapCube operation. The example we want to look at is a polynomial regression between two variables. Assume we want to describe the relationship between GPP and ecosystem respiration for each pixel through a polynomial of degree N.So for each pixel we want to do the polynomial regression on the two variables and then return a vector of coefficients. We define the function that does the calculation as:using ESDL\nusing Polynomials\nfunction fit_npoly(xout, var1, var2, n)\n  p = polyfit(var1, var2, n)\n  xout[:] = coeffs(p)\nendNow assume we want to fit a polynomial of order 2 to our variables. We first create the output axis we want to use, you can either use CategoricalAxis for non-continuous quantities or RangeAxis for continuous axes. Here we create a categorical Axis and pass it to the OutDims constructor:polyaxis = CategoricalAxis(\"Coefficients\",[\"Offset\",\"1\",\"2\"])\n\nindims1  = InDims(\"Time\")\nindims2  = InDims(\"Time\")\noutdims  = OutDims(polyaxis)So here we don\'t describe the output axis through a type or name, but by passing an actual object. Then we can call the mapCube function:c   = Cube()\ngpp = getCubeData(c,variable = \"gross_primary_productivity\",time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\nter = getCubeData(c,variable = \"terrestrial_ecosystem_respiration\",time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\n\nmapCube(fit_npoly,(gpp,ter),2,indims = (indims1,indims2), outdims = outdims)In-Memory data cube with the following dimensions\nCoefficients        Axis with 3 elements: Offset 1 2\nLon                 Axis with 4 Elements from 50.125 to 50.875\nLat                 Axis with 4 Elements from 30.875 to 30.125\nTotal size: 240.0 bytesReturned is a 3D cube with dimensions coeff x lon x lat."
},

{
    "location": "analysis/#Wrapping-mapCube-calls-into-user-friendly-functions-1",
    "page": "Analysis",
    "title": "Wrapping mapCube calls into user-friendly functions",
    "category": "section",
    "text": "When a certain function is used more often, it makes sense to wrap it into a single function so that the user does not have to deal with the input and output dimension description. For the polynomial regression example one could, for example, define this convenience wrapper and then call it directly, now for a third-order regression:function fitpoly(cube1, cube2, n)\n  polyaxis = CategoricalAxis(\"Coefficients\",[\"Offset\";string.(1:n)])\n\n  indims1  = InDims(\"Time\")\n  indims2  = InDims(\"Time\")\n  outdims  = OutDims(polyaxis)\n\n  mapCube(fit_npoly,(cube1,cube2),n,indims = (indims1,indims2), outdims = outdims)\nend\n\nfitpoly(gpp,ter,3)In-Memory data cube with the following dimensions\nCoefficients        Axis with 4 elements: Offset 1 2 3\nLon                 Axis with 4 Elements from 50.125 to 50.875\nLat                 Axis with 4 Elements from 30.875 to 30.125\nTotal size: 320.0 bytesThis is exactly the way the built-in functions in Analysis were generated. So in case you want to contribute some functionality that you feel would benefit this package, please open a pull request at https://github.com/esa-esdl/ESDL.jl"
},

{
    "location": "analysis/#ESDL.DAT.InDims",
    "page": "Analysis",
    "title": "ESDL.DAT.InDims",
    "category": "type",
    "text": "InDims(axisdesc;...)\n\nCreates a description of an Input Data Cube for cube operations. Takes a single   or a Vector/Tuple of axes as first argument. Axes can be specified by their   name (String), through an Axis type, or by passing a concrete axis.\n\nKeyword arguments\n\nartype how shall the array be represented in the inner function. Defaults to AsArray, alternatives are AsDataFrame or AsAxisArray\nfilter define some filter to skip the computation, e.g. when all values are missing. Defaults to   AllMissing(), possible values are AnyMissing(), AnyOcean(), StdZero(), NValid(n)   (for at least n non-missing elements). It is also possible to provide a custom one-argument function   that takes the array and returns true if the compuation shall be skipped and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.DAT.OutDims",
    "page": "Analysis",
    "title": "ESDL.DAT.OutDims",
    "category": "type",
    "text": "OutDims(axisdesc;...)\n\nCreates a description of an Output Data Cube for cube operations. Takes a single   or a Vector/Tuple of axes as first argument. Axes can be specified by their   name (String), through an Axis type, or by passing a concrete axis.\n\naxisdesc: List of input axis names\ngenOut: function to initialize the values of the output cube given its element type. Defaults to zero\nfinalizeOut: function to finalize the values of an output cube, defaults to identity.\nretCubeType: sepcifies the type of the return cube, can be CubeMem to force in-memory, TempCube to force disk storage, or \"auto\" to let the system decide.\nouttype: force the output type to a specific type, defaults to Any which means that the element type of the first input cube is used\n\n\n\n\n\n"
},

{
    "location": "analysis/#ESDL.DAT.mapCube",
    "page": "Analysis",
    "title": "ESDL.DAT.mapCube",
    "category": "function",
    "text": "mapCube(fun, cube, addargs...;kwargs)\n\nMap a given function fun over slices of the data cube cube.\n\nKeyword arguments\n\nmax_cache=1e7 maximum size of blocks that are read into memory, defaults to approx 10Mb\nouttype::DataType output data type of the operation\nindims::InDims List of input cube descriptors of type InDims for each input data cube\noutdims::OutDims List of output cube descriptors of type OutDims for each output cube\ninplace does the function write to an output array inplace or return a single value> defaults to true\nispar boolean to determine if parallelisation should be applied, defaults to true if workers are available.\noutfolder a folder where the output cube is stroed, defaults to the result of ESDLdir()\nshowprog boolean indicating if a ProgressMeter shall be shown\nkwargs additional keyword arguments passed to the inner function\n\nThe first argument is always the function to be applied, the second is the input cube or a tuple input cubes if needed.\n\n\n\n\n\n"
},

{
    "location": "analysis/#Reference-documentation-for-mapCube-related-functions-1",
    "page": "Analysis",
    "title": "Reference documentation for mapCube-related functions",
    "category": "section",
    "text": "ESDL.DAT.InDimsESDL.DAT.OutDimsESDL.DAT.mapCube"
},

{
    "location": "plotting/#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": "#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using ESDL # hide\nusing ESDLPlots\nusing Dates\nimport Documenter\nc=Cube() # hide"
},

{
    "location": "plotting/#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "CurrentModule = Main.ESDLPlots"
},

{
    "location": "plotting/#ESDLPlots.plotMAP",
    "page": "Plotting",
    "title": "ESDLPlots.plotMAP",
    "category": "function",
    "text": "plotMAP(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)\n\nMap plotting tool for cube objects, can be called on any type of cube data\n\nKeyword arguments\n\ndmin, dmax Minimum and maximum value to be used for color transformation\ncolorm colormap to be used. Find a list of colormaps in the Colors.jl package\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nsymmetric make the color scale symmetric around zero\nxaxis which axis should be used for x axis, defaults to LonAxis\nyaxis which axis should be used for y axis, defaults to LatAxis\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plot\n\nIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\nIf the properties field of cube contains a \"labels\" field with a dictionary mapping field values to the name of the class represented.\n\n\n\n\n\n"
},

{
    "location": "plotting/#Plot-geographical-maps-1",
    "page": "Plotting",
    "title": "Plot geographical maps",
    "category": "section",
    "text": "Map plotting is generally done using the plotMAP function:plotMAPHere is an example on how to plot a map. The keyword arguments specify the time step (time=Date(1980,1,1)) and the variable (var=\"air_temperature_2m\").cube=getCubeData(c,variable=[\"air_temperature_2m\",\"gross_primary_productivity\"])\nplotMAP(cube,time=Date(1980,1,1), var=\"air_temperature_2m\")Inside a Jupyter notebook, the keyword arguments can be omitted and sliders or dropdown menus will be shown to select the desired values."
},

{
    "location": "plotting/#ESDLPlots.plotMAPRGB",
    "page": "Plotting",
    "title": "ESDLPlots.plotMAPRGB",
    "category": "function",
    "text": "plotMAPRGB(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)\n\nMap plotting tool for colored plots that use up to 3 variables as input into the several color channels. Several color representations from the Colortypes.jl package are supported, so that besides RGB (XYZ)-plots one can create HSL, HSI, HSV or Lab and Luv plots.\n\nKeyword arguments\n\ndmin, dmax Minimum and maximum value to be used for color transformation, can be either a single value or a tuple, when min/max values are given for each channel\nrgbaxis which axis should be used to select RGB channels from\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nlabels given a list of labels this will create a plot with a non-continouous color scale where integer cube values [1..N] are mapped to the given labels.\ncType ColorType to use for the color representation. Can be one of RGB, XYZ, Lab, Luv, HSV, HSI, HSL\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plot\nc1, c2, c3 values on the first, second, third colour channel\n\nIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n\n\n"
},

{
    "location": "plotting/#RGB-Maps-1",
    "page": "Plotting",
    "title": "RGB Maps",
    "category": "section",
    "text": "A common method to plot several variables at once in a single map is an RGB map. This is possible through the plotMAPRGB function.plotMAPRGBFor example, if we want to plot GPP, NEE and TER as an RGB map for South America, we can do the following:cube=getCubeData(c,variable=\"Biosphere\",region=\"South America\")\nusing ColorTypes\nplotMAPRGB(cube,c1=\"gross_primary_productivity\",\n             c2=\"net_ecosystem_exchange\",\n             c3=\"terrestrial_ecosystem_respiration\",\n             cType=Lab,\n             time=Date(2003,2,26))"
},

{
    "location": "plotting/#Other-plots-1",
    "page": "Plotting",
    "title": "Other plots",
    "category": "section",
    "text": ""
},

{
    "location": "plotting/#ESDLPlots.plotXY",
    "page": "Plotting",
    "title": "ESDLPlots.plotXY",
    "category": "function",
    "text": "plotXY(cube::AbstractCubeData; group=0, xaxis=-1, kwargs...)\n\nGeneric plotting tool for cube objects, can be called on any type of cube data.\n\nKeyword arguments\n\nxaxis which axis is to be used as x axis. Can be either an axis Datatype or a string. Short versions of axes names are possible as long as the axis can be uniquely determined.\ngroup it is possible to group the plot by a categorical axis. Can be either an axis data type or a string.\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plot\n\nIf a dimension is not the x axis or group variable and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n\n\n"
},

{
    "location": "plotting/#XY-plots-1",
    "page": "Plotting",
    "title": "XY plots",
    "category": "section",
    "text": "Generating x-y type plots where the x axis is one of the cube axes and the y axis is the corresponding cube value is done with the generic plotXY function.plotXYHere are two examples for using this function:cube=getCubeData(c,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,32.0),latitude=(50.0,52.0))\nplotXY(cube,xaxis=\"time\",group=\"variable\",lon=31,lat=51)using ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nc=Cube() # hide\ncube=getCubeData(c,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,32.0),latitude=(50.0,52.0))\np=plotXY(cube,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))This is a plot showing the mean values of the chosen variables across different latitudes at 30° EcTable = @CubeTable value=cube axes=(lat,lon,time,variable)\nm = cubefittable(cTable, WeightedMean, :value, weight=(i->cosd(i.lat)), by=(:variable, :lat, :lon))\nplotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)using ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nc=Cube() # hide\ncube=getCubeData(c,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,32.0),latitude=(50.0,52.0))\ncTable = @CubeTable value=cube axes=(lat,lon,time,variable)\nm = cubefittable(cTable, WeightedMean, :value, weight=(i->cosd(i.lat)), by=(:variable, :lat, :lon))\np=plotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))"
},

{
    "location": "plotting/#ESDLPlots.plotScatter",
    "page": "Plotting",
    "title": "ESDLPlots.plotScatter",
    "category": "function",
    "text": "plotScatter(cube::AbstractCubeData; vsaxis=VariableAxis, alongaxis=0, group=0, xaxis=0, yaxis=0, kwargs...)\n\nGeneric plotting tool for cube objects to generate scatter plots, like variable A against variable B. Can be called on any type of cube data.\n\nKeyword arguments\n\nvsaxis determines the axis from which the x and y variables are drawn.\nalongaxis determines the axis along which the variables are plotted. E.g. if you choose TimeAxis, a dot will be plotted for each time step.\nxaxis index or value of the variable to plot on the x axis\nyaxis index or value of the variable to plot on the y axis\ngroup it is possible to group the plot by an axis. Can be either an axis data type or a string. Caution: This will increase the number of plotted data points\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plot\n\nIf a dimension is not the vsaxis or alongaxis or group and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n\n\n"
},

{
    "location": "plotting/#Scatter-plots-1",
    "page": "Plotting",
    "title": "Scatter plots",
    "category": "section",
    "text": "In order to do scatter plots, i.e. plotting variable A against variable B one can use the plotScatter function.plotScatterA short example is shown here:cube=getCubeData(c,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,32.0),latitude=(50.0,52.0))\nplotScatter(cube,alongaxis=TimeAxis,xaxis=\"net_ecosystem_exchange\",yaxis=\"gross_primary_productivity\",lat=50, lon=30)using ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nc=Cube() # hide\ncube=getCubeData(c,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,32.0),latitude=(50.0,52.0))\np=plotScatter(cube,alongaxis=TimeAxis,xaxis=\"net_ecosystem_exchange\",yaxis=\"gross_primary_productivity\",lat=50, lon=30)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))"
},

{
    "location": "iotools/#",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "page",
    "text": ""
},

{
    "location": "iotools/#ESDL.Cubes.saveCube",
    "page": "Loading and saving results",
    "title": "ESDL.Cubes.saveCube",
    "category": "function",
    "text": "saveCube(c::AbstractCubeData, name::String)\n\nPermanently saves a data cube to disk by either moving the folder out of the tmp directory (for TempCubes) or by storing the data to disk (for CubeMem)\n\n\n\n\n\nsaveCube(cube,name::String)\n\nSave a MmapCube or CubeMem to the folder name in the ESDL working directory.\n\nSee also loadCube\n\n\n\n\n\n"
},

{
    "location": "iotools/#ESDL.Cubes.loadCube",
    "page": "Loading and saving results",
    "title": "ESDL.Cubes.loadCube",
    "category": "function",
    "text": "loadCube(name::String)\n\nLoads a cube that was previously saved with saveCube. Returns a TempCube object.\n\n\n\n\n\n"
},

{
    "location": "iotools/#ESDL.ESDLTools.@loadOrGenerate",
    "page": "Loading and saving results",
    "title": "ESDL.ESDLTools.@loadOrGenerate",
    "category": "macro",
    "text": "macro loadOrGenerate(x...,expression)\n\nTakes a list of variablename=>\"Storage Name\" pairs. Checks if all datasets can be found on disk and loads them. If not, the datasets will be regenerated by evaluating the given expression.\n\nTo force recalculation, call ESDL.recalculate(true) before evaluating the macro.\n\nExample\n\nThe following lines will check if cubes with the names \"Filled\" and \"Normalized\" exist on disk, load them and assign the variable names cube_filled and cube_norm. If the datasets to not exist on disk, they are generated and saved under the given names.\n\n@loadOrGenerate cube_filled=>\"Filled\" cube_norm=>\"Normalized\" begin\ncube_filled = mapCube(gapFillMSC,d)\ncube_norm   = mapCube(normalize_TS,d)\nend\n\n\n\n\n\n\n"
},

{
    "location": "iotools/#Loading-and-saving-results-1",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "section",
    "text": "saveCubeloadCubeCurrentModule = ESDL.ESDLTools@loadOrGenerate"
},

{
    "location": "lib/misc/#",
    "page": "Other functions",
    "title": "Other functions",
    "category": "page",
    "text": ""
},

{
    "location": "lib/misc/#ESDL.Cubes.readCubeData",
    "page": "Other functions",
    "title": "ESDL.Cubes.readCubeData",
    "category": "function",
    "text": "readCubeData(cube::AbstractCubeData)\n\nGiven any type of AbstractCubeData returns a CubeMem from it.\n\n\n\n\n\n"
},

{
    "location": "lib/misc/#ESDL.Cubes.Axes.getAxis",
    "page": "Other functions",
    "title": "ESDL.Cubes.Axes.getAxis",
    "category": "function",
    "text": "getAxis(desc::String, c::AbstractCubeData)\n\nGiven the string of an axis name and a cube, returns this axis of the cube.\n\n\n\n\n\n"
},

{
    "location": "lib/misc/#ESDL.Cubes.caxes",
    "page": "Other functions",
    "title": "ESDL.Cubes.caxes",
    "category": "function",
    "text": "Returns the axes of a Cube\n\n\n\n\n\n"
},

{
    "location": "lib/misc/#ESDL.Proc.getNpY",
    "page": "Other functions",
    "title": "ESDL.Proc.getNpY",
    "category": "function",
    "text": "getNpY(cube::AbstractCubeData)\ngetNpY(cube::InputCube)\n\nGet the number of time steps per year\n\n\n\n\n\n"
},

{
    "location": "lib/misc/#ESDL.CubeAPI.showVarInfo",
    "page": "Other functions",
    "title": "ESDL.CubeAPI.showVarInfo",
    "category": "function",
    "text": "showVarInfo(cube)\n\nShows the metadata and citation information on variables contained in a cube.\n\n\n\n\n\n"
},

{
    "location": "lib/misc/#Other-functions-1",
    "page": "Other functions",
    "title": "Other functions",
    "category": "section",
    "text": "readCubeData\ngetAxis\ncaxes\ngetNpY\nshowVarInfo"
},

]}
