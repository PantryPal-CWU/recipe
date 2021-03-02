/*
File: Search.js
?: Search page for recipes. Uses recipepuppy API to find recipes based off ingredients.
Shows the title of the recipe and a link to go to the recipe.
*/
import React, { useState, useEffect } from 'react';
import SearchAPI from './SearchAPI';
import ResultItem from './ResultItem';

import './search-styling.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);

  //onSubmit we search the API
  const submitHandler = () => {
    if(searchTerm.length === 0) return;

    setSearching(true);
  }

  //If we are not currently searching, display matching results (if any)
  return(
    (searching) ? <SearchAPI searchTerm={searchTerm} setResults={setResults} setSearching={setSearching} /> :
    <>
      <div className="main">
        <div className="search_page">
          <div className="search_title">
            Find a Recipe
          </div>
          <div className="search_bar_wrapper">
            <input 
              className="search_bar"
              type='text' 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder = 'Search for recipe' 
            />
            <button id="submitButtonSearch" onClick={submitHandler}>Submit</button>
          </div>
          <div className="results" >
            Search Results: {results.map(ele => <ResultItem key={ele["href"]} item={ele["title"]} hrefLink={ele["href"]} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;