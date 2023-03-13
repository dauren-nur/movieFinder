import React from "react";
import { MovieProps } from "../types/MovieProps";
import MovieCard from "./MovieCard";

const MovieRow: React.FC<{
    movies: Array<MovieProps>;
    favouriteComponent: React.FC;
    handleFavouritesClick: (movie: MovieProps) => void;
}> = ({ movies, favouriteComponent, handleFavouritesClick }) => {
    return (
        <div className=" movie-row flex flex-row gap-8 max-w-full overflow-x-auto pt-6 scrollbar-hide">
            {movies.map((movie, index) => (
                <MovieCard
                    movie={movie}
                    key={index}
                    favouriteComponent={favouriteComponent}
                    handleFavouritesClick={handleFavouritesClick}
                />
            ))}
        </div>
    );
};
MovieRow.defaultProps = {
    favouriteComponent: () => null,
};
export default MovieRow;
