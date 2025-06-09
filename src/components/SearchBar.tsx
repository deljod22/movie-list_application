import React from 'react';

const SearchBar = ({ setQuery }) => {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
    };

    return (
        <form onSubmit={handleSubmit} className="input-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Search movies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
        </form>
    );
};

export default SearchBar;