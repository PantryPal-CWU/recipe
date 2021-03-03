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
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [curPage, setCurPage] = useState();

  //onSubmit we search the API
  const submitHandler = () => {
    if(searchTerm.length === 0) return;

    setCurPage(1);
    setSearchedTerm(searchTerm);
    setSearching(true);
  }

  const prevPage = () => {
    setCurPage(curPage - 1);
    setSearching(true);
  }

  const nextPage = () => {
    setCurPage(curPage + 1);
    setSearching(true);
  }

  //If we are not currently searching, display matching results (if any)
  return(
    (searching) ? <SearchAPI searchTerm={searchedTerm} curPage={curPage} setResults={setResults} setSearching={setSearching} /> :
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
          {(searchedTerm.length !== 0) ? 
          <>
            {(curPage !== 1) ? 
              <button onClick={prevPage}>Previous</button>
            : <></>}
            <button onClick={nextPage}>Next</button>
          </>
          :
          <></>}
        </div>
      </div>
    </>
  );
}

export default SearchPage;