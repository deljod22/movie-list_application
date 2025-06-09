import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjIxNWRjYWZkNGVjYzA1OTZjZjU0NmU4NzQ1MjNjMSIsIm5iZiI6MTc0OTQ1OTkxNC4zNzY5OTk5LCJzdWIiOiI2ODQ2YTNjYTc4OWVmNTEwOTMxZWE5YjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ti-UHSARmEP8dmM7X6v9HJZCZTXVYSmXc9UNniKoSs8`,
    },
});

export const getPopularMovies = async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
};
