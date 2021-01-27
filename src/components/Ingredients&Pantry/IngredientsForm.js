import React from 'react';

//Search Bar function
const SearchBar = ({keyword, setKeyword}) => {
    //Search bar styling
    //could have done it in a .css file but I'm still learning how to do that
    const BarStyling = {width:"20rem",background:"#F2F1F9A", borderborder:"none", padding:"0.5rem"};
    //return the search bar styling and intialize the value to the keyword data variable
    return(
        <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search for an ingredient"}
        //places the the keyword entered in the search bar
        //into the setKeyword variable using the onChange data type
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar