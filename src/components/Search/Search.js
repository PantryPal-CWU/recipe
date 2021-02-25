import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
//import SearchBar from './SearchForm';

class SearchPage extends Component{

    state = {
        searchTerm: ''
    }

    editSearchTerm = (e) =>{
        this.state({
            searchTerm: e.target.value
        });
    }

    render(){
        return(
            <div style={{textAlign: 'center', paddingBottom: '30px'}}>
                <input
                    type='text'
                    value={this.state.searchTerm}
                    onChange={this.editSearchTeam}
                    placeholder='Search for a recipe'
                />
                <br></br>
                <h3>Search Results: </h3>
            </div>
        );
    }
}

export default SearchPage;