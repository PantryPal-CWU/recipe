import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/cooking-5880136_1920.jpg";
import img2 from "../images/food-2068217_1920.jpg";
import img3 from "../images/mediterranean-cuisine-2378758_1920.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';



class Home extends React.Component {
  render() {
    return (
      <Container className="flex-box" >
        <div style={{padding: 50}}>
         
        </div>
        <Carousel className="d-block w-100px">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h1> Welcome to PantryPal</h1>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Home;


