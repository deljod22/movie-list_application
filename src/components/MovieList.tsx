import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './MovieCard';


const MovieList = ({ query }) => {
    const { movies} = useMovies(query);

    return (
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.id} className="col-md-4 mb-4">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;