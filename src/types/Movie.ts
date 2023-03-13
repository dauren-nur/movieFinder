export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<Number>;
    id: Number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: Number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: Number;
    vote_count: Number;
    media_type: string;
}
