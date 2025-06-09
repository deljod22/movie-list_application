import { useEffect, useState } from 'react';
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjIxNWRjYWZkNGVjYzA1OTZjZjU0NmU4NzQ1MjNjMSIsIm5iZiI6MTc0OTQ1OTkxNC4zNzY5OTk5LCJzdWIiOiI2ODQ2YTNjYTc4OWVmNTEwOTMxZWE5YjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ti-UHSARmEP8dmM7X6v9HJZCZTXVYSmXc9UNniKoSs8`,
    },
});

export const useMovies = (query) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = query
                    ? await API.get(`/search/movie?query=${query}`)
                    : await API.get('/movie/popular');
                setMovies(res.data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [query]);

    return { movies, loading, error };
};