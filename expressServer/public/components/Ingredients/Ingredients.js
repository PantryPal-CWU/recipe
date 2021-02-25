import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
//import SearchBar from './SearchForm';

const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const updateSearchTerm = async (searchTerm) =>{
       setSearchTerm(searchTerm); 
    }

    return(
            <div style={{textAlign: 'center', paddingBottom: '30px'}}>
                <input
                    type='text'
                    value={searchTerm}
                    onChange= {updateSearchTerm}
                    placeholder='Search for a recipe'
                />
                <br></br>
                <h3>Search Results: </h3>
            </div>
    );
}

export default SearchPage;