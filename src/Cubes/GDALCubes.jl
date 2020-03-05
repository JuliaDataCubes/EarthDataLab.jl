#This is a work in progress implementation of data cubes based on the disk array interface of ARchGDAL.

function gdalcube(path)
    # Open the data in path as a AG.RasterDataset, which implements the diskarray interface
    data=AG.read(path)
    dataset=AG.RasterDataset(data)
    #Get the geodata of the dataset,
    geo=AG.getgeotransform(dataset.ds)

    # Compute the latitude and longitude ranges of the data
    latr = range(geo[1],length=AG.width(dataset), step=geo[2])
    # This is most likely false, I would have to check which of the entries of geo to use
    # This only works, because my test data was quadratic.
    lonr = range(geo[4],length=AG.height(dataset), step=geo[6])

    # Construct actual Axes from the ranges
    lat = LatAxis(latr)
    lon = LonAxis(lonr)
    # Construct a Band axis, for the third dimension
    # This would need a method to incorporate the bandnames for parsing of the information later on.
    bandax = CategoricalAxis(:Band, 1:AG.nraster(dataset.ds))
    #Construct the ESDLArray from the dataset
    cube=ESDL.Cubes.ESDLArray([lat,lon, bandax], dataset)
end
