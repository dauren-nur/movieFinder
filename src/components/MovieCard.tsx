import { FaExternalLinkAlt } from "react-icons/fa";
import { MovieProps } from "../types/MovieProps";

const MovieCard: React.FC<{
    movie: MovieProps;
    favouriteComponent: React.FC;
    handleFavouritesClick: (movie: MovieProps) => void;
}> = ({
    movie,
    favouriteComponent: FavouriteComponent,
    handleFavouritesClick,
}) => {
    const type = movie.media_type == "tv" ? "tv" : "movie";
    return (
        <div className="max-w-12em flex justify-start transition duration-300 ease-in-out m-4 relative hover:transform hover:scale-110">
            <img
                src={movie.poster_src}
                alt={`poster for the movie ${movie.title}`}
                style={{
                    maxWidth: "12em",
                }}
            />
            <div
                className="max-w-12em flex justify-center items-center absolute bg-black bg-opacity-80 
            w-full transition duration-500 ease-in-out opacity-0 bottom-0 text-white text-base pt-5 hover:opacity-100"
            >
                <div onClick={() => handleFavouritesClick(movie)}>
                    <FavouriteComponent />
                </div>
                <a
                    href={`https://www.themoviedb.org/${type}/${movie.id}`}
                    target="blank"
                >
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                </a>
            </div>
        </div>
    );
};
MovieCard.defaultProps = {
    favouriteComponent: () => null,
};

export default MovieCard;
