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
    "text": "You can find some example Jupyter Notebooks that using CABLAB.jl here"
},

{
    "location": "index.html#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"thecube.md\",\n    \"cube_access.md\",\n    \"plotting.md\",\n    \"analysis.md\",\n    \"adding_new.md\",\n    \"iotools.md\",\n]\nDepth = 1"
},

{
    "location": "index.html#Acknowledgements-1",
    "page": "Home",
    "title": "Acknowledgements",
    "category": "section",
    "text": "The development of this package was funded by ESA STSE and implemented by the Max-Planck-Institute for Biogeochemistry."
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
    "text": "(Image: The CABLAB data cube)The Earth System data cube is a collection of land surface and atmospheric Eart observation data sets on a common spatial resolution of 5min and a common temporal resolution of 8 days in the time range from 2001 to 2011. See the Product Handbook for more information."
},

{
    "location": "cube_access.html#",
    "page": "Accessing the Data Cube",
    "title": "Accessing the Data Cube",
    "category": "page",
    "text": ""
},

{
    "location": "cube_access.html#Accessing-the-Data-Cube-1",
    "page": "Accessing the Data Cube",
    "title": "Accessing the Data Cube",
    "category": "section",
    "text": ""
},

{
    "location": "cube_access.html#Open-a-datacube-1",
    "page": "Accessing the Data Cube",
    "title": "Open a datacube",
    "category": "section",
    "text": "Before one can read data from a cube, it has to be opened. To open a data cube which is accesible through the file system, use the Cube constructor:using CABLAB\nc = Cube(\"/patch/to/cube\")CABLAB data cube at /Net/Groups/BGI/scratch/DataCube/v0.2.0/high-res/\nSpatial resolution:  4320x2160 at 0.083333 degrees.\nTemporal resolution: 2001-01-01T00:00:00 to 2012-01-01T00:00:00 at 8daily time steps\nVariables:           aerosol_optical_thickness_1610 aerosol_optical_thickness_550 aerosol_optical_thickness_555 aerosol_optical_thickness_659 aerosol_optical_thickness_865 air_temperature_2m bare_soil_evaporation black_sky_albedo burnt_area c_emissions country_mask evaporation evaporative_stress fractional_snow_cover gross_primary_productivity interception_loss land_surface_temperature latent_energy net_ecosystem_exchange open_water_evaporation ozone potential_evaporation precipitation root_moisture sensible_heat snow_sublimation snow_water_equivalent soil_moisture surface_moisture terrestrial_ecosystem_respiration transpiration water_mask water_vapour white_sky_albedoThis returns a Cube object that contains some basics information about the cube which is printed on the screen."
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.getCubeData",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.CubeAPI.getCubeData",
    "category": "Function",
    "text": "getCubeData(cube::Cube;variable,time,latitude,longitude)\n\nReturns a view into the data cube. The following keyword arguments are accepted:\n\nvariable: an variable index or name or an iterable returning multiple of these (var1, var2, ...)\ntime: a single Date object or a 2-element iterable (time_start, time_end)\nlatitude: a single latitude value or a 2-element iterable (latitude_start, latitude_end)\nlongitude: a single longitude value or a 2-element iterable (longitude_start, longitude_end)\nregion: specify a country or SREX region by name or ISO_A3 code. Type ?CABLAB.known_regions to see a list of pre-defined areas\n\nReturns a SubCube object which represents a view into the original data cube.\n\n\n\n"
},

{
    "location": "cube_access.html#Getting-a-data-handle-1",
    "page": "Accessing the Data Cube",
    "title": "Getting a data handle",
    "category": "section",
    "text": "using CABLAB\nc=RemoteCube()var=[\"c_emissions\",\"air_temperature_2m\"]\ntime=(Date(\"2001-01-01\"),Date(\"2001-12-31\"))\ncubedata = getCubeData(c,longitude=(30,31),latitude=(50,51),time=time,variable=var)This returns a view into the Data Cube, on which further calculations can be applied. All keyword arguments default to the full range, so calling getCubeData without keyword arguments will return a view into the whole data cube.CABLAB.CubeAPI.getCubeDataNo data is read yet. Here you can start to do some calculations on your sub-cube, see either Analysis for a list of methods provided by this framework or Applying custom functions to apply your own functions on the cube. If you just want to visualize the cube see this section Plotting."
},

{
    "location": "cube_access.html#CABLAB.Proc.CubeIO.extractLonLats",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Proc.CubeIO.extractLonLats",
    "category": "Function",
    "text": "extractLonLats(c::AbstractCubeData,pl::Matrix)\n\nExtracts a list of longitude/latitude coordinates from a data cube. The coordinates are specified through the matrix pl where size(pl)==(N,2) and N is the number of extracted coordinates. Returns a data cube without LonAxis and LatAxis but with a SpatialPointAxis containing the input locations. \n\n\n\n"
},

{
    "location": "cube_access.html#Extracting-a-list-of-lon/lat-coordinates-from-a-data-cube-1",
    "page": "Accessing the Data Cube",
    "title": "Extracting a list of lon/lat coordinates from a data cube",
    "category": "section",
    "text": "There are situations in which only a certain list of longitude/latitude pairs is needed for the analysis. One can extract such a list by first creating a cube view containing all the needed variables and then apply the extractLonLats function.CABLAB.Proc.CubeIO.extractLonLatsHere is an example how to apply the function:cubedata = getCubeData(c,longitude=(30,31),latitude=(50,51),time=time,variable=var)\nll       = [30.1 50.2;\n            30.5 51.1;\n            30.7 51.1] #Lon/Lats to be extracted\ncubenew  = extractLonLats(cubedata,ll)"
},

{
    "location": "cube_access.html#CABLAB.Cubes.AbstractCubeData",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.AbstractCubeData",
    "category": "Type",
    "text": "AbstractCubeData{T,N}\n\nSupertype of all cubes. T is the data type of the cube and N the number of dimensions. Beware that an AbstractCubeData does not implement the AbstractArray interface. However, the CABLAB functions mapCube, reduceCube, readCubeData, plotMAP and plotXY will work on any subtype of AbstractCubeData\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.CubeMem",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.CubeMem",
    "category": "Type",
    "text": "CubeMem{T,N} <: AbstractCubeMem{T,N}\n\nAn in-memory data cube. It is returned by applying mapCube when the output cube is small enough to fit in memory or by explicitly calling readCubeData on any type of cube.\n\nFields\n\naxes a Vector{CubeAxis} containing the Axes of the Cube\ndata N-D array containing the data\nmask N-D array containgin the mask\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.SubCube",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.CubeAPI.SubCube",
    "category": "Type",
    "text": "immutable SubCube{T,C} <: AbstractCubeData{T,4}\n\nA view into the data cube of a single variable. Is the type returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable selected variable\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.SubCubeV",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.CubeAPI.SubCubeV",
    "category": "Type",
    "text": "immutable SubCubeV{T, C} <: AbstractCubeData{T,4}\n\nA view into the data cube with multiple variables. Returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable list of selected variables\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\nvarAxis\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.TempCubes.TempCube",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.TempCubes.TempCube",
    "category": "Type",
    "text": "type TempCube{T,N} <: AbstractCubeData{T,N}\n\nThe main data structure for storing temporary results from cube operations. Is usually returned by mapCube, if the result is larger than max_cache\n\nFields\n\naxes a vector of CubeAxis containing the axes\nfolder folder containing the data\nblock_size dimension of the files that the cube is split into\n\nEach TempCube is stored in a single folder, but can contain several files. The rule is that one file is small enough to be read into memory and the block_size determines the size and shape of each sub-file. This data structure is quite convenient for parrallel access, because different processes can write their results at the same time.\n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Types-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Types",
    "category": "section",
    "text": "In CABLAB, you willCABLAB.Cubes.AbstractCubeDataCABLAB.Cubes.CubeMemCABLAB.CubeAPI.SubCubeCABLAB.CubeAPI.SubCubeVCABLAB.Cubes.TempCubes.TempCube"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.CubeAxis",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.Axes.CubeAxis",
    "category": "Type",
    "text": "abstract CubeAxis{T} <: AbstractCubeData{T,1}\n\nSupertype of all axes. Every CubeAxis is 1D Cube itself and can be passed to mapCube operationes. Although all cube axes are instances of the parametric typealias CategoricalAxis and RangeAxis, there are some typealiases defined to provide shorter and more convenient names for commonly used cube axes. Here is a list of the aliases:\n\nCategorical Axes\n\nVariableAxis represents different variables\nSpatialPointAxis represents a list of coordinates\nCountryAxis countries\nTimeScaleAxis time scales after time series decomposition\nQuantileAxis represents different quantiles\n\nCotinuous Axes\n\nLonAxis longitudes\nLatAxis latitudes\nTimeAxis time\nMSCAxis time step inside a year (for seasonal statistics)\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.CategoricalAxis",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.Axes.CategoricalAxis",
    "category": "Type",
    "text": "CategoricalAxis{T,S}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol). The default constructor is:\n\nCategoricalAxis(axname::String,values::Vector{T})\n\n\n\n"
},

{
    "location": "cube_access.html#CABLAB.Cubes.Axes.RangeAxis",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Cubes.Axes.RangeAxis",
    "category": "Type",
    "text": "RangeAxis{T,S,R}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol) and R the type of the range which is used to represent the axis values. The default constructor is:\n\nRangeAxis(axname::String,values::Range{T})\n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Axes-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Axes",
    "category": "section",
    "text": "Axes are an essential part of each Cube in CABLAB. Every dimension that a cube has is associated with an axis that stores the values of the dimension. For example, a LatitudeAxis will contains a field values representing the chosen latitudes. Similarly, a VariableAxis will contain a list of Variable names. Axes types are divided in categorical axes and axes represented by ranges. All of them are subtypes of the abstract type CubeAxis.CABLAB.Cubes.Axes.CubeAxisCABLAB.Cubes.Axes.CategoricalAxisCABLAB.Cubes.Axes.RangeAxis"
},

{
    "location": "cube_access.html#Cube-Masks-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Masks",
    "category": "section",
    "text": "Every data cube type in CABLAB contains has a representation for the mask, which has the primary purpose of describing missing values and the reason for missingness. CABLAB masks are represented as UInt8-arrays, where each value can be one of the following:VALID a regular data entry\nMISSING classical missing value\nOCEAN masked out by the land-sea mask\nOUTOFPERIOD current time step is not inside the measurement period\nFILLED does not count as missing, but still denotes that the value is gap filled and not measuredThese names can be imported by using CABLAB.Mask. The user can decide if he wants to use the masks in his analyses or rather wants to refer to a different representation with NullableArrays or just representing missings with NaNs. See registerDATFunction for details."
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.RemoteCube",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.CubeAPI.RemoteCube",
    "category": "Type",
    "text": "Represents a remote data cube accessible through THREDDS. The default constructor is\n\nRemoteCube(base_url)\n\nwhere base_url is the datacube's base url.\n\nFields\n\nbase_url the cube parent directory\nvar_name_to_var_index basically the inverse of dataset_files\ndataset_files a list of datasets in the cube\ndataset_paths a list of urls pointing to the different data sets\nconfig the cube's static configuration CubeConfig\n\nusing CABLAB\nds=remoteCube()\n\n\n\n"
},

{
    "location": "cube_access.html#Opening-Remote-Data-Cubes-1",
    "page": "Accessing the Data Cube",
    "title": "Opening Remote Data Cubes",
    "category": "section",
    "text": "If you just want to try the CABLAB data cube and don't have access to the full data set, you can open a remote cube through a THREDDS server. All you need is a working internet connection to do this:RemoteCubeThis will open the remote cube and calling getCubeData will return a cube view that you can process.Important In order to avoid unnecessary traffic, be nice to our servers. Please use this only for testing the cube software for very limited amount of data (reading maps at single time steps) or time series in lon-lat boxes of size 1degx1deg."
},

{
    "location": "cube_access.html#CABLAB.Proc.CubeIO.sampleLandPoints",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.Proc.CubeIO.sampleLandPoints",
    "category": "Function",
    "text": "sampleLandPoints(cube, nsample;nomissing=false)\n\nGet an area-weighted sample from all non-ocean grid cells. This will return a new Cube where the LonAxis and LatAxis are condensed into a single SpatialPointAxis of length nsample. If nomissing=true only grid cells will be selected which don't contain any missing values. This makes sense for gap-filled cubes to make sure that grid cells with systematic seasonal gaps are not selected in the sample.\n\n\n\n"
},

{
    "location": "cube_access.html#Point-wise-access-1",
    "page": "Accessing the Data Cube",
    "title": "Point-wise access",
    "category": "section",
    "text": "sampleLandPoints"
},

{
    "location": "cube_access.html#CABLAB.CubeAPI.known_regions",
    "page": "Accessing the Data Cube",
    "title": "CABLAB.CubeAPI.known_regions",
    "category": "Constant",
    "text": "List of Continents\n\nAfrica\nAsia\nAustralia\nEurope\nNorth America\nSouth America\n\nList of SREX regions\n\nShort Name Long Name\nALA Alaska/N.W. Canada\nAMZ Amazon\nCAM Central America/Mexico\nCAR small islands regions Caribbean\nCAS Central Asia\nCEU Central Europe\nCGI Canada/Greenland/Iceland\nCNA Central North America\nEAF East Africa\nEAS East Asia\nENA East North America\nMED South Europe/Mediterranean\nNAS North Asia\nNAU North Australia\nNEB North-East Brazil\nNEU North Europe\nSAF Southern Africa\nSAH Sahara\nSAS South Asia\nSAU South Australia/New Zealand\nSEA Southeast Asia\nSSA Southeastern South America\nTIB Tibetan Plateau\nWAF West Africa\nWAS West Asia\nWNA West North America\nWSA West Coast South America\nANT Antarctica\nARC Arctic\nNTP Pacific Islands region\nSTP Southern Topical Pacific\nETP Pacific Islands region\nWIO West Indian Ocean\n\nList of countries\n\nShort Name Long Name\nABW Aruba\nAFG Afghanistan\nAGO Angola\nAIA Anguilla\nALB Albania\nALA Aland\nAND Andorra\nARE United Arab Emirates\nARG Argentina\nARM Armenia\nASM American Samoa\nATA Antarctica\nAshm Ashmore and Cartier Is.\nATF Fr. S. and Antarctic Lands\nATG Antigua and Barb.\nAUS Australia\nAUT Austria\nAZE Azerbaijan\nBDI Burundi\nBEL Belgium\nBEN Benin\nBFA Burkina Faso\nBGD Bangladesh\nBGR Bulgaria\nBHR Bahrain\nBHS Bahamas\nBIH Bosnia and Herz.\nBLM St. Barthelemy\nBLR Belarus\nBLZ Belize\nBMU Bermuda\nBOL Bolivia\nBRA Brazil\nBRB Barbados\nBRN Brunei\nBTN Bhutan\nBWA Botswana\nCAF Central African Rep.\nCAN Canada\nCHE Switzerland\nCHL Chile\nCHN China\nCIV Ivory Coast\nCLP Clipperton I.\nCMR Cameroon\nCNM \nCOD Congo (Kinshasa)\nCOG Congo (Brazzaville)\nCOK Cook Is.\nCOL Colombia\nCOM Comoros\nCPV Cape Verde\nCRI Costa Rica\nCSI Coral Sea Is.\nCUB Cuba\nCUW Curacao\nCYM Cayman Is.\nCYN N. Cyprus\nCYP Cyprus\nCZE Czech Rep.\nDEU Germany\nDJI Djibouti\nDMA Dominica\nDNK Denmark\nDOM Dominican Rep.\nDZA Algeria\nECU Ecuador\nEGY Egypt\nERI Eritrea\nESB Dhekelia\nESP Spain\nEST Estonia\nETH Ethiopia\nFIN Finland\nFJI Fiji\nFLK Falkland Is.\nFRA France\nFRO Faroe Is.\nFSM Micronesia\nGAB Gabon\nGaza Gaza\nGBR United Kingdom\nGEO Georgia\nGGY Guernsey\nGHA Ghana\nGIB Gibraltar\nGIN Guinea\nGMB Gambia\nGNB Guinea Bissau\nGNQ Eq. Guinea\nGRC Greece\nGRD Grenada\nGRL Greenland\nGTM Guatemala\nGUM Guam\nGUY Guyana\nHKG Hong Kong\nHMD Heard I. and McDonald Is.\nHND Honduras\nHRV Croatia\nHTI Haiti\nHUN Hungary\nIDN Indonesia\nIMN Isle of Man\nIND India\nIOA Indian Ocean Ter.\nIOT Br. Indian Ocean Ter.\nIRL Ireland\nIRN Iran\nIRQ Iraq\nISL Iceland\nISR Israel\nITA Italy\nJAM Jamaica\nJEY Jersey\nJOR Jordan\nJPN Japan\nKAB Baykonur\nKAS \nKAZ Kazakhstan\nKEN Kenya\nKGZ Kyrgyzstan\nKHM Cambodia\nKIR Kiribati\nKNA St. Kitts and Nevis\nKNM \nKOR S. Korea\nKOS Kosovo\nKWT Kuwait\nLAO Laos\nLBN Lebanon\nLBR Liberia\nLBY Libya\nLCA Saint Lucia\nLIE Liechtenstein\nLKA Sri Lanka\nLSO Lesotho\nLTU Lithuania\nLUX Luxembourg\nLVA Latvia\nMAC Macau\nMAF St. Martin\nMAR Morocco\nMCO Monaco\nMDA Moldova\nMDG Madagascar\nMDV Maldives\nMEX Mexico\nMHL Marshall Is.\nMKD Macedonia\nMLI Mali\nMLT Malta\nMMR Myanmar\nMNE Montenegro\nMNG Mongolia\nMNP N. Mariana Is.\nMOZ Mozambique\nMRT Mauritania\nMSR Montserrat\nMUS Mauritius\nMWI Malawi\nMYS Malaysia\nNAM Namibia\nNCL New Caledonia\nNER Niger\nNFK Norfolk Island\nNGA Nigeria\nNIC Nicaragua\nNIU Niue\nNLD Netherlands\nNOR Norway\nNPL Nepal\nNRU Nauru\nNZL New Zealand\nOMN Oman\nPAK Pakistan\nPAN Panama\nPCN Pitcairn Is.\nPER Peru\nPHL Philippines\nPLW Palau\nPNG Papua New Guinea\nPOL Poland\nPRI Puerto Rico\nPRK N. Korea\nPRT Portugal\nPRY Paraguay\nPYF Fr. Polynesia\nQAT Qatar\nROU Romania\nRUS Russia\nRWA Rwanda\nSAH W. Sahara\nSAU Saudi Arabia\nSDN Sudan\nSDS S. Sudan\nSEN Senegal\nSGP Singapore\nSGS S. Geo. and S. Sandw. Is.\nSHN Saint Helena\nSLB Solomon Is.\nSLE Sierra Leone\nSLV El Salvador\nSMR San Marino\nSOL Somaliland\nSOM Somalia\nSPM St. Pierre and Miquelon\nSRB Serbia\nSTP Sao Tome and Principe\nSUR Suriname\nSVK Slovakia\nSVN Slovenia\nSWE Sweden\nSWZ Swaziland\nSXM Sint Maarten\nSYC Seychelles\nSYR Syria\nTCA Turks and Caicos Is.\nTCD Chad\nTGO Togo\nTHA Thailand\nTJK Tajikistan\nTKM Turkmenistan\nTLS East Timor\nTON Tonga\nTTO Trinidad and Tobago\nTUN Tunisia\nTUR Turkey\nTUV Tuvalu\nTWN Taiwan\nTZA Tanzania\nUGA Uganda\nUKR Ukraine\nUMI U.S. Minor Outlying Is.\nURY Uruguay\nUSA United States\nUSG Guantanamo Bay USNB\nUZB Uzbekistan\nVAT Vatican\nVCT St. Vin. and Gren.\nVEN Venezuela\nVGB British Virgin Is.\nVIR U.S. Virgin Is.\nVNM Vietnam\nVUT Vanuatu\nPSE West Bank\nWLF Wallis and Futuna\nWSB Akrotiri\nWSM Samoa\nYEM Yemen\nZAF South Africa\nZMB Zambia\nZWE Zimbabwe\n\n\n\n"
},

{
    "location": "cube_access.html#List-of-known-regions-1",
    "page": "Accessing the Data Cube",
    "title": "List of known regions",
    "category": "section",
    "text": "CABLAB.CubeAPI.known_regions"
},

{
    "location": "analysis.html#",
    "page": "Analysis",
    "title": "Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis.html#CABLAB.DAT.mapCube",
    "page": "Analysis",
    "title": "CABLAB.DAT.mapCube",
    "category": "Function",
    "text": "mapCube(fun, cube, addargs...;kwargs)\n\nMap a given function fun over slices of the data cube cube.\n\nKeyword arguments\n\nmax_cache=1e7 maximum size of blocks that are read into memory, defaults to approx 10Mb\nouttype::DataType output data type of the operation\nindims::Tuple{Tuple{Vararg{CubeAxis}}} List of input axis types for each input data cube\noutdims::Tuple List of output axes, can be either an axis type that has a default constructor or an instance of a CubeAxis\ninmissing::Tuple How to treat missing values in input data for each input cube. Possible values are :nullable :mask :nan or a value that is inserted for missing data, defaults to :mask\noutmissing How are missing values written to the output array, possible values are :nullable, :mask, :nan, defaults to :mask\nno_ocean should values containing ocean data be omitted, an integer specifying the cube whose input mask is used to determine land-sea points.\ninplace does the function write to an output array inplace or return a single value> defaults to true\nispar boolean to determine if parallelisation should be applied, defaults to true if workers are available.\nkwargs additional keyword arguments passed to the inner function\n\nThe first argument is always the function to be applied, the second is the input cube or a tuple input cubes if needed. If the function to be applied is registered (either as part of CABLAB or through registerDATFunction), all of the keyword arguments have reasonable defaults and don't need to be supplied. Some of the function still need additional arguments or keyword arguments as is stated in the documentation.\n\nIf you want to call mapCube directly on an unregistered function, please have a look at Applying custom functions to get an idea about the usage of the input and output dimensions etc.\n\n\n\n"
},

{
    "location": "analysis.html#Analysis-1",
    "page": "Analysis",
    "title": "Analysis",
    "category": "section",
    "text": "The CABLAB package comes with a list of predefined methods for statistical analysis. The functions are defined to work on specific axes, for example a function that removes the mean annual cycle will alway work an the time axis. It does not matter which other axes are defined in the input cube, the function will simply loop over these. All the functions are called using the mapCube function.mapCubeThe function will then be applied to the whole cube in a memory-efficient way, which means that chunks of data are read, processed and then saved in the output cube. Whether the output cube is a TempCube or a CubeMem is decided by the system, depending on if the calculation is parallel, and how large the output cube is.Here follows a list of analysis function included in this package. If you have implemented or wrapped a method that might be of interest to a broader community, please feel free to open a pull request."
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.gapFillMSC-Tuple{AbstractArray,AbstractArray{UInt8,N},AbstractArray,AbstractArray{UInt8,N},Integer,Any,Any}",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.gapFillMSC",
    "category": "Method",
    "text": "gapFillMSC\n\nFills missing values of each time series with the mean annual cycle.\n\nCall signature\n\nmapCube(gapFillMSC, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.getMSC",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.getMSC",
    "category": "Function",
    "text": "getMSC\n\nReturns the mean annual cycle from each time series.\n\nCall signature\n\nmapCube(getMSC, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes Timeaxis\n\nOutput Axes MSCaxis\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.MSC.getMedSC-Tuple{AbstractArray{T,1},AbstractArray{UInt8,1},AbstractArray{T,1},AbstractArray{UInt8,1}}",
    "page": "Analysis",
    "title": "CABLAB.Proc.MSC.getMedSC",
    "category": "Method",
    "text": "getMedMSC\n\nReturns the median annual cycle from each time series.\n\nCall signature\n\nmapCube(getMedMSC, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes Timeaxis\n\nOutput Axes MSCaxis\n\n\n\n"
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
    "location": "analysis.html#CABLAB.DAT.reduceCube",
    "page": "Analysis",
    "title": "CABLAB.DAT.reduceCube",
    "category": "Function",
    "text": "reduceCube(f::Function, cube, dim::Type{T<:CubeAxis};kwargs...)\n\nApply a reduction function f on slices of the cube cube. The dimension(s) are specified through dim, which is either an Axis type or a tuple of axis types. Keyword arguments are passed to mapCube or, if unknown passed again to f. It is assumed that f takes an array input and returns a single value.\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.Stats.normalizeTS-Tuple{AbstractArray{T,1},AbstractArray{T,1}}",
    "page": "Analysis",
    "title": "CABLAB.Proc.Stats.normalizeTS",
    "category": "Method",
    "text": "normalizeTS\n\nNormalize a time series to zeros mean and unit variance\n\nCall signature\n\nmapCube(normalizeTS, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes TimeAxis\n\nOutput Axes TimeAxis\n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.Stats.timespacequantiles-Tuple{AbstractArray{T,1},AbstractArray,AbstractArray{T,1},Any}",
    "page": "Analysis",
    "title": "CABLAB.Proc.Stats.timespacequantiles",
    "category": "Method",
    "text": "timespacequantiles\n\nCalculate quantiles from a space time data cube. This is usually called on a subset of data returned by sampleLandPoints.\n\nCall signature\n\nmapCube(timespacequantiles, cube, quantiles)\n\ncube data cube with a axes: TimeAxis, SpatialPointAxis\nquantiles a vector of quantile values to calculate\n\nInput Axes TimeAxis, SpatialPointAxis\n\nOutput Axes QuantileAxis\n\nCalculating exact quantiles from data that don't fit into memory is quite a problem. One solution we provide here is to simply subsample your data and then get the quantiles from a smaller dataset.\n\nFor an example on how to apply this function, see this notebook.\n\n\n\n"
},

{
    "location": "analysis.html#Simple-Statistics-1",
    "page": "Analysis",
    "title": "Simple Statistics",
    "category": "section",
    "text": "Another typcial use case is the application of basic statistics like sum, mean and std. We provide a convenience function reduceCube  reduceCubeApplying these functions makes sense if the slices one wants to reduce fit in memory. However, if one wants to calculate some statistics on e.g. a timelonlat cube, one would preferably call one of the OnlineStats methods.  Additional simple statistics functions are:Modules = [CABLAB.Proc.Stats]\nPrivate = false"
},

{
    "location": "analysis.html#CABLAB.Proc.TSDecomposition.filterTSFFT-Tuple{Array{T<:Real,2},Array{T<:Real,1},Number}",
    "page": "Analysis",
    "title": "CABLAB.Proc.TSDecomposition.filterTSFFT",
    "category": "Method",
    "text": "filterTSFFT\n\nFilter each time series using a Fourier filter and return the decomposed series in 4 time windows (Trend, Long-Term Variability, Annual Cycle, Fast Oscillations)\n\nCall signature\n\nmapCube(filterTSFFT, cube)\n\ncube data cube with a axes: TimeAxis\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis, TimeScaleaxis\n\n\n\n"
},

{
    "location": "analysis.html#Time-series-decomposition-1",
    "page": "Analysis",
    "title": "Time series decomposition",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.TSDecomposition]\nPrivate = false"
},

{
    "location": "analysis.html#CABLAB.Proc.CubeIO.extractLonLats-Tuple{CABLAB.Cubes.AbstractCubeData,Array{T,2}}",
    "page": "Analysis",
    "title": "CABLAB.Proc.CubeIO.extractLonLats",
    "category": "Method",
    "text": "extractLonLats(c::AbstractCubeData,pl::Matrix)\n\nExtracts a list of longitude/latitude coordinates from a data cube. The coordinates are specified through the matrix pl where size(pl)==(N,2) and N is the number of extracted coordinates. Returns a data cube without LonAxis and LatAxis but with a SpatialPointAxis containing the input locations. \n\n\n\n"
},

{
    "location": "analysis.html#CABLAB.Proc.CubeIO.sampleLandPoints",
    "page": "Analysis",
    "title": "CABLAB.Proc.CubeIO.sampleLandPoints",
    "category": "Function",
    "text": "sampleLandPoints(cube, nsample;nomissing=false)\n\nGet an area-weighted sample from all non-ocean grid cells. This will return a new Cube where the LonAxis and LatAxis are condensed into a single SpatialPointAxis of length nsample. If nomissing=true only grid cells will be selected which don't contain any missing values. This makes sense for gap-filled cubes to make sure that grid cells with systematic seasonal gaps are not selected in the sample.\n\n\n\n"
},

{
    "location": "analysis.html#Cube-transformations-1",
    "page": "Analysis",
    "title": "Cube transformations",
    "category": "section",
    "text": "Modules = [CABLAB.Proc.CubeIO]\nPrivate = false"
},

{
    "location": "analysis.html#OnlineStats-1",
    "page": "Analysis",
    "title": "OnlineStats",
    "category": "section",
    "text": "It is possible to directly apply statistics included in the OnlineStats.jl package on the data cube. This makes it possible to calculate statistics on data too big to fit into memory. The general syntax ismapCube(f ,cube; by=CubeAxis[], cfun=identity, outAxis=nothing,kwargs...)where f is an OnlineStat data type and cube is the cube you want to apply the statistics to. By default this function will reduce all values over all axes of the cube, so if you want to do statistics by a certain axis, it has to be specified using the by keyword argument. by accepts a vector of axes types and up to one datacube that can serve as a mask. If such a data cube is supplied, the statistics are split by the unique values in the mask. One can pass a function cfun that transforms the mask values into an index in the range 1..N that defines the    index where the new value is going to be put to. If a mask is supplied, it must have either a labels property, which is a Dict{T,String} mapping the numerical mask value to the value name. Alternatively on can supply an outAxis argument that describes the resulting output axis.This all gets clearer with two small examples. suppose we want to calculate the mean of GPP, NEE and TER under the condition that Tair<280K and Tair>280K over all time steps and grid cells. This is achieved through the following lines of code:import OnlineStats\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nt     = getCubeData(ds,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nsplitTemp(t) = ifelse(t>280,2,1)                            # Define the classification function\noutAxis      = CategoricalAxis(\"TempClass\",[\"< 7C\",\">7C\"])  # A two-length output axis, because there are two possible values\nmT    = mapCube(OnlineStats.Mean,cube,by=[t,VariableAxis], cfun=splitTemp, outAxis=outAxis) # Of course we want to split by variable, too\n\nusing CABLABPlots\nplotXY(mT,xaxis=\"var\",group=\"tempclass\")#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using CABLAB\nimport OnlineStats\nimport Documenter\nds    = RemoteCube()\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nt     = getCubeData(ds,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nsplitTemp(t) = ifelse(t>280,2,1)\noutAxis      = CategoricalAxis(\"TempClass\",[\"< 7C\",\">7C\"])\nmT    = mapCube(OnlineStats.Mean,cube,by=[t,VariableAxis], cfun=splitTemp, outAxis=outAxis)\n\nusing CABLABPlots\ngr()\np=plotXY(mT,xaxis=\"var\",group=\"tempclass\")\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))A second example would be that we want to calculate averages of the fluxes according to a country mask.import OnlineStats\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nm     = getCubeData(ds,variable=\"country_mask\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nmT    = mapCube(OnlineStats.Mean,cube,by=[m,VariableAxis], cfun=splitTemp, outAxis=outAxis)This will split the cube by country and variable and compute averages over the input variables."
},

{
    "location": "analysis.html#CABLAB.Proc.DATOnlineStats.cubePCA",
    "page": "Analysis",
    "title": "CABLAB.Proc.DATOnlineStats.cubePCA",
    "category": "Function",
    "text": "cubePCA(cube::AbstractCubeData)\n\nPerforms a PCA based on a covariance matrix which is estimated through an online algorithm. Returns an OnlinePCA object from which explained_variance and the rotation can be extracted, or which can be used to perform the projection on a dataset.\n\nKeyword arguments\n\nMDAxis specifies the axes that is reduced through the PCA\nby a vector of axes types or masks denoting if several PCAs should be performed. If provided, several PCAs will be performed.\nnoutdims number of output dimensions, how many PCs are estimated\n\n\n\n"
},

{
    "location": "analysis.html#Online-PCA-1",
    "page": "Analysis",
    "title": "Online PCA",
    "category": "section",
    "text": "It is possible to compute a principal component analysis based on a covariance matrix obtained through an online algorithm. The package provides a convenient way to achieve this with the cubePCA function.cubePCAFor example, if one wants to calculate a PCA over the time dimension, you could use the following code:"
},

{
    "location": "plotting.html#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": "#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using CABLAB # hide\nusing CABLABPlots\nimport Documenter\nds=RemoteCube() # hide"
},

{
    "location": "plotting.html#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "CurrentModule = Main.CABLABPlots"
},

{
    "location": "plotting.html#Plot-geographical-maps-1",
    "page": "Plotting",
    "title": "Plot geographical maps",
    "category": "section",
    "text": "Map plotting is generally done using the plotMAP function:plotMAP(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)Map plotting tool for cube objects, can be called on any type of cube data"
},

{
    "location": "plotting.html#Keyword-arguments-1",
    "page": "Plotting",
    "title": "Keyword arguments",
    "category": "section",
    "text": "dmin, dmax Minimum and maximum value to be used for color transformation\ncolorm colormap to be used. Find a list of colormaps in the Colors.jl package\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nsymmetric make the color scale symmetric around zero\nlabels given a list of labels this will create a plot with a non-continouous color scale where integer cube values [1..N] are mapped to the given labels.\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plotIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.Here is an example on how to plot a map. The keyword arguments specify the time step (time=1) and the variable (var=1).\ncdata=getCubeData(ds,variable=[\"air_temperature_2m\",\"gross_primary_productivity\"])\nplotMAP(cdata,time=1,var=1)Inside a Jupyter notebook, the keyword arguments can be omitted and sliders or dropdown menus will be shown to select the desired values."
},

{
    "location": "plotting.html#RGB-Maps-1",
    "page": "Plotting",
    "title": "RGB Maps",
    "category": "section",
    "text": "A common method to plot several variables at once in a single map is an RGB map. This is possible through the plotMAPRGB function.plotMAPRGB(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)Map plotting tool for colored plots that use up to 3 variables as input into the several color channels. Several color representations from the Colortypes.jl package are supported, so that besides RGB (XYZ)-plots one can create HSL, HSI, HSV or Lab and Luv plots."
},

{
    "location": "plotting.html#Keyword-arguments-2",
    "page": "Plotting",
    "title": "Keyword arguments",
    "category": "section",
    "text": "dmin, dmax Minimum and maximum value to be used for color transformation, can be either a single value or a tuple, when min/max values are given for each channel\nrgbAxis which axis should be used to select RGB channels from\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nlabels given a list of labels this will create a plot with a non-continouous color scale where integer cube values [1..N] are mapped to the given labels.\ncType ColorType to use for the color representation. Can be one of RGB, XYZ, Lab, Luv, HSV, HSI, HSL\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plotIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.For example, if we want to plot GPP, NEE and TER as an RGB map for South America, we can do the following:d=getCubeData(ds,variable=\"Biosphere\",region=\"South America\")\nusing ColorTypes\nplotMAPRGB(d,c1=\"gross_primary_productivity\",\n             c2=\"net_ecosystem_exchange\",\n             c3=\"terrestrial_ecosystem_respiration\",\n             cType=Lab,\n             time=100)"
},

{
    "location": "plotting.html#Other-plots-1",
    "page": "Plotting",
    "title": "Other plots",
    "category": "section",
    "text": ""
},

{
    "location": "plotting.html#XY-plots-1",
    "page": "Plotting",
    "title": "XY plots",
    "category": "section",
    "text": "Generating x-y type plots where the x axis is one of the cube axes and the y axis is the corresponding cube value is done with the generic plotXY function.`plotXY(cube::AbstractCubeData; group=0, xaxis=-1, kwargs...)`\n\nGeneric plotting tool for cube objects, can be called on any type of cube data.\n\n### Keyword arguments\n\n* `xaxis` which axis is to be used as x axis. Can be either an axis Datatype or a string. Short versions of axes names are possible as long as the axis can be uniquely determined.\n* `group` it is possible to group the plot by a categorical axis. Can be either an axis data type or a string.\n* `dim=value` can set other dimensions to certain values, for example `lon=51.5` will fix the longitude for the resulting plot\n\nIf a dimension is not the x axis or group variable and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.Here are two examples for using this function:cdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nplotXY(cdata,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nnothing # hideusing CABLAB # hide\nusing CABLABPlots\ngr()\nimport Documenter # hide\nds=RemoteCube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotXY(cdata,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))This is a time series plot, grouped by variables for a specific longitude/latitude.m=reduceCube(mean,cdata,TimeAxis)\nplotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)using CABLAB # hide\nusing CABLABPlots\ngr()\nimport Documenter # hide\nds=RemoteCube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nm=reduceCube(mean,cdata,TimeAxis, max_cache=1e8)\np=plotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))"
},

{
    "location": "plotting.html#Scatter-plots-1",
    "page": "Plotting",
    "title": "Scatter plots",
    "category": "section",
    "text": "In order to do scatter plots, i.e. plotting variable A against variable B one can use the plotScatter function.plotScatter(cube::AbstractCubeData; vsaxis=VariableAxis, alongaxis=0, group=0, xaxis=0, yaxis=0, kwargs...)Generic plotting tool for cube objects to generate scatter plots, like variable A against variable B. Can be called on any type of cube data."
},

{
    "location": "plotting.html#Keyword-arguments-3",
    "page": "Plotting",
    "title": "Keyword arguments",
    "category": "section",
    "text": "vsaxis determines the axis from which the x and y variables are drawn.\nalongaxis determines the axis along which the variables are plotted. E.g. if you choose TimeAxis, a dot will be plotted for each time step.\nxaxis index or value of the variable to plot on the x axis\nyaxis index or value of the variable to plot on the y axis\ngroup it is possible to group the plot by an axis. Can be either an axis data type or a string. Caution: This will increase the number of plotted data points\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plotIf a dimension is not the vsaxis or alongaxis or group and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.A short example is shown here:cdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotScatter(cdata,alongaxis=TimeAxis,xaxis=1,yaxis=2,group=\"lat\",lon=30)using CABLAB # hide\nusing CABLABPlots\ngr()\nimport Documenter # hide\nds=RemoteCube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotScatter(cdata,alongaxis=TimeAxis,xaxis=\"net_ecosystem_exchange\",yaxis=\"gross_primary_productivity\",group=\"lat\",lon=30.0)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(takebuf_string(b))"
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

{
    "location": "iotools.html#",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "page",
    "text": ""
},

{
    "location": "iotools.html#CABLAB.Cubes.TempCubes.saveCube",
    "page": "Loading and saving results",
    "title": "CABLAB.Cubes.TempCubes.saveCube",
    "category": "Function",
    "text": "saveCube(c::AbstractCubeData, name::String)\n\nPermanently saves a data cube to disk by either moving the folder out of the tmp directory (for TempCubes) or by storing the data to disk (for CubeMems)\n\n\n\nsaveCube(cube,name::String)\n\nSave a TempCube or CubeMem to the folder name in the CABLAB working directory.\n\nSee also loadCube, CABLABdir\n\n\n\n"
},

{
    "location": "iotools.html#CABLAB.Cubes.TempCubes.loadCube",
    "page": "Loading and saving results",
    "title": "CABLAB.Cubes.TempCubes.loadCube",
    "category": "Function",
    "text": "loadCube(name::String)\n\nLoads a cube that was previously saved with saveCube. Returns a TempCube object.\n\n\n\n"
},

{
    "location": "iotools.html#CABLAB.CABLABTools.@loadOrGenerate",
    "page": "Loading and saving results",
    "title": "CABLAB.CABLABTools.@loadOrGenerate",
    "category": "Macro",
    "text": "macro loadOrGenerate(x...,expression)\n\nTakes a list of variablename=>\"Storage Name\" pairs. Checks if all datasets can be found on disk and loads them. If not, the datasets will be regenerated by evaluating the given expression.\n\nTo force recalculation, call CABLAB.recalculate(true) before evaluating the macro.\n\nExample\n\nThe following lines will check if cubes with the names \"Filled\" and \"Normalized\" exist on disk, load them and assign the variable names cube_filled and cube_norm. If the datasets to not exist on disk, they are generated and saved under the given names.\n\n@loadOrGenerate cube_filled=>\"Filled\" cube_norm=>\"Normalized\" begin\ncube_filled = mapCube(gapFillMSC,d)\ncube_norm   = mapCube(normalize_TS,d)\nend\n\n\n\n\n"
},

{
    "location": "iotools.html#Loading-and-saving-results-1",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "section",
    "text": "CurrentModule = CABLAB.Cubes.TempCubessaveCubeloadCubeCurrentModule = CABLAB.CABLABTools@loadOrGenerate"
},

]}
