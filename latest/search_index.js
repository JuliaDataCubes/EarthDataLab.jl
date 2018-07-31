var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#ESDL.jl-1",
    "page": "Home",
    "title": "ESDL.jl",
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
    "text": "You can find some example Jupyter Notebooks that using ESDL.jl here"
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
    "page": "The ESDL Data Cube",
    "title": "The ESDL Data Cube",
    "category": "page",
    "text": ""
},

{
    "location": "thecube.html#The-ESDL-Data-Cube-1",
    "page": "The ESDL Data Cube",
    "title": "The ESDL Data Cube",
    "category": "section",
    "text": "(Image: The ESDL data cube)The Earth System data cube is a collection of land surface and atmospheric Earth observation data sets on a common spatial resolution of 5min and a common temporal resolution of 8 days in the time range from 2001 to 2011. See the Product Handbook for more information."
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
    "text": "Before one can read data from a cube, it has to be opened. To open a data cube which is accesible through the file system, use the Cube constructor:using ESDL\nc = Cube(\"/patch/to/cube\")ESDL data cube at /Net/Groups/BGI/scratch/DataCube/v0.2.0/high-res/\nSpatial resolution:  4320x2160 at 0.083333 degrees.\nTemporal resolution: 2001-01-01T00:00:00 to 2012-01-01T00:00:00 at 8daily time steps\nVariables:           aerosol_optical_thickness_1610 aerosol_optical_thickness_550 aerosol_optical_thickness_555 aerosol_optical_thickness_659 aerosol_optical_thickness_865 air_temperature_2m bare_soil_evaporation black_sky_albedo burnt_area c_emissions country_mask evaporation evaporative_stress fractional_snow_cover gross_primary_productivity interception_loss land_surface_temperature latent_energy net_ecosystem_exchange open_water_evaporation ozone potential_evaporation precipitation root_moisture sensible_heat snow_sublimation snow_water_equivalent soil_moisture surface_moisture terrestrial_ecosystem_respiration transpiration water_mask water_vapour white_sky_albedoThis returns a Cube object that contains some basics information about the cube which is printed on the screen."
},

{
    "location": "cube_access.html#ESDL.CubeAPI.getCubeData",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.getCubeData",
    "category": "function",
    "text": "getCubeData(cube::Cube;variable,time,latitude,longitude)\n\nReturns a view into the data cube. The following keyword arguments are accepted:\n\nvariable: an variable index or name or an iterable returning multiple of these (var1, var2, ...)\ntime: a single Date object or a 2-element iterable (time_start, time_end)\nlatitude: a single latitude value or a 2-element iterable (latitude_start, latitude_end)\nlongitude: a single longitude value or a 2-element iterable (longitude_start, longitude_end)\nregion: specify a country or SREX region by name or ISO_A3 code. Type ?ESDL.known_regions to see a list of pre-defined areas\n\nReturns a SubCube object which represents a view into the original data cube.\n\n\n\n"
},

{
    "location": "cube_access.html#Getting-a-data-handle-1",
    "page": "Accessing the Data Cube",
    "title": "Getting a data handle",
    "category": "section",
    "text": "using ESDL\nc=Cube()var=[\"c_emissions\",\"air_temperature_2m\"]\ntime=(Date(\"2001-01-01\"),Date(\"2001-12-31\"))\ncubedata = getCubeData(c,longitude=(30,31),latitude=(50,51),time=time,variable=var)This returns a view into the Data Cube, on which further calculations can be applied. All keyword arguments default to the full range, so calling getCubeData without keyword arguments will return a view into the whole data cube.ESDL.CubeAPI.getCubeDataNo data is read yet. In case you want to load some data into memory and store it in a Julia array, just use square-bracket indexing. For example, to read the first time step  of the first variable as a Lon-Lat array, just docubedata[:,:,1,1]Here you can start to do some calculations on your sub-cube, see either Analysis for a list of methods provided by this framework or Applying custom functions to apply your own functions on the cube. If you just want to visualize the cube see this section Plotting."
},

{
    "location": "cube_access.html#ESDL.Proc.CubeIO.extractLonLats",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Proc.CubeIO.extractLonLats",
    "category": "function",
    "text": "extractLonLats(c::AbstractCubeData,pl::Matrix)\n\nExtracts a list of longitude/latitude coordinates from a data cube. The coordinates are specified through the matrix pl where size(pl)==(N,2) and N is the number of extracted coordinates. Returns a data cube without LonAxis and LatAxis but with a SpatialPointAxis containing the input locations.\n\n\n\n"
},

{
    "location": "cube_access.html#Extracting-a-list-of-lon/lat-coordinates-from-a-data-cube-1",
    "page": "Accessing the Data Cube",
    "title": "Extracting a list of lon/lat coordinates from a data cube",
    "category": "section",
    "text": "There are situations in which only a certain list of longitude/latitude pairs is needed for the analysis. One can extract such a list by first creating a cube view containing all the needed variables and then apply the extractLonLats function.ESDL.Proc.CubeIO.extractLonLatsHere is an example how to apply the function:cubedata = getCubeData(c,longitude=(30,31),latitude=(50,51),time=time,variable=var)\nll       = [30.1 50.2;\n            30.5 51.1;\n            30.7 51.1] #Lon/Lats to be extracted\ncubenew  = extractLonLats(cubedata,ll)"
},

{
    "location": "cube_access.html#ESDL.Cubes.AbstractCubeData",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.AbstractCubeData",
    "category": "type",
    "text": "AbstractCubeData{T,N}\n\nSupertype of all cubes. T is the data type of the cube and N the number of dimensions. Beware that an AbstractCubeData does not implement the AbstractArray interface. However, the ESDL functions mapCube, reduceCube, readCubeData, plotMAP and plotXY will work on any subtype of AbstractCubeData\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.Cubes.CubeMem",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.CubeMem",
    "category": "type",
    "text": "CubeMem{T,N} <: AbstractCubeMem{T,N}\n\nAn in-memory data cube. It is returned by applying mapCube when the output cube is small enough to fit in memory or by explicitly calling readCubeData on any type of cube.\n\nFields\n\naxes a Vector{CubeAxis} containing the Axes of the Cube\ndata N-D array containing the data\nmask N-D array containgin the mask\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.CubeAPI.SubCube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.SubCube",
    "category": "type",
    "text": "immutable SubCube{T,C} <: AbstractCubeData{T,4}\n\nA view into the data cube of a single variable. Is the type returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable selected variable\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.CubeAPI.SubCubeV",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.SubCubeV",
    "category": "type",
    "text": "immutable SubCubeV{T, C} <: AbstractCubeData{T,4}\n\nA view into the data cube with multiple variables. Returned by the mapCube function.\n\nFields\n\ncube::C Parent cube\nvariable list of selected variables\nsub_grid representation of the subgrid indices\nsub_times representation of the selected time steps\nlonAxis\nlatAxis\ntimeAxis\nvarAxis\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.Cubes.MmapCube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.MmapCube",
    "category": "type",
    "text": "MmapCube{T,N}\n\nDefines a Memory-Mapped data cube which is stored on disk. Is generally returned by mapCube applications. \n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Types-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Types",
    "category": "section",
    "text": "While the getCubeData command returns an object of type SubCube, which represents a view into the ESDC, other cube operations will return different types of data cubes. The returned type will depend on the size of the returned cube. If it is small enough to fit into memory, it will be a CubeMem, otherwise a MmapCube. All these types of data cubes share the same interface defined by ESDL.AbstractCubeData, which means you can index them, do calculation using mapCube or plot them using the commands described in Plotting.ESDL.Cubes.AbstractCubeDataESDL.Cubes.CubeMemESDL.CubeAPI.SubCubeESDL.CubeAPI.SubCubeVESDL.Cubes.MmapCube"
},

{
    "location": "cube_access.html#ESDL.Cubes.Axes.CubeAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.CubeAxis",
    "category": "type",
    "text": "abstract CubeAxis{T} <: AbstractCubeData{T,1}\n\nSupertype of all axes. Every CubeAxis is 1D Cube itself and can be passed to mapCube operationes. Although all cube axes are instances of the parametric typealias CategoricalAxis and RangeAxis, there are some typealiases defined to provide shorter and more convenient names for commonly used cube axes. Here is a list of the aliases:\n\nCategorical Axes\n\nVariableAxis represents different variables\nSpatialPointAxis represents a list of coordinates\nCountryAxis countries\nTimeScaleAxis time scales after time series decomposition\nQuantileAxis represents different quantiles\n\nCotinuous Axes\n\nLonAxis longitudes\nLatAxis latitudes\nTimeAxis time\nMSCAxis time step inside a year (for seasonal statistics)\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.Cubes.Axes.CategoricalAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.CategoricalAxis",
    "category": "type",
    "text": "CategoricalAxis{T,S}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol). The default constructor is:\n\nCategoricalAxis(axname::String,values::Vector{T})\n\n\n\n"
},

{
    "location": "cube_access.html#ESDL.Cubes.Axes.RangeAxis",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Cubes.Axes.RangeAxis",
    "category": "type",
    "text": "RangeAxis{T,S,R}\n\nTo represent axes that are categorical, where T is the element type. The type parameter S denotes the axis name (a symbol) and R the type of the range which is used to represent the axis values. The default constructor is:\n\nRangeAxis(axname::String,values::Range{T})\n\n\n\n"
},

{
    "location": "cube_access.html#Cube-Dimensions-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Dimensions",
    "category": "section",
    "text": "Dimensions are an essential part of each Cube in ESDL. Every dimension that a cube has is associated with an axis that stores the values of the dimension. For example, a LatitudeAxis will contains a field values representing the chosen latitudes. Similarly, a VariableAxis will contain a list of Variable names. Axes types are divided in categorical axes and axes represented by ranges. All of them are subtypes of the abstract type CubeAxis.ESDL.Cubes.Axes.CubeAxisESDL.Cubes.Axes.CategoricalAxisESDL.Cubes.Axes.RangeAxis"
},

{
    "location": "cube_access.html#Cube-Masks-1",
    "page": "Accessing the Data Cube",
    "title": "Cube Masks",
    "category": "section",
    "text": "Every data cube type in ESDL contains has a representation for the mask, which has the primary purpose of describing missing values and the reason for missingness. ESDL masks are represented as UInt8-arrays, where each value can be one of the following:VALID a regular data entry\nMISSING classical missing value\nOCEAN masked out by the land-sea mask\nOUTOFPERIOD current time step is not inside the measurement period\nFILLED does not count as missing, but still denotes that the value is gap filled and not measuredThese names can be imported by using ESDL.Mask. The user can decide if he wants to use the masks in his analyses or rather wants to refer to a different representation with DataArrays or just representing missings with NaNs. See mapCube for details."
},

{
    "location": "cube_access.html#ESDL.CubeAPI.RemoteCube",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.RemoteCube",
    "category": "type",
    "text": "Represents a remote data cube accessible through THREDDS. The default constructor is\n\nRemoteCube(base_url)\n\nwhere base_url is the datacube\'s base url.\n\nFields\n\nbase_url the cube parent directory\nvar_name_to_var_index basically the inverse of dataset_files\ndataset_files a list of datasets in the cube\ndataset_paths a list of urls pointing to the different data sets\nconfig the cube\'s static configuration CubeConfig\n\nusing ESDL\nds=remoteCube()\n\n\n\n"
},

{
    "location": "cube_access.html#Opening-Remote-Data-Cubes-1",
    "page": "Accessing the Data Cube",
    "title": "Opening Remote Data Cubes",
    "category": "section",
    "text": "If you just want to try the ESDL data cube and don\'t have access to the full data set, you can open a remote cube through a THREDDS server. All you need is a working internet connection to do this:RemoteCubeThis will open the remote cube and calling getCubeData will return a cube view that you can process.Important In order to avoid unnecessary traffic, be nice to our servers. Please use this only for testing the cube software for very limited amount of data (reading maps at single time steps) or time series in lon-lat boxes of size 1degx1deg."
},

{
    "location": "cube_access.html#ESDL.Proc.CubeIO.sampleLandPoints",
    "page": "Accessing the Data Cube",
    "title": "ESDL.Proc.CubeIO.sampleLandPoints",
    "category": "function",
    "text": "sampleLandPoints(cube, nsample;nomissing=false)\n\nGet an area-weighted sample from all non-ocean grid cells. This will return a new Cube where the LonAxis and LatAxis are condensed into a single SpatialPointAxis of length nsample. If nomissing=true only grid cells will be selected which don\'t contain any missing values. This makes sense for gap-filled cubes to make sure that grid cells with systematic seasonal gaps are not selected in the sample.\n\n\n\n"
},

{
    "location": "cube_access.html#Point-wise-access-1",
    "page": "Accessing the Data Cube",
    "title": "Point-wise access",
    "category": "section",
    "text": "sampleLandPoints"
},

{
    "location": "cube_access.html#ESDL.CubeAPI.known_regions",
    "page": "Accessing the Data Cube",
    "title": "ESDL.CubeAPI.known_regions",
    "category": "constant",
    "text": "List of Continents\n\nAfrica\nAsia\nAustralia\nEurope\nNorth America\nSouth America\n\nList of SREX regions\n\nShort Name Long Name\nALA Alaska/N.W. Canada\nAMZ Amazon\nCAM Central America/Mexico\nCAR small islands regions Caribbean\nCAS Central Asia\nCEU Central Europe\nCGI Canada/Greenland/Iceland\nCNA Central North America\nEAF East Africa\nEAS East Asia\nENA East North America\nMED South Europe/Mediterranean\nNAS North Asia\nNAU North Australia\nNEB North-East Brazil\nNEU North Europe\nSAF Southern Africa\nSAH Sahara\nSAS South Asia\nSAU South Australia/New Zealand\nSEA Southeast Asia\nSSA Southeastern South America\nTIB Tibetan Plateau\nWAF West Africa\nWAS West Asia\nWNA West North America\nWSA West Coast South America\nANT Antarctica\nARC Arctic\nNTP Pacific Islands region\nSTP Southern Topical Pacific\nETP Pacific Islands region\nWIO West Indian Ocean\n\nList of countries\n\nShort Name Long Name\nABW Aruba\nAFG Afghanistan\nAGO Angola\nAIA Anguilla\nALB Albania\nALA Aland\nAND Andorra\nARE United Arab Emirates\nARG Argentina\nARM Armenia\nASM American Samoa\nATA Antarctica\nAshm Ashmore and Cartier Is.\nATF Fr. S. and Antarctic Lands\nATG Antigua and Barb.\nAUS Australia\nAUT Austria\nAZE Azerbaijan\nBDI Burundi\nBEL Belgium\nBEN Benin\nBFA Burkina Faso\nBGD Bangladesh\nBGR Bulgaria\nBHR Bahrain\nBHS Bahamas\nBIH Bosnia and Herz.\nBLM St. Barthelemy\nBLR Belarus\nBLZ Belize\nBMU Bermuda\nBOL Bolivia\nBRA Brazil\nBRB Barbados\nBRN Brunei\nBTN Bhutan\nBWA Botswana\nCAF Central African Rep.\nCAN Canada\nCHE Switzerland\nCHL Chile\nCHN China\nCIV Ivory Coast\nCLP Clipperton I.\nCMR Cameroon\nCNM \nCOD Congo (Kinshasa)\nCOG Congo (Brazzaville)\nCOK Cook Is.\nCOL Colombia\nCOM Comoros\nCPV Cape Verde\nCRI Costa Rica\nCSI Coral Sea Is.\nCUB Cuba\nCUW Curacao\nCYM Cayman Is.\nCYN N. Cyprus\nCYP Cyprus\nCZE Czech Rep.\nDEU Germany\nDJI Djibouti\nDMA Dominica\nDNK Denmark\nDOM Dominican Rep.\nDZA Algeria\nECU Ecuador\nEGY Egypt\nERI Eritrea\nESB Dhekelia\nESP Spain\nEST Estonia\nETH Ethiopia\nFIN Finland\nFJI Fiji\nFLK Falkland Is.\nFRA France\nFRO Faroe Is.\nFSM Micronesia\nGAB Gabon\nGaza Gaza\nGBR United Kingdom\nGEO Georgia\nGGY Guernsey\nGHA Ghana\nGIB Gibraltar\nGIN Guinea\nGMB Gambia\nGNB Guinea Bissau\nGNQ Eq. Guinea\nGRC Greece\nGRD Grenada\nGRL Greenland\nGTM Guatemala\nGUM Guam\nGUY Guyana\nHKG Hong Kong\nHMD Heard I. and McDonald Is.\nHND Honduras\nHRV Croatia\nHTI Haiti\nHUN Hungary\nIDN Indonesia\nIMN Isle of Man\nIND India\nIOA Indian Ocean Ter.\nIOT Br. Indian Ocean Ter.\nIRL Ireland\nIRN Iran\nIRQ Iraq\nISL Iceland\nISR Israel\nITA Italy\nJAM Jamaica\nJEY Jersey\nJOR Jordan\nJPN Japan\nKAB Baykonur\nKAS \nKAZ Kazakhstan\nKEN Kenya\nKGZ Kyrgyzstan\nKHM Cambodia\nKIR Kiribati\nKNA St. Kitts and Nevis\nKNM \nKOR S. Korea\nKOS Kosovo\nKWT Kuwait\nLAO Laos\nLBN Lebanon\nLBR Liberia\nLBY Libya\nLCA Saint Lucia\nLIE Liechtenstein\nLKA Sri Lanka\nLSO Lesotho\nLTU Lithuania\nLUX Luxembourg\nLVA Latvia\nMAC Macau\nMAF St. Martin\nMAR Morocco\nMCO Monaco\nMDA Moldova\nMDG Madagascar\nMDV Maldives\nMEX Mexico\nMHL Marshall Is.\nMKD Macedonia\nMLI Mali\nMLT Malta\nMMR Myanmar\nMNE Montenegro\nMNG Mongolia\nMNP N. Mariana Is.\nMOZ Mozambique\nMRT Mauritania\nMSR Montserrat\nMUS Mauritius\nMWI Malawi\nMYS Malaysia\nNAM Namibia\nNCL New Caledonia\nNER Niger\nNFK Norfolk Island\nNGA Nigeria\nNIC Nicaragua\nNIU Niue\nNLD Netherlands\nNOR Norway\nNPL Nepal\nNRU Nauru\nNZL New Zealand\nOMN Oman\nPAK Pakistan\nPAN Panama\nPCN Pitcairn Is.\nPER Peru\nPHL Philippines\nPLW Palau\nPNG Papua New Guinea\nPOL Poland\nPRI Puerto Rico\nPRK N. Korea\nPRT Portugal\nPRY Paraguay\nPYF Fr. Polynesia\nQAT Qatar\nROU Romania\nRUS Russia\nRWA Rwanda\nSAH W. Sahara\nSAU Saudi Arabia\nSDN Sudan\nSDS S. Sudan\nSEN Senegal\nSGP Singapore\nSGS S. Geo. and S. Sandw. Is.\nSHN Saint Helena\nSLB Solomon Is.\nSLE Sierra Leone\nSLV El Salvador\nSMR San Marino\nSOL Somaliland\nSOM Somalia\nSPM St. Pierre and Miquelon\nSRB Serbia\nSTP Sao Tome and Principe\nSUR Suriname\nSVK Slovakia\nSVN Slovenia\nSWE Sweden\nSWZ Swaziland\nSXM Sint Maarten\nSYC Seychelles\nSYR Syria\nTCA Turks and Caicos Is.\nTCD Chad\nTGO Togo\nTHA Thailand\nTJK Tajikistan\nTKM Turkmenistan\nTLS East Timor\nTON Tonga\nTTO Trinidad and Tobago\nTUN Tunisia\nTUR Turkey\nTUV Tuvalu\nTWN Taiwan\nTZA Tanzania\nUGA Uganda\nUKR Ukraine\nUMI U.S. Minor Outlying Is.\nURY Uruguay\nUSA United States\nUSG Guantanamo Bay USNB\nUZB Uzbekistan\nVAT Vatican\nVCT St. Vin. and Gren.\nVEN Venezuela\nVGB British Virgin Is.\nVIR U.S. Virgin Is.\nVNM Vietnam\nVUT Vanuatu\nPSE West Bank\nWLF Wallis and Futuna\nWSB Akrotiri\nWSM Samoa\nYEM Yemen\nZAF South Africa\nZMB Zambia\nZWE Zimbabwe\n\n\n\n"
},

{
    "location": "cube_access.html#List-of-known-regions-1",
    "page": "Accessing the Data Cube",
    "title": "List of known regions",
    "category": "section",
    "text": "ESDL.CubeAPI.known_regions"
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
    "text": "The ESDL package comes with a list of predefined methods for statistical analysis. The functions are defined to work on specific axes, for example a function that removes the mean annual cycle will always extract one time series after the other from a cube, process them, store the results and concatenate the resulting time series to a new output cube. It does not matter which other axes are defined in the input cube, the function will simply loop over these.The function will then be applied to the whole cube in a memory-efficient way, which means that chunks of data are read, processed and then saved in the output cube. Whether the output cube is a MmapCube or a CubeMem is decided by the system, depending on if the calculation is parallel, and how large the output cube is.Here follows a list of analysis function included in this package. If you have implemented or wrapped a method that might be of interest to a broader community, please feel free to open a pull request."
},

{
    "location": "analysis.html#ESDL.Proc.MSC.gapFillMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.gapFillMSC",
    "category": "method",
    "text": "gapFillMSC\n\nFills missing values of each time series in a cube with the mean annual cycle.\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis\n\n\n\n"
},

{
    "location": "analysis.html#ESDL.Proc.MSC.getMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.getMSC",
    "category": "method",
    "text": "getMSC\n\nReturns the mean annual cycle from each time series.\n\nInput Axes Timeaxis\n\nOutput Axes MSCaxis\n\n\n\n"
},

{
    "location": "analysis.html#ESDL.Proc.MSC.getMedSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.getMedSC",
    "category": "method",
    "text": "getMedMSC(c::AbstractCubeData)\n\nReturns the median annual cycle from each time series.\n\nInput Axes Timeaxis\n\nOutput Axes MSCaxis\n\n\n\n"
},

{
    "location": "analysis.html#ESDL.Proc.MSC.removeMSC-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.MSC.removeMSC",
    "category": "method",
    "text": "removeMSC(c::AbstractCubeData)\n\nRemoves the mean annual cycle from each time series of a data cube.\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis\n\n\n\n"
},

{
    "location": "analysis.html#Seasonal-cycles-1",
    "page": "Analysis",
    "title": "Seasonal cycles",
    "category": "section",
    "text": "Modules = [ESDL.Proc.MSC]\nPrivate = false"
},

{
    "location": "analysis.html#ESDL.Proc.Outlier.cubeAnomalies-Tuple{ESDL.Cubes.AbstractCubeData,Any,Any}",
    "page": "Analysis",
    "title": "ESDL.Proc.Outlier.cubeAnomalies",
    "category": "method",
    "text": "cubeAnomalies(cube, methods, trainArray)\n\nA simple wrapper around the function detectAnomalies! from the MultivariateAnomalies package.\n\ncube data cube with a axes: TimeAxis, VariableAxis\nmethods vector of methods to be applied, choose from: KDE,T2,REC,KNN-Gamma,KNN-Delta,SVDD,KNFST\ntrainArray a matrix of nsample x nvar, to estimate the training parameters for the model. Ideally does not contain any extreme values\n\nInput Axes TimeAxis, Variableaxis\n\nOutput Axes TimeAxis, Methodaxis\n\n\n\n"
},

{
    "location": "analysis.html#Outlier-detection-1",
    "page": "Analysis",
    "title": "Outlier detection",
    "category": "section",
    "text": "Modules = [ESDL.Proc.Outlier]\nPrivate = false"
},

{
    "location": "analysis.html#ESDL.Proc.Stats.normalizeTS-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.Stats.normalizeTS",
    "category": "method",
    "text": "normalizeTS(c::AbstractCubeData)\n\nNormalize a time series to zeros mean and unit variance\n\nInput Axes TimeAxis\n\nOutput Axes TimeAxis\n\n\n\n"
},

{
    "location": "analysis.html#Simple-Statistics-1",
    "page": "Analysis",
    "title": "Simple Statistics",
    "category": "section",
    "text": "Another typical use case is the application of basic statistics like sum, mean and std applied on one or more cube axes. We overload the method mapslices for data cubes,   The main difference to the function exported in Base is that the dimensions to be sliced over are given by name and not by dimension index. For example,mapslices(mean, cube,(\"Lon\",\"Lat\"))will compute the mean over each spatial map contained in the data cube. Please that that the mapslices function will execute the function once with random number input to determine the shape of the returned values and then pre-allocate the output array. So keep this in mind when your function has some side-effects. Note also that although the mapslices function should just work in most cases, it is advised to know read about the mapCube function in Applying custom functions which gives you much more detailed control over the mapping operation.Applying these functions makes sense if the slices one wants to reduce fit in memory. However, if one wants to calculate some statistics on e.g. a timelonlat cube, one would preferably call one of the OnlineStats methods.  Additional simple statistics functions are:Modules = [ESDL.Proc.Stats]\nPrivate = false"
},

{
    "location": "analysis.html#ESDL.Proc.TSDecomposition.filterTSFFT-Tuple{ESDL.Cubes.AbstractCubeData}",
    "page": "Analysis",
    "title": "ESDL.Proc.TSDecomposition.filterTSFFT",
    "category": "method",
    "text": "filterTSFFT\n\nFilter each time series using a Fourier filter and return the decomposed series in 4 time windows (Trend, Long-Term Variability, Annual Cycle, Fast Oscillations)\n\nInput Axes Timeaxis\n\nOutput Axes Timeaxis, TimeScaleaxis\n\n\n\n"
},

{
    "location": "analysis.html#Time-series-decomposition-1",
    "page": "Analysis",
    "title": "Time series decomposition",
    "category": "section",
    "text": "Modules = [ESDL.Proc.TSDecomposition]\nPrivate = false"
},

{
    "location": "analysis.html#ESDL.Proc.CubeIO.exportcube-Tuple{ESDL.Cubes.AbstractCubeData,String}",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.exportcube",
    "category": "method",
    "text": "exportcube(r::AbstractCubeData,filename::String)\n\nSaves a cube object to a portable NetCDF file in filename.\n\nWhen saving, every RangeAxis will be converted to an axis in the NetCDF cube, while every categorical axis will be represented by a different variable inside the resulting file. Dimensions will be ordered according to the priorities keyword argument, which defaults to Dict(\"LON\"=>1,\"LAT\"=>2,\"TIME\"=>3), which means that the file will be stored with longitudes varuing fastest. \n\n\n\n"
},

{
    "location": "analysis.html#ESDL.Proc.CubeIO.extractLonLats-Tuple{ESDL.Cubes.AbstractCubeData,Array{T,2} where T}",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.extractLonLats",
    "category": "method",
    "text": "extractLonLats(c::AbstractCubeData,pl::Matrix)\n\nExtracts a list of longitude/latitude coordinates from a data cube. The coordinates are specified through the matrix pl where size(pl)==(N,2) and N is the number of extracted coordinates. Returns a data cube without LonAxis and LatAxis but with a SpatialPointAxis containing the input locations.\n\n\n\n"
},

{
    "location": "analysis.html#ESDL.Proc.CubeIO.sampleLandPoints",
    "page": "Analysis",
    "title": "ESDL.Proc.CubeIO.sampleLandPoints",
    "category": "function",
    "text": "sampleLandPoints(cube, nsample;nomissing=false)\n\nGet an area-weighted sample from all non-ocean grid cells. This will return a new Cube where the LonAxis and LatAxis are condensed into a single SpatialPointAxis of length nsample. If nomissing=true only grid cells will be selected which don\'t contain any missing values. This makes sense for gap-filled cubes to make sure that grid cells with systematic seasonal gaps are not selected in the sample.\n\n\n\n"
},

{
    "location": "analysis.html#Cube-transformations-1",
    "page": "Analysis",
    "title": "Cube transformations",
    "category": "section",
    "text": "Modules = [ESDL.Proc.CubeIO]\nPrivate = false"
},

{
    "location": "analysis.html#OnlineStats-1",
    "page": "Analysis",
    "title": "OnlineStats",
    "category": "section",
    "text": "It is possible to directly apply statistics included in the OnlineStats.jl package on the data cube. This makes it possible to calculate statistics on data too big to fit into memory. The general syntax ismapCube(f ,cube; by=CubeAxis[], cfun=identity, outAxis=nothing,kwargs...)where f is an OnlineStat data type and cube is the cube you want to apply the statistics to. By default this function will reduce all values over all axes of the cube, so if you want to do statistics by a certain axis, it has to be specified using the by keyword argument. by accepts a vector of axes types and up to one datacube that can serve as a mask. If such a data cube is supplied, the statistics are split by the unique values in the mask. One can pass a function cfun that transforms the mask values into an index in the range 1..N that defines the    index where the new value is going to be put to. If a mask is supplied, it must have either a labels property, which is a Dict{T,String} mapping the numerical mask value to the value name. Alternatively on can supply an outAxis argument that describes the resulting output axis.This all gets clearer with two small examples. suppose we want to calculate the mean of GPP, NEE and TER under the condition that Tair<280K and Tair>280K over all time steps and grid cells. This is achieved through the following lines of code:import OnlineStats\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nt     = getCubeData(ds,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nsplitTemp(t) = ifelse(t>280,2,1)                            # Define the classification function\noutAxis      = CategoricalAxis(\"TempClass\",[\"< 7C\",\">7C\"])  # A two-length output axis, because there are two possible values\nmT    = mapCube(OnlineStats.Mean,cube,by=[t,VariableAxis], cfun=splitTemp, outAxis=outAxis) # Of course we want to split by variable, too\n\nusing ESDLPlots\nplotXY(mT,xaxis=\"var\",group=\"tempclass\")#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using ESDL\nimport OnlineStats\nimport Documenter\nds    = Cube()\nlons  = (30,31)\nlats  = (50,51)\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nt     = getCubeData(ds,variable=\"air_temperature_2m\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nsplitTemp(t) = ifelse(t>280,2,1)\noutAxis      = CategoricalAxis(\"TempClass\",[\"< 7C\",\">7C\"])\nmT    = mapCube(OnlineStats.Mean,cube,by=[t,VariableAxis], cfun=splitTemp, outAxis=outAxis)\n\nusing ESDLPlots\ngr()\np=plotXY(mT,xaxis=\"var\",group=\"tempclass\")\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))A second example would be that we want to calculate averages of the fluxes according to a country mask.import OnlineStats\nvars  = [\"gross_primary_productivity\",\"net_ecosystem_exchange\",\"terrestrial_ecosystem_respiration\"]\nm     = getCubeData(ds,variable=\"country_mask\",longitude=lons,latitude=lats)\ncube  = getCubeData(ds,variable=vars,longitude=lons,latitude=lats)\n\nmT    = mapCube(OnlineStats.Mean,cube,by=[m,VariableAxis], cfun=splitTemp, outAxis=outAxis)This will split the cube by country and variable and compute averages over the input variables."
},

{
    "location": "analysis.html#ESDL.Proc.DATOnlineStats.cubePCA",
    "page": "Analysis",
    "title": "ESDL.Proc.DATOnlineStats.cubePCA",
    "category": "function",
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
    "location": "analysis.html#Online-Histograms-and-quantiles-1",
    "page": "Analysis",
    "title": "Online Histograms and quantiles",
    "category": "section",
    "text": "It is possible to estimate histograms and quantiles of larger-than-memory datasets using an adaptive-bin histogram algorithm. The Base.quantile method is overloaded for objects of type AbstractCubeData, so the following works:c=Cube()\nd=getCubeData(c,variable=[\"gross_primary_productivity\",\"net_ecosystem_exchange\"], region=\"Europe\")\nq = quantile(d,[0.1,0.9], by=[VariableAxis])\nq.data2×2 Array{Float32,2}:\n 0.040161  -1.88354\n 6.02323    0.552485to estimate the 10% and 90% quantiles of all datapoints for each variable. Note that any additional keyword arguments to this call (like the by argument) are passed to the respective mapCube call."
},

{
    "location": "analysis.html#Elementwise-calculations-1",
    "page": "Analysis",
    "title": "Elementwise calculations",
    "category": "section",
    "text": "Doing elementwise calculations on the cube is generally done using the map function. So, if you want to multiply each single element of a data cube with 2, you could call newcube = map(x->2*x, oldcube). This will not execute the computation immediately but on the fly during the next computation or plotting. Functions with multiple arguments can also be applied like in: sumcube = map((x,y)->x+y, incube1, incube2). Which would calculate the sum of two data cubes.We have also overloaded a list of commonly used operators (+,-,*,/, max,min) and functions (sin,cos,exp,log, log10) to apply on datacubes directly. So newCube = (abs(cube1-cube2)) would work as expected."
},

{
    "location": "plotting.html#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": "#Load Javascript env\nimport Patchwork\nimport Documenter\nDocumenter.Documents.RawHTML(\"<script>$(Patchwork.js_runtime())</script>\")using ESDL # hide\nusing ESDLPlots\nimport Documenter\nds=Cube() # hide"
},

{
    "location": "plotting.html#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "CurrentModule = Main.ESDLPlots"
},

{
    "location": "plotting.html#ESDLPlots.plotMAP",
    "page": "Plotting",
    "title": "ESDLPlots.plotMAP",
    "category": "function",
    "text": "plotMAP(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)\n\nMap plotting tool for cube objects, can be called on any type of cube data\n\nKeyword arguments\n\ndmin, dmax Minimum and maximum value to be used for color transformation\ncolorm colormap to be used. Find a list of colormaps in the Colors.jl package\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nsymmetric make the color scale symmetric around zero\nxaxis which axis should be used for x axis, defaults to LonAxis\nyaxis which axis should be used for y axis, defaults to LatAxis\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plot\n\nIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\nIf the properties field of cube contains a \"labels\" field with a dictionary mapping field values to the name of the class represented.\n\n\n\n"
},

{
    "location": "plotting.html#Plot-geographical-maps-1",
    "page": "Plotting",
    "title": "Plot geographical maps",
    "category": "section",
    "text": "Map plotting is generally done using the plotMAP function:plotMAPIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.Here is an example on how to plot a map. The keyword arguments specify the time step (time=1) and the variable (var=1).\ncdata=getCubeData(ds,variable=[\"air_temperature_2m\",\"gross_primary_productivity\"])\nplotMAP(cdata,time=1,var=1)Inside a Jupyter notebook, the keyword arguments can be omitted and sliders or dropdown menus will be shown to select the desired values."
},

{
    "location": "plotting.html#ESDLPlots.plotMAPRGB",
    "page": "Plotting",
    "title": "ESDLPlots.plotMAPRGB",
    "category": "function",
    "text": "plotMAPRGB(cube::AbstractCubeData; dmin=datamin, dmax=datamax, colorm=colormap(\"oranges\"), oceancol=colorant\"darkblue\", misscol=colorant\"gray\", kwargs...)\n\nMap plotting tool for colored plots that use up to 3 variables as input into the several color channels. Several color representations from the Colortypes.jl package are supported, so that besides RGB (XYZ)-plots one can create HSL, HSI, HSV or Lab and Luv plots.\n\nKeyword arguments\n\ndmin, dmax Minimum and maximum value to be used for color transformation, can be either a single value or a tuple, when min/max values are given for each channel\nrgbAxis which axis should be used to select RGB channels from\noceancol color to fill the ocean with, defaults to colorant\"darkblue\"\nmisscol color to represent missing values, defaults to colorant\"gray\"\nlabels given a list of labels this will create a plot with a non-continouous color scale where integer cube values [1..N] are mapped to the given labels.\ncType ColorType to use for the color representation. Can be one of RGB, XYZ, Lab, Luv, HSV, HSI, HSL\ndim=value can set other dimensions to certain values, for example var=\"air_temperature_2m\" will fix the variable for the resulting plot\n\nIf a dimension is neither longitude or latitude and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n"
},

{
    "location": "plotting.html#RGB-Maps-1",
    "page": "Plotting",
    "title": "RGB Maps",
    "category": "section",
    "text": "A common method to plot several variables at once in a single map is an RGB map. This is possible through the plotMAPRGB function.plotMAPRGBFor example, if we want to plot GPP, NEE and TER as an RGB map for South America, we can do the following:d=getCubeData(ds,variable=\"Biosphere\",region=\"South America\")\nusing ColorTypes\nplotMAPRGB(d,c1=\"gross_primary_productivity\",\n             c2=\"net_ecosystem_exchange\",\n             c3=\"terrestrial_ecosystem_respiration\",\n             cType=Lab,\n             time=100)"
},

{
    "location": "plotting.html#Other-plots-1",
    "page": "Plotting",
    "title": "Other plots",
    "category": "section",
    "text": ""
},

{
    "location": "plotting.html#ESDLPlots.plotXY",
    "page": "Plotting",
    "title": "ESDLPlots.plotXY",
    "category": "function",
    "text": "plotXY(cube::AbstractCubeData; group=0, xaxis=-1, kwargs...)\n\nGeneric plotting tool for cube objects, can be called on any type of cube data.\n\nKeyword arguments\n\nxaxis which axis is to be used as x axis. Can be either an axis Datatype or a string. Short versions of axes names are possible as long as the axis can be uniquely determined.\ngroup it is possible to group the plot by a categorical axis. Can be either an axis data type or a string.\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plot\n\nIf a dimension is not the x axis or group variable and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n"
},

{
    "location": "plotting.html#XY-plots-1",
    "page": "Plotting",
    "title": "XY plots",
    "category": "section",
    "text": "Generating x-y type plots where the x axis is one of the cube axes and the y axis is the corresponding cube value is done with the generic plotXY function.plotXYHere are two examples for using this function:cdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nplotXY(cdata,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nnothing # hideusing ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nds=Cube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotXY(cdata,xaxis=\"time\",group=\"variable\",lon=31,lat=51)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))This is a time series plot, grouped by variables for a specific longitude/latitude.m=reduceCube(mean,cdata,TimeAxis)\nplotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)using ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nds=Cube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\nm=reduceCube(mean,cdata,TimeAxis, max_cache=1e8)\np=plotXY(m,xaxis=\"variable\",group=\"lat\",lon=30)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))"
},

{
    "location": "plotting.html#ESDLPlots.plotScatter",
    "page": "Plotting",
    "title": "ESDLPlots.plotScatter",
    "category": "function",
    "text": "plotScatter(cube::AbstractCubeData; vsaxis=VariableAxis, alongaxis=0, group=0, xaxis=0, yaxis=0, kwargs...)\n\nGeneric plotting tool for cube objects to generate scatter plots, like variable A against variable B. Can be called on any type of cube data.\n\nKeyword arguments\n\nvsaxis determines the axis from which the x and y variables are drawn.\nalongaxis determines the axis along which the variables are plotted. E.g. if you choose TimeAxis, a dot will be plotted for each time step.\nxaxis index or value of the variable to plot on the x axis\nyaxis index or value of the variable to plot on the y axis\ngroup it is possible to group the plot by an axis. Can be either an axis data type or a string. Caution: This will increase the number of plotted data points\ndim=value can set other dimensions to certain values, for example lon=51.5 will fix the longitude for the resulting plot\n\nIf a dimension is not the vsaxis or alongaxis or group and is not fixed through an additional keyword, a slider or dropdown menu will appear to select the axis value.\n\n\n\n"
},

{
    "location": "plotting.html#Scatter-plots-1",
    "page": "Plotting",
    "title": "Scatter plots",
    "category": "section",
    "text": "In order to do scatter plots, i.e. plotting variable A against variable B one can use the plotScatter function.plotScatterA short example is shown here:cdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotScatter(cdata,alongaxis=TimeAxis,xaxis=1,yaxis=2,group=\"lat\",lon=30)using ESDL # hide\nusing ESDLPlots\ngr()\nimport Documenter # hide\nds=Cube() # hide\ncdata=getCubeData(ds,variable=[\"net_ecosystem_exchange\",\"gross_primary_productivity\",\"terrestrial_ecosystem_respiration\"],\nlongitude=(30.0,30.0),latitude=(50.0,52.0))\np=plotScatter(cdata,alongaxis=TimeAxis,xaxis=\"net_ecosystem_exchange\",yaxis=\"gross_primary_productivity\",group=\"lat\",lon=30.0)\nb=IOBuffer()\nshow(b,MIME\"text/html\"(),p)\nDocumenter.Documents.RawHTML(String(take!(b)))"
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
    "text": "The main feature of this package, and propbably the one one that is most different to other geospatial frameworks is the mapCube function that lets you execute arbitrary functions on arbitrary slices (and permutations) of one or more input data cubes. The function can be pure Julia or call into C libraries, call other packages, etc. In addition, the computation will be carried out in a memory-efficient manner, which mean, that only the data is read in a chunked manner, processed and then again written slice-by-slice to allow out-of-core computation. All this is done by the mapCube methods which applies a user-defined function f on slices of the cube. The underlying principles are:The function f takes N_in arrays as input and its output is represented in N_out output arrays.\nThe function f has at least N_out + N_in arguments, where so its signature is f(xout1, xout2, .... ,xoutN_out, xin1, xin2, ... xinN_in, addargs...; kwargs...)\nEvery input array of f will be a slice of an input data cube. The user specifies the axes that will be used for slicing by creating an InDims for every input cube object and passing it to the mapCube function.\nThe dimensions of every output array have to be specified by the user by creating an OutDims object for every output cube and passing it to the mapCube function\nThe input data cubes may have additional dimensions which are not used for slicing, these will be iterated over and the function f be called repeatedly for every slice. If there are multiple input cubes, and contain additional axes of the same name, they must are required to have the same axis values, so that equal values are matched in the looped. If different input cubes have differently named additional axes, their oputer product will be applied and the axes will all be added to the output cubes."
},

{
    "location": "adding_new.html#A-minimal-example-1",
    "page": "Applying custom functions",
    "title": "A minimal example",
    "category": "section",
    "text": "In order to understand how these principles are applied, let us walk through a very basic example, namely a function that normalizes the time series of a datacube. That means, we want to scale each time series in the cube in a way that its mean is 0 and the standard deviation is 1.Let\'s translate this into the principles mentioned above. Our function that we want to writes will take a 1D-array as an input (a time series) and write an output of the same length. So the function will have to accept two arguments, which we will call xin for the inout time series and xout as the placeholder for the output time series. We can define such a function like this:using ESDL\nusing Missings\nfunction mynorm(xout, xin)\n  all(ismissing,xin) && return xout[:]=missing\n  m = mean(skipmissing(xin))\n  s = std(skipmissing(xin))\n  if s>0\n    xout[:].=(xin.-m)./s\n  else #Time series is probably constant\n    xout[:]=0\n  end\n  nothing\nendNext we have to define the input dimensions for our data cube. We want the function to operate on the time axis, so we create an object:indims = InDims(\"Time\")The InDims constructor takes any number of positional arguments and tries to convert them into a description of a cube axis, so you can pass it a string, an axis type or an axis itself, all of which will be matched against the axes of the input data cube. Next we define the output axis:outdims = OutDims(\"Time\")Similarly to the input cube constructor, for OutDims any number of descriptors is allowed. When passed a single string or axis type, then a matching input axis will be used as the output dimension. However, when a new output axis is created by the function, other possibilities for the output axis description are possible.Having defined these objects, we can finally load a data cube handle and apply the function, the dimension description gets passed using the indims and outdims keywords:c = Cube()\nd = getCubeData(c,variable = [\"gross_primary_productivity\", \"net_ecosystem_exchange\"],time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\nd_norm = mapCube(mynorm, d, indims=indims, outdims=outdims)The resulting cube has the same dimensions like the input cube. All variables except Time were just looped over and the result was stored in a new data cube."
},

{
    "location": "adding_new.html#Using-different-representations-for-missing-data-1",
    "page": "Applying custom functions",
    "title": "Using different representations for missing data",
    "category": "section",
    "text": "By default, the data that are passed to the user-defined function will always be represented as an Array{Union{T,Missing}}, so they use Julia\'s Missing type to represent missing data. However, there might be several reasons for the missingnes of a single data value, like it might be in the ocean, or it is out of the dataset period or it is an observation gap. In the ESDC this information is stored in a special mask type (see Cube Masks), that can be accessed inside the UDF. For example, if we want to rewrite the myNorm function defined above, but we want to only calculate the mean and std based on values that were not gapfilled, one could do so:import ESDL.Mask\nfunction mynorm_nonfilled(xout, ain)\n  #Destructure the tuple into the data and mask array\n  xin,min = ain\n  #Get the valid data points that are not filled\n  validx = find(i->Mask.isvalid(i) && !Mask.isfilled(i),min)\n  # Check if we have valid points at all\n  isempty(validx) && return xout[:]=missing\n  #Filter data\n  xin = xin[validx]\n  m = mean(xin)\n  s = std(xin)\n  if s>0\n    xout[:].=(xin.-m)./s\n  else #Time series is probably constant\n    xout[:]=0\n  end\n  nothing\nend\n\n\nindims  = InDims(\"time\",miss = ESDL.MaskMissing())\noutdims = OutDims(\"time\")\n\nmapCube(mynorm_nonfilled, d, indims = indims, outdims = outdims, no_ocean=1)Let\'s see what we changed. First when constructing the InDims object we used the miss keyword argument to specify that we want missing values represented by an extra mask. This tells the mapCube function to pass the first input cube as a tuple instead of as a DataArray. Inside the function, we first destructure the tuple into the mask and the data, determine the missing and filled values from the mask and then do the computation on the filtered data. See InDims for more options on representation of missing data."
},

{
    "location": "adding_new.html#Calculations-on-multiple-cubes-1",
    "page": "Applying custom functions",
    "title": "Calculations on multiple cubes",
    "category": "section",
    "text": "So far we showed only examples with a single input data cube. Here we give a first example for doing operations on two input cubes having different shapes. To do this, let us go back to our mynorm example and assume that we do not only want to return the normalized time series but also the standard deviation and the mean. The problem here is that mean and standard deviation are scalars while the time series is a vector so they can not easily be coerced into a single output cube. The solution would be to return multiple output cubes. So we define the norm function and Indims and Outdims as follows:function mynorm_return_stdm(xout_ts, xout_m, xout_s, xin)\n  # Check if we have only missing values\n  if all(ismissing,xin)\n    xout_ts[:]=missing\n    xout_m[1]=missing\n    xout_s[1]=missing\n  else\n    m = mean(skipmissing(xin))\n    s = std(skipmissing(xin))\n    if s>0 # See if time series is not constant\n      xout_ts[:].=(xin.-m)./s\n    else #Time series is probably constant\n      xout_ts[:]=0.0\n    end\n    # Now write mean and std to output\n    xout_s[1]=s\n    xout_m[1]=m\n  end\nend\n\nindims     = InDims(\"Time\")\noutdims_ts = OutDims(\"Time\")\noutdims_m  = OutDims()\noutdims_s  = OutDims()\n\nd_norm, m, s = mapCube(mynorm_return_stdm, d, indims=indims, outdims=(outdims_ts, outdims_m, outdims_s))First of all lets see what changed. We added two more arguments to the UDF, which are xout_m and xout_s the additional output arrays and we put the additional outputs into them. Then we added an additional output cube description OutDims() for each cube, which has no argument, because these outputs are singular values and don\'t contain any dimensions. When we apply the function, we simply pass a tuple of output cube descriptions to the outdims keywords and the mapCube function returns then three cubes: the full time x lon x lat x variable cube for the normalized time series and two lon x xlat x variable cubes for mean and standard deviation.   Of course, this also works the same way if you want to apply a function to multiple input data cubes. Let\'s stay with the normalization example and assume that we want to normalize our dataset with some externally given standard deviation and mean, which are different for every pixel. Then one would have to define multiple InDims objects:indims_ts = InDims(\"Time\")\nindims_m  = InDims()\nindims_s  = InDims()\noutdims   = OutDims(\"Time\")and define the function that does the scaling, which accepts now additional arguments for the scaling and offset:function mynorm_given_stdm(xout, xin_ts, m, s)\n  xout[:]=(xin_ts[:].-m[1])./s[1]\nend\n\nmapCube(mynorm_given_stdm, (d,m,s), indims = (indims_ts, indims_m, indims_s), outdims = outdims)Note that the operation will match all the other axes that the cube contains, so because the cubes d,m and s all contain a LonAxis, a LatAxis and a VariableAxis, holding the same values, it will loop over these so that for every pixel the \"right\" mean and standard deviation is used."
},

{
    "location": "adding_new.html#Axes-are-cubes-1",
    "page": "Applying custom functions",
    "title": "Axes are cubes",
    "category": "section",
    "text": "In some cases one needs to have access to the value of an axis, for example when one wants to calculate a spatial Aggregation, the latitudes are important to determine grid cell weights. To do this, one can pass a cube axis to mapCube as if it was a cube having only one dimension. The values will then correspond to the axis values (the latitudes in degrees in this case).using ESDL # hide\nfunction spatialAggregation{T}(xout::Array{T,0}, xin::Matrix, latitudes::AbstractVector)\n  #code goes here\nend\n\n#Extract the latitude axis\nlatitudecube = ESDL.getAxis(\"Lat\",cube)\n\nindims_map = InDims(LonAxis, LatAxis)\nindims_lat = InDims(LatAxis,miss=ESDL.NoMissing())\noutdims    = OutDims()\nmapCube(spatialAggregation, (cube,lataxis), indims = (indims_map, indims_lat), outdims = outdims);Here, the function will operate on a lon x lat matrix and one has access to the latitude values inside the function. Note that the getAxis function is very useful in this context, since it extracts the axis of a certain name from a given data cube object. Then we pass the cube axis as a second input cube to the mapCube function (see also Calculations on multiple cubes)."
},

{
    "location": "adding_new.html#Passing-additional-arguments-1",
    "page": "Applying custom functions",
    "title": "Passing additional arguments",
    "category": "section",
    "text": "If a function call needs additional arguments, they are simple appended to the mapCube call and then get passed to the function. For example, if one wants to apply a multivariate extreme event detection method detectExtremes, where one can choose from several methods, the function signature would look like this:function detectExtremes(xout::Vector, xin::Matrix, method)\n  #code goes here\nend\n\ninAxes  = InDims(TimeAxis,VariableAxis,miss = NaNMissing())\noutAxes = OutDims(TimeAxis,miss=NaNMissing())\nmethods = \"KDE\"\nmapCube(detectExtremes, cube, \"KDE\", indims = inAxes, outdims = outAxes, no_ocean=1);The method would then be called e.g. with which would pass the String \"KDE\" as the third positional argument to the function."
},

{
    "location": "adding_new.html#Generating-new-output-axes-1",
    "page": "Applying custom functions",
    "title": "Generating new output axes",
    "category": "section",
    "text": "So far in our examples we always re-used axes from the input cube as output cube axes. However, it is possible to create new axes and use them for the resulting data cubes from a mapCube operation. The example we want to look at is a polynomial regression between two variables. Assume we want to describe the relationship between GPP and ecosystem respiration for each pixel through a polynomial of degree N.So for each pixel we want to do the polynomial regression on the two variables and then return a vector of coefficients. We define the function that does the calculation as:using ESDL\nusing Polynomials\nfunction fit_npoly(xout, var1, var2, n)\n  p = polyfit(var1, var2, n)\n  xout[:] = coeffs(p)\nendNow assume we want to fit a polynomial of order 2 to our variables. We first create the output axis we want to use, you can either use CategoricalAxis for non-continuous quantities or RangeAxis for continuous axes. Here we create a categorical Axis and pass it to the OutDims constructor:polyaxis = CategoricalAxis(\"Coefficients\",[\"Offset\",\"1\",\"2\"])\n\nindims1  = InDims(\"Time\",    miss=ESDL.NaNMissing())\nindims2  = InDims(\"Time\",    miss=ESDL.NaNMissing())\noutdims  = OutDims(polyaxis, miss=ESDL.NaNMissing())So here we don\'t describe the output axis through a type or name, but by passing an actual object. Then we can call the mapCube function:c   = Cube()\ngpp = getCubeData(c,variable = \"gross_primary_productivity\",time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\nter = getCubeData(c,variable = \"terrestrial_ecosystem_respiration\",time=(DateTime(2001),DateTime(2002,12,31)), longitude = (50,51), latitude=(30,31))\n\nmapCube(fit_npoly,(gpp,ter),2,indims = (indims1,indims2), outdims = outdims)Returned is a 3D cube with dimensions coeff x lon * lat."
},

{
    "location": "adding_new.html#Wrapping-mapCube-calls-into-user-friendly-functions-1",
    "page": "Applying custom functions",
    "title": "Wrapping mapCube calls into user-friendly functions",
    "category": "section",
    "text": "When a certain function is is used more often, it makes sense to wrap it into a single function so that the user does not have to deal with the input and output dimension description. For the polynomial regression example one could, for example, define this convenience wrapper and then call it directly, now for a third-order regression:function fitpoly(cube1, cube2, n)\n  polyaxis = CategoricalAxis(\"Coefficients\",[\"Offset\";string.(1:n)])\n\n  indims1  = InDims(\"Time\",    miss=ESDL.NaNMissing())\n  indims2  = InDims(\"Time\",    miss=ESDL.NaNMissing())\n  outdims  = OutDims(polyaxis, miss=ESDL.NaNMissing())\n\n  mapCube(fit_npoly,(cube1,cube2),n,indims = (indims1,indims2), outdims = outdims)\nend\n\nfitpoly(gpp,ter,3)This is exactly the way the built-in functions in Analysis were generated. So in case you want to contribute some functionality that you feel would benefit this package, please open a pull request at https://github.com/esa-esdl/ESDL.jl"
},

{
    "location": "adding_new.html#ESDL.DAT.InDims",
    "page": "Applying custom functions",
    "title": "ESDL.DAT.InDims",
    "category": "type",
    "text": "InDims(axisdesc)\n\nCreates a description of an Input Data Cube for cube operations. Takes a single   or a Vector/Tuple of axes as first argument. Axes can be specified by their   name (String), through an Axis type, or by passing a concrete axis.\n\naxisdesc: List of input axis names\nmiss: Representation of missing values for this input cube, must be a subtype of MissingRepr\ninclude_axes: If set to true the array will be represented as an AxisArray inside the inner function, so that axes values can be accessed\n\n\n\n"
},

{
    "location": "adding_new.html#ESDL.DAT.OutDims",
    "page": "Applying custom functions",
    "title": "ESDL.DAT.OutDims",
    "category": "type",
    "text": "OutDims(axisdesc;...)\n\nCreates a description of an Output Data Cube for cube operations. Takes a single   or a Vector/Tuple of axes as first argument. Axes can be specified by their   name (String), through an Axis type, or by passing a concrete axis.\n\naxisdesc: List of input axis names\nmiss: Representation of missing values for this input cube, must be a subtype of MissingRepr, defaults to DataArrayMissing\ngenOut: function to initialize the values of the output cube given its element type. Defaults to zero\nfinalizeOut: function to finalize the values of an output cube, defaults to identity.\nretCubeType: sepcifies the type of the return cube, can be CubeMem to force in-memory, TempCube to force disk storage, or \"auto\" to let the system decide.\nouttype: force the output type to a specific type, defaults to Any which means that the element type of the first input cube is used\n\n\n\n"
},

{
    "location": "adding_new.html#ESDL.DAT.mapCube",
    "page": "Applying custom functions",
    "title": "ESDL.DAT.mapCube",
    "category": "function",
    "text": "mapCube(fun, cube, addargs...;kwargs)\n\nMap a given function fun over slices of the data cube cube.\n\nKeyword arguments\n\nmax_cache=1e7 maximum size of blocks that are read into memory, defaults to approx 10Mb\nouttype::DataType output data type of the operation\nindims::InDims List of input cube descriptors of type [InDims`](@ref) for each input data cube\noutdims::OutDims List of output cube descriptors of type OutDims for each output cube\nno_ocean should values containing ocean data be omitted, an integer specifying the cube whose input mask is used to determine land-sea points.\ninplace does the function write to an output array inplace or return a single value> defaults to true\nispar boolean to determine if parallelisation should be applied, defaults to true if workers are available.\noutfolder a folder where the output cube is stroed, defaults to the result of ESDLdir()\nkwargs additional keyword arguments passed to the inner function\n\nThe first argument is always the function to be applied, the second is the input cube or a tuple input cubes if needed.\n\n\n\n"
},

{
    "location": "adding_new.html#Reference-documentation-for-mapCube-related-functions-1",
    "page": "Applying custom functions",
    "title": "Reference documentation for mapCube-related functions",
    "category": "section",
    "text": "InDimsOutDimsmapCube"
},

{
    "location": "iotools.html#",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "page",
    "text": ""
},

{
    "location": "iotools.html#ESDL.Cubes.saveCube",
    "page": "Loading and saving results",
    "title": "ESDL.Cubes.saveCube",
    "category": "function",
    "text": "saveCube(c::AbstractCubeData, name::String)\n\nPermanently saves a data cube to disk by either moving the folder out of the tmp directory (for TempCubes) or by storing the data to disk (for CubeMems)\n\n\n\nsaveCube(c::AbstractCubeData, name::String)\n\nPermanently saves a data cube to disk by either moving the folder out of the tmp directory (for TempCubes) or by storing the data to disk (for CubeMems)\n\n\n\nsaveCube(cube,name::String)\n\nSave a TempCube or CubeMem to the folder name in the ESDL working directory.\n\nSee also loadCube, ESDLdir\n\n\n\n"
},

{
    "location": "iotools.html#ESDL.Cubes.TempCubes.loadCube",
    "page": "Loading and saving results",
    "title": "ESDL.Cubes.TempCubes.loadCube",
    "category": "function",
    "text": "loadCube(name::String)\n\nLoads a cube that was previously saved with saveCube. Returns a TempCube object.\n\n\n\n"
},

{
    "location": "iotools.html#ESDL.ESDLTools.@loadOrGenerate",
    "page": "Loading and saving results",
    "title": "ESDL.ESDLTools.@loadOrGenerate",
    "category": "macro",
    "text": "macro loadOrGenerate(x...,expression)\n\nTakes a list of variablename=>\"Storage Name\" pairs. Checks if all datasets can be found on disk and loads them. If not, the datasets will be regenerated by evaluating the given expression.\n\nTo force recalculation, call ESDL.recalculate(true) before evaluating the macro.\n\nExample\n\nThe following lines will check if cubes with the names \"Filled\" and \"Normalized\" exist on disk, load them and assign the variable names cube_filled and cube_norm. If the datasets to not exist on disk, they are generated and saved under the given names.\n\n@loadOrGenerate cube_filled=>\"Filled\" cube_norm=>\"Normalized\" begin\ncube_filled = mapCube(gapFillMSC,d)\ncube_norm   = mapCube(normalize_TS,d)\nend\n\n\n\n\n"
},

{
    "location": "iotools.html#Loading-and-saving-results-1",
    "page": "Loading and saving results",
    "title": "Loading and saving results",
    "category": "section",
    "text": "CurrentModule = ESDL.Cubes.TempCubessaveCubeloadCubeCurrentModule = ESDL.ESDLTools@loadOrGenerate"
},

]}
