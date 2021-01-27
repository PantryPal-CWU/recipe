import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9A", borderborder:"none", padding:"0.5rem"};
    return(
        <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search for an ingredient"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar