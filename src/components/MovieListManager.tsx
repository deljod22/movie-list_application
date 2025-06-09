import React, { useState } from 'react';

const MovieListManager = () => {
    const [lists, setLists] = useState({});
    const [newListName, setNewListName] = useState('');
    const [activeList, setActiveList] = useState('');
    const [movieTitle, setMovieTitle] = useState('');

    const createList = () => {
        if (!newListName.trim() || lists[newListName]) return;
        setLists({ ...lists, [newListName]: [] });
        setNewListName('');
        setActiveList(newListName);
    };

    const addMovie = () => {
        if (!movieTitle.trim() || !activeList) return;
        const updatedList = [...lists[activeList], { id: Date.now(), title: movieTitle }];
        setLists({ ...lists, [activeList]: updatedList });
        setMovieTitle('');
    };

    const removeMovie = (id) => {
        const updatedList = lists[activeList].filter((movie) => movie.id !== id);
        setLists({ ...lists, [activeList]: updatedList });
    };

    return (
        <div className="mt-4">
            <h3>🎯 My Custom Movie Lists</h3>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New list name..."
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={createList}>Create List</button>
            </div>

            {Object.keys(lists).length > 0 && (
                <div className="mb-3">
                    <label className="form-label">Select List:</label>
                    <select
                        className="form-select"
                        value={activeList}
                        onChange={(e) => setActiveList(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        {Object.keys(lists).map((listName) => (
                            <option key={listName} value={listName}>{listName}</option>
                        ))}
                    </select>
                </div>
            )}

            {activeList && (
                <>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter movie title..."
                            value={movieTitle}
                            onChange={(e) => setMovieTitle(e.target.value)}
                        />
                        <button className="btn btn-success" onClick={addMovie}>Add Movie</button>
                    </div>

                    <ul className="list-group">
                        {lists[activeList].map((movie) => (
                            <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {movie.title}
                                <button className="btn btn-sm btn-danger" onClick={() => removeMovie(movie.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default MovieListManager;