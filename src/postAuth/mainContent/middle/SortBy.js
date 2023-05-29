import React from 'react';

function SortBy() {
    return (
        <section id='sort-by'>
            <label id='search-sort' htmlFor="">Sort by:</label>
            <section id=''>
                <div><
                    label htmlFor="">Song</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">A -> Z</option>
                        <option value="alpha-song-r">Z -> A</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Artist</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">A -> Z</option>
                        <option value="alpha-song-r">Z -> A</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Album</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">A -> Z</option>
                        <option value="alpha-song-r">Z -> A</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Genre</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">A -> Z</option>
                        <option value="alpha-song-r">Z -> A</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Runtime</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">L -> S</option>
                        <option value="alpha-song-r">S -> L</option>
                    </select>
                </div>
            </section>
            <button id='re-search'>Search</button>
        </section>
    )
}

export default SortBy;