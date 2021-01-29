import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
    return (
        <>
            <Headers>
              <h1>
                   Welcome to PantryPal
              </h1>
              
            </Headers>
            <CardGroup>            
                <Card>
                    <Card.Body>
                        <Card.Text>
                            Store Your Ingredients
                        </Card.Text>
                    </Card.Body>
               </Card>
               <Card> 
                    <Card.Body>
                        <Card.Text>
                            Get Recipe
                        </Card.Text>
                    </Card.Body> 
                </Card>
            </CardGroup>
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
`;