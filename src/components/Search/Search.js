import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import './search-styling.css';
//import SearchBar from './SearchForm';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

//   const editSearchTerm = (e) => {
      
//   }

  return(
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
          </div>
          <div className="results">
            Search Results: {searchTerm} 
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;