import {
    getAllMovies,
    MovieProps,
    MoviesState,
} from "@/store/modules/movieslice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Movie() {
    const movies = useSelector(getAllMovies);
    console.log(movies.map((a: MovieProps) => a.poster_path));
    return (
        <>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <p>{movie.title}</p>
                        <div className="w-60 h-60 relative">
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt="poster"
                                fill
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
