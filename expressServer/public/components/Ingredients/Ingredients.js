import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
//import SearchBar from './SearchForm';
const unirest = require('unirest');
const API_KEY = "b5d4e74876msh2a858525a9d8cb9p16e416jsn956d33b8866a";
let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search" + "?q=";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    return(
        <div style={{textAlign: 'center', paddingBottom: '40px', marginTop: '60px'}}>
            <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder = 'Search for recipe' />
            <br></br>
            <h3>Search Results: {searchTerm} </h3>
        </div>
    );
  }
  
  export default SearchPage;