import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import SearchBar from './SearchForm';



const SearchPage = () => {
  state = {
      searchTerm = ''
  }

  editSearchTerm = (e) =>{
      this.state({searchTerm: e.target.value});
  }

  return(
      <div style={{textAlign: 'center', paddingBottom: '40px'}}>
          <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder = 'Search for recipe'/>
          <br></br>
          <h3>Search Results: </h3>
      </div>
  );
}

export default SearchPage;