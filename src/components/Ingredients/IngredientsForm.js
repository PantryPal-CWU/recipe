import React from 'react';

//Search Bar component
//The props (variables) are keyword and setKeyword.
//keyword is assigned to the value of the input while
//setKeyword is assigned as a function to handle
//the change event of the input
const SearchBar = ({keyword, setKeyword}) => {
    
    //this is the search bar styling
    //later I will create a .css file for all of the styling
    //but for know is will be assigned to the BarStyling component
    const BarStyling = {width:"20rem",background:"#F2F1F9A", borderborder:"none", padding:"0.5rem"};
    
    //The return will create the search bar
    return(
        
        <input
        style={BarStyling}
        value={keyword}
        placeholder={"Search for an ingredient"}
        //this is intiate the change
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar