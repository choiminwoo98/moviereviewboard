import {
    createAsyncThunk,
    createSlice,
    current,
    PayloadAction,
} from "@reduxjs/toolkit";

export interface MovieProps {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genre_ids: genre[];
}
interface genre {
    id: number;
}
export interface MoviesState {
    movies: MovieProps[];
}

const initialState: MoviesState = { movies: [] };

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action: PayloadAction<MovieProps[]>) => {
            state.movies = action.payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: {
    movieslice: MoviesState;
    movies: MovieProps[];
}) => state.movieslice.movies;
export default movieSlice.reducer;
