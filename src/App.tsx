import React from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
    const [query, setQuery] = React.useState("");

    return (
        <div className="container">
            <SearchBar setQuery={setQuery} />
            <MovieList query={query} />
        </div>
    );
}

export default App;

