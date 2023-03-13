import { useEffect, useState } from "react";
import { getPopularMovies, searchForMovies } from "./api/getMovies";
import AddFavourites from "./components/AddFavourites";
import MovieListHeading from "./components/MovieListHeading";
import MovieRow from "./components/MovieRow";
import RemoveFavourites from "./components/RemoveFavourites";
import SearchBox from "./components/SearchBox";
import { MovieProps } from "./types/MovieProps";
function App() {
    const [movies, setMovies] = useState<Array<MovieProps>>([]);
    const [queryString, setQueryString] = useState("");
    const [favourites, setFavourites] = useState<Array<MovieProps>>([]);

    const addFavouriteMovie = (movie: MovieProps) => {
        if (!favourites.includes(movie)) {
            const newFavouriteList = [...favourites, movie];
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
        }
    };
    const removeFavourites = (movie: MovieProps) => {
        const newFavouriteList = [...favourites].filter(
            (item) => item.id != movie.id
        );
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };
    useEffect(() => {
        async function getData() {
            const data = await getPopularMovies();
            setMovies(data);
        }
        getData();
    }, []);
    useEffect(() => {
        async function searchMovie(queryString: string) {
            if (queryString != "") {
                setMovies([]);
                const data = await searchForMovies(queryString);
                setMovies(data);
            }
        }
        searchMovie(queryString);
    }, [queryString]);
    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem("react-movie-app-favourites") || "[]"
        );

        setFavourites(movieFavourites);
    }, []);
    const saveToLocalStorage = (items: Array<MovieProps>) => {
        localStorage.setItem(
            "react-movie-app-favourites",
            JSON.stringify(items)
        );
    };
    return (
        <div className="bg-gray-900 text-white h-screen">
            <div>
                <MovieListHeading props={{ heading: "FlixFinder" }} />
                <SearchBox
                    searchValue={queryString}
                    setSearchValue={setQueryString}
                />
            </div>
            {/* {loading ? <EmptyMovieCard /> : ""} */}
            {movies.length != 0 ? (
                <MovieRow
                    movies={movies}
                    favouriteComponent={AddFavourites}
                    handleFavouritesClick={addFavouriteMovie}
                />
            ) : (
                "No movies found"
            )}
            <div>
                <MovieListHeading props={{ heading: "Favourites" }} />
            </div>
            {favourites.length != 0 ? (
                <MovieRow
                    movies={favourites}
                    favouriteComponent={RemoveFavourites}
                    handleFavouritesClick={removeFavourites}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
