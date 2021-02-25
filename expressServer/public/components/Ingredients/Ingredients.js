import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
//import SearchBar from './SearchForm';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
  //   const editSearchTerm = (e) => {
        
  //   }
  
    return(
        <div style={{textAlign: 'center', paddingBottom: '40px', marginTop: '60px'}}>
            <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder = 'Search for recipe' />
            <br></br>
            <h3>Search Results: {searchTerm} </h3>
        </div>
    );
  }
  
  export default SearchPage;