import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="card h-100">
            {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                    <small className="text-muted">Release: {movie.release_date}</small>
                </p>
            </div>
        </div>
    );
};

export default MovieCard;