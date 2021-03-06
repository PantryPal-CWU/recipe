/*
File: Search.js
?: Search page for recipes. Uses recipepuppy API to find recipes based off ingredients.
Shows the title of the recipe and a link to go to the recipe.
*/
import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import SearchAPI from './SearchAPI';
import ResultItem from './ResultItem';

import './search-styling.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [curPage, setCurPage] = useState();

  //Check if user presses enter in search bar to search
  const checkEnter = (e) => {
    if(e["code"] == "Enter") submitHandler();
  }

  //onSubmit we search the API
  const submitHandler = () => {
    if(searchTerm.length === 0) return;

    setCurPage(1);
    setSearchedTerm(searchTerm);
    setSearching(true);
  }

  //Change pages and call search
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
              onKeyDown={checkEnter}
            />
            <button id="submitButtonSearch" onClick={submitHandler}>Search</button>
          </div>
          <div className="results" >
            {(searchedTerm.length !== 0) ? 
            <div className="nextWrap">
              {(curPage !== 1) ? 
                <button onClick={prevPage} className="next">Previous</button>
              : <></>}
              <button onClick={nextPage} className="next" >Next</button>
            </div>
            :
            <></>}
            <div className="resultLabel">Search Results:</div> {results.map(ele => <ResultItem key={ele["href"]} item={ele["title"]} hrefLink={ele["href"]} />)}
          
          {(searchedTerm.length !== 0) ? 
          <div className="nextWrap">
            {(curPage !== 1) ? 
              <button onClick={prevPage} className="next">Previous</button>
            : <></>}
            <button onClick={nextPage} className="next" >Next</button>
          </div>
          : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;