import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <>
            <Headers>
              <h1>
                   Welcome to PantryPal
              </h1>
               <h2>
                   Store Your Ingredients: Get Recipes
               </h2>
            </Headers>
        </>
    )
}

export default Home;

const Headers = styled.header`
    font-size: 45px;
    text-align: center;
    & h1 {
        padding-top: 75px;

    }
    & h2 {
        padding-top: 25px;
    }
`;