import { Movie } from "../types/Movie";
import { REACT_APP_API_KEY } from "./const.js";
const API_KEY = REACT_APP_API_KEY;
const filterData = (movie: Movie) => {
    return {
        id: movie.id,
        title: movie.title,
        poster_src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        vote_avg: movie.vote_average,
        vote_count: movie.vote_count,
        media_type: movie.media_type,
    };
};

export const getPopularMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results.map((movie: any) => filterData(movie));
};

export const searchForMovies = async (queryString: string) => {
    const query = queryString.replace(" ", "%");
    // const API_KEY = "e8faa77a84ade761a8490c937172ed06";
    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    return data.results.map((movie: any) => filterData(movie));
};
