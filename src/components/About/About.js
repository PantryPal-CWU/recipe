/*
File: About.js
?: Design for elements in About/Contact. 
*/
import './About.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class About extends React.Component {

  render() {

    return (
      <div>
        
        <Card className="content">
          <Card.Header className="title"> About Us </Card.Header>
          <Card.Body>

            <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

              <Card.Title className="name"> Kirsten </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

              <Card.Title className="name"> Natalia </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

              <Card.Title className="name"> Jordan </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

              <Card.Title className="name"> Nate </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

              <Card.Title className="name"> Alek </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>

          </Card.Body>

        </Card>


      </div>
    )
  }
}

export default About;

/*
        <div className="content">
            <h1 > Lucas </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
        </div>

          <div className="content">
            <h1> Kirsten </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
          </div>

          <div className="content">
            <h1 > Nate </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
          </div>

          <div className="content">
            <h1 > Alek </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
          </div>

          <div className="content">
            <h1 > Natalia </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
          </div>

          <div className="content">
            <h1 > Jordan </h1>
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff
            </p>
          </div>
*/