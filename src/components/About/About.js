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

      </div>
    )
  }
}

export default About;
