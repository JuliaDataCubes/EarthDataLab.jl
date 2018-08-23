module ReSample
importall ..Cubes
importall ..DAT
export spatialinterp
import Interpolations: BSpline, scale,extrapolate, interpolate, Constant, Linear, Quadratic,
  Cubic, OnGrid, Flat, Line,Free, Periodic, Reflect
function fremap(xout,xin,oldlons,oldlats,newlons,newlats;order=Linear(),bc = Flat())
  #interp = LinearInterpolation((oldlons,oldlats),xin);
  interp = extrapolate(scale(interpolate(xin, BSpline(order), OnGrid()), oldlons,oldlats), bc)
  for (ilat,lat) in enumerate(newlats)
    for (ilon,lon) in enumerate(newlons)
      xout[ilon,ilat]=interp(lon,lat)
    end
  end
end

"""
  spatialinterp(c::AbstractCubeData,newlons::Range,newlats::Range;order=Linear(),bc = Flat())
"""
function spatialinterp(c::AbstractCubeData,newlons::Range,newlats::Range;order=Linear(),bc = Flat())
  oldlons = getAxis("Lon",c).values
  oldlats = getAxis("Lat",c).values
  indims=InDims("Lon","Lat",miss=NaNMissing())
  outdims=OutDims(LonAxis(newlons),LatAxis(newlats),miss=NaNMissing())
  if step(oldlats)<0
    oldlats = reverse(oldlats)
    newlats = reverse(newlats)
  end
  mapCube(fremap,c,oldlons,oldlats,newlons,newlats,indims=indims,outdims=outdims,order=order,bc=bc)
end
spatialinterp(c::AbstractCubeData,newlons::CubeAxis,newlats::CubeAxis;kwargs...)=
  spatialinterp(c,newlons.values,newlats.values)
spatialinterp(c::AbstractCubeData,target_cube::AbstractCubeData)=
  spatialinterp(c,getAxis("Lon",))

ym2ind(y,m,y1,m1)=12*(y-y1)+m-m1+1

function contribtomonth(t1,t2,yref,mref)
  y1,y2 = year(t1),year(t2)
  @assert y1==y2
  m1,m2 = month(t1),month(t2)
  if m1 == m2
    return Dict(ym2ind(y1,m1,yref,mref)=>Dates.value(Day(t2-t1))+1)
  else
    return Dict(ym2ind(y1,m1,yref,mref)=>count(i->month(i)==m1,t1:t2),ym2ind(y1,m2,yref,mref)=>count(i->month(i)==m2,t1:t2))
  end
end

function domonmean(xout,xin,xmul)
  pnan = !isnan.(xin)
  sweights = xmul*pnan
  xin[.!pnan]=0.0
  xout[:] = (xmul*xin)./sweights
end

function monmean(dc::AbstractCubeData)
  tax = ESDL.getAxis("Time",dc)
  timvals = tax.values
  years = unique(year.(timvals))
  if length(years)>1
    firstinsecond=findfirst(i->year(i)>years[1],timvals)
  end

  centeroffs = Day(dayofyear(timvals[firstinsecond])-1)

  st = median(Dates.value.(Day.(diff(timvals))))

  dfirst,dlast = first(timvals),last(timvals)
  m1,y1 = month(dfirst),year(dfirst)
  mend,yend = month(dlast),year(dlast)

  newax = TimeAxis(Date(y1,m1):Month(1):Date(yend,mend))

  allcontribs = map(i->contribtomonth(i[1]-centeroffs,i[2]-Day(1)-centeroffs,y1,m1),partition(timvals,2,1))

  lastel = last(timvals)-centeroffs-Day(1)+Day(st)

  if year(lastel)>year(last(timvals))
    lastel=Date(year(lastel),1,1)-Day(1)
  end
  push!(allcontribs,contribtomonth(last(timvals)-centeroffs,lastel,y1,m1))
  allcontribsm = spzeros(maximum(i->maximum(keys(i)),allcontribs),length(allcontribs))
  for (id,d) in enumerate(allcontribs)
    for (k,v) in d
      allcontribsm[k,id]=v
    end
  end
  allcontribsm
  indims=InDims("Time",miss=ESDL.NaNMissing())
  outdims=OutDims(newax,miss=ESDL.NaNMissing())
  mapCube(domonmean,dc,allcontribsm,indims=indims,outdims=outdims)
end
end #module
