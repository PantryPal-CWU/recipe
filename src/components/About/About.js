/*
File: About.js
?: Design for elements in About/Contact. 
*/
import './About.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';

class About extends React.Component {

  render() {

    return (
      <div className = "main">
        
      <div className="page">
        <div className="title">
          About Us
        </div>

      <div className="row">
          <Card className="content">
          <Card.Title className="name"> Mission Statement </Card.Title>
            <Card.Text className="text"> We believe in simplifying the cooking process. 
             Our goal, as a team, is to create a product which furthers the range of the home cook. 
              We strive to make the pesky decision of what to make easier by suggesting recipe recommendations
               based on your preferences. Our hope is that PantryPal can have a permanent place in your kitchen. 
            </Card.Text>
          </Card>
      </div>

      <div className="row">
        <Card className="content"><h1 className ="name">The People Who Made it Possible</h1></Card>
      </div>

       <div className="row">
        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
            <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Natalia </Card.Title>
            <Card.Text className="text">I'm a senior at Central Washington University. I am majoring in 
            Computer Science and minoring in Math. My role as a developer was 
            creating the web scraper that retrieved data from recipe websites and stored 
             it in a database to be searched from.</Card.Text>
            <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        </div>

        <div className="row">
        <Card className="content">
        <Card.Title className="name"> Jordan </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
            <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Kirsten </Card.Title>
            <Card.Text className="text"> I am a Senior at CWU  and was responsible for React, 
            Bootstrap, and styling of the site. I have a major in CS and my minor in Maths. I am 
            graduating winter 2022. I have really enjoyed learning React for this project and seeing 
            how different it is to Angular2.0.</Card.Text>
            <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        </div>

        <div className="row">
        <Card className="content">
        <Card.Title className="name"> Alek </Card.Title>
            <Card.Text className="text"> Yow! I'm a junior majoring Computer Science and I have completed my minor in Math. 
            I love solving problems. It comes with many mistakes which makes your craft better.
            (Also... I'm a tetris professional.)</Card.Text>
            <Card.Title className="contact"> Contact: Alek.Michael@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Nate </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
            <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        
        </div>
        <div style={{padding: 20}}> </div>
        </div>
      </div>
             
    )
  }
}

export default About;