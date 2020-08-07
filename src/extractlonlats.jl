function toPointAxis(aout,ain,loninds,latinds)
  iout = 1
  for (ilon,ilat) in zip(loninds,latinds)
    aout[iout]=ain[ilon,ilat]
    iout+=1
  end
end

"""
    extractLonLats(c::AbstractCubeData,pl::Matrix)

Extracts a list of longitude/latitude coordinates from a data cube. The coordinates
are specified through the matrix `pl` where `size(pl)==(N,2)` and N is the number
of extracted coordinates. Returns a data cube without `LonAxis` and `LatAxis` but with a
`SpatialPointAxis` containing the input locations.
"""
function extractLonLats(c::AbstractCubeData,pl::Matrix;kwargs...)
  size(pl,2)==2 || error("Coordinate list must have exactly 2 columns")
  axlist=caxes(c)
  ilon=findAxis("Lon",axlist)
  ilat=findAxis("Lat",axlist)
  ilon>0 || error("Input cube must contain a LonAxis")
  ilat>0 || error("input cube must contain a LatAxis")
  lonax=axlist[ilon]
  latax=axlist[ilat]
  pointax = CategoricalAxis("SpatialPoint", [(pl[i,1],pl[i,2]) for i in 1:size(pl,1)])
  loninds = map(ll->axVal2Index(lonax,ll[1]),pointax.values)
  latinds = map(ll->axVal2Index(latax,ll[2]),pointax.values)
  incubes=InDims("Lon","Lat")
  outcubes=OutDims(pointax)
  y=mapCube(toPointAxis,c,loninds,latinds;indims=incubes,outdims=outcubes,max_cache=1e8,kwargs...)
end
