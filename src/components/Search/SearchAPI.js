/*
File: SearchAPI.js
?: Searches the recipepuppy API for recipes that match the searchTerm.
*/
import React, { useEffect } from 'react'
const axios = require('axios').default;

export default function SearchAPI({ searchTerm, curPage, setResults, setSearching }) {
    //On mount, search the API for the recipe and the set searching to false. 
    //Uses axios (basically fetch but easy to set up CORS)
    useEffect(() => {
        const fetchResults = async () => {
            const formattedSearch = searchTerm.replace(" ", ",");
            
            
            await axios.get('/api/?i=' + formattedSearch + '&p=' + curPage, { "Access-Control-Allow-Origin": "*" })
                .then(res => {
                    let found = [];
                    for(let i in res["data"]["results"]) {
                        //Titles with quotes break JSON in the SQL, so just ignore them
                        //Some titles in recipepuppy had weird text like &amp and such, so just ignore anything with & as well
                        if(!res["data"]["results"][i]["title"].includes('"') 
                        && !res["data"]["results"][i]["title"].includes("'") 
                        && !res["data"]["results"][i]["title"].includes('&')) {
                            found = [...found, res["data"]["results"][i]];
                        }
                        
                    }
            
                    setResults(found);
                    
                });

        };

        fetchResults();
        setSearching(false);
    }, []);

    return <></>;
    
}
