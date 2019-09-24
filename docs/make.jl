using ImageMagick, Documenter, ESDL, ESDLPlots, Cairo


newcubedir = mktempdir()
ESDLdir(newcubedir)
# Download Cube subset
c = S3Cube()
csa = c[
  region = "South America",
  var = ["gross", "net_ecosystem", "air_temperature_2m", "terrestrial_ecosystem", "soil_moisture"],
  time = 2003:2006
]
saveCube(csa,"southamericacube", chunksize=(90,90,92,1))
ENV["ESDL_CUBEDIR"] = joinpath(newcubedir,"southamericacube")

makedocs(
    modules = [ESDL, ESDLPlots],
    clean   = false,
    format   = Documenter.HTML(),
    sitename = "ESDL.jl",
    authors = "Fabian Gans",
    pages    = Any[ # Compat: `Any` for 0.4 compat
        "Home" => "index.md",
        "Manual" => Any[
            "cube_access.md",
            "analysis.md",
            "plotting.md",
            "iotools.md"
        ],
        "Other functions" => "./lib/misc.md"
        ]
)

deploydocs(
    #deps   = Deps.pip("mkdocs", "python-markdown-math"),
    repo   = "github.com/esa-esdl/ESDL.jl.git",
)
