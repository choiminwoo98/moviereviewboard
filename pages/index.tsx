import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
interface genre {
    id: number;
}
interface MovieProps {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genre_ids: genre[];
}
interface HomeProps {
    popularMovie: MovieProps[];
    topRatedMovie: MovieProps[];
}
const Home: NextPage<HomeProps> = ({ popularMovie, topRatedMovie }) => {
    console.log(popularMovie);
    return (
        <Layout title={"홈"} seoTitle={"홈"}>
            <>
                {popularMovie.map((movie) => {
                    return (
                        <>
                            <div key={movie.id} className="flex justify-center">
                                <h1 className="">{movie.title}</h1>
                                <div className="w-60 h-60">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        alt={movie.poster_path}
                                    />
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
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
