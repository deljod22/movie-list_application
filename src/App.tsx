import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css'
import MovieListManager from "./components/MovieListManager.tsx";

function App() {
    const [query, setQuery] = React.useState("");

    return (
        <div className="container">
            <HeaderComponent/>
            <SearchBar setQuery={setQuery} />
            <MovieList query={query} />
            <MovieListManager/>
            <FooterComponent/>
        </div>
    );
}

export default App;

