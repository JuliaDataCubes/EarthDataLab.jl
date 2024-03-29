using Documenter, EarthDataLab

makedocs(
    modules  = [EarthDataLab],
    clean    = true,
    doctest  = false,
    format   = Documenter.HTML(),
    sitename = "EarthDataLab.jl",
    authors  = "Fabian Gans",
    pages    = [ 
        "Home" => "index.md",
        "Examples" => Any[
            "Time Mean" => "examples/time_mean.md",
            "Distributed Computations" => "examples/distributed.md",
        ],
        "API Documentation" => Any[
            "Index" => "API/api_index.md",
            "Accessing the Data Cube" => "API/cube_access.md",
            "Analysis" => "API/analysis.md",
            "Loading and Saving Results" => "API/iotools.md"
        ],
        "Other functions" => "lib/misc.md"
        ]
)

deploydocs(
    repo   = "github.com/JuliaDataCubes/EarthDataLab.jl.git",
    push_preview = true
)
