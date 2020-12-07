using Markdown
struct YAXVarInfo
  project::String
  longname::String
  units::String
  url::String
  comment::String
  reference::String
end
Base.isless(a::YAXVarInfo, b::YAXVarInfo) = isless(string(a.project, a.longname),string(b.project, b.longname))

import Base.show
function show(io::IO,::MIME"text/markdown",v::YAXVarInfo)
    un=v.units
    url=v.url
    re=v.reference
    pr = v.project
    ln = v.longname
    co = v.comment
    mdt=md"""
### $ln
*$(co)*

* **Project** $(pr)
* **units** $(un)
* **Link** $(url)
* **Reference** $(re)
"""
    mdt[3].items[1][1].content[3]=[" $pr"]
    mdt[3].items[2][1].content[3]=[" $un"]
    mdt[3].items[3][1].content[3]=[" $url"]
    mdt[3].items[4][1].content[3]=[" $re"]
    show(io,MIME"text/markdown"(),mdt)
end
show(io::IO,::MIME"text/markdown",v::Vector{YAXVarInfo})=foreach(x->show(io,MIME"text/markdown"(),x),v)

"""
    cubeinfo(cube)

Shows the metadata and citation information on variables contained in a cube.
"""
function cubeinfo(ds::YAXArray, variable="unknown")
    p = ds.properties
    vi=YAXVarInfo(
      get(p,"project_name", "unknown"),
      get(p,"long_name",variable),
      get(p,"units","unknown"),
      get(p,"url","no link"),
      get(p,"comment",variable),
      get(p,"references","no reference")
    )
end

export cubeinfo
