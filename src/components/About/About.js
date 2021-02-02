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
        
        <div className="title">
          <h1> About Us! </h1>
        </div>

      <div className="break"></div>
      <div className="page"></div>
       <div className="row">
        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        </div>

        <div className="row">
        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        </div>

        <div className="row">
        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>

        <Card className="content">
        <Card.Title className="name"> Lucas </Card.Title>
            <Card.Text className="text"> Here is some informatino about me. I am a person. I do
              things for fun. I like places and things.</Card.Text>
              <Card.Title className="contact"> Contact: Lucas.Keizur@cwu.edu </Card.Title>
        </Card>
        </div>

        <div className="row">
          <Card className="content">
          <Card.Title className="name"> Mission Statement </Card.Title>
            <Card.Text className="text"> We believe in food.</Card.Text>
          </Card>
        </div>


      </div>
    )
  }
}

export default About;

/*
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
*/