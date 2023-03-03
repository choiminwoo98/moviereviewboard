import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import { useDispatch, useSelector } from "react-redux";
import * as counterActions from "../store/modules/counter";
import { RootState } from "../store";
import { addMovies, getAllMovies } from "@/store/modules/movieslice";
import Movie from "@/components/movie";
import { decrement, increment } from "../store/modules/counter";
import { MovieProps } from "@/store/modules/movieslice";
interface HomeProps {
    popularMovie: MovieProps[];
    topRatedMovie: MovieProps[];
}
const Home: NextPage<HomeProps> = ({ popularMovie, topRatedMovie }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addMovies(popularMovie));
    }, [dispatch, popularMovie]);

    return (
        <Layout title={"홈"} seoTitle={"홈"}>
            <Movie />
        </Layout>
    );
};

export async function getServerSideProps() {
    const [popularMovieRes, topRatedMovieRes] = await Promise.all([
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko&page=1`
        ),
        fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=ko&page=1`
        ),
    ]);

    const [popularMovie, topRatedMovie] = await Promise.all([
        popularMovieRes.json(),
        topRatedMovieRes.json(),
    ]);

    return {
        props: {
            popularMovie: popularMovie.results,
            topRatedMovie: topRatedMovie.results,
        },
    };
}

export default Home;
