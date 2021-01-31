import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



export default function App() {
    return (
      <>
        <Headers> 
            <h1>
              Welcome to PantryPal
            </h1>
        </Headers>
        <Container>
          <Row>
            <Col>
              <Image src=""/>
              <span>Store Ingredients</span>
            </Col>
            <Col>
              <Image src=""/>
              <span>Get Recipes</span>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
 



const Headers = styled.header`
    font-size: 45px;
    text-align: center;
    & h1 {
        padding-top: 75px;
    }
`;