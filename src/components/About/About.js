/*
File: About.js
?: Design for elements in About/Contact. 
*/
import './About.css';
//import GlobalStyle from '../styles/Global';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class About extends React.Component {

  render() {

    return (
      <div>

        <div className="title" >
          <h1> About Us! </h1>
        </div>

        <div className="content">
            <p1 > Lucas </p1>
        </div>

          <div className="content">
            <p1> Kirsten </p1>
          </div>

          <div className="content">
            <p1 > Nate </p1>
          </div>

          <div className="content">
            <p1 > Alek </p1>
          </div>

          <div className="content">
            <p1 > Natalia </p1>
          </div>

          <div className="content">
            <p1 > Jordan </p1>
          </div>

      </div>
    )
  }
}

export default About;
