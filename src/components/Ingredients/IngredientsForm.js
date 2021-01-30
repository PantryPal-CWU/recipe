import React from 'react';
import './ingredients.css';

//Search Bar component

const SearchBar = (/*{keyword, setKeyword}*/) => {

return(

    <>
    <form action="/" method="get">
        <label htmlFor="page-search">
            <span className="search_bar"></span>
            <h1>Add Your Ingredients Here</h1>
        </label>
        <input
            type="text"
            //key="random1"
            //value={keyword}
            id="page-search"
            placeholder="Add Your Ingredients"
            //onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Add</button>        
    </form>
    </>
);
}

export default SearchBar