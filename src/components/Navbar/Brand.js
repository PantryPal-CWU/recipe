import React from 'react';
import styled from 'styled-components';
import logo from "../images/logo.png";

// es7 way of setting up function 

const Brand = () => {
  // set up the logo and pantrypal name links
  return (
    <>
      <div>
        <a href="/pages/Home.js"><Image src={logo} alt="Company Logo" /></a>
        <Link href="/pages/Home.js"> PantryPal</Link>
      </div>
    </>
  )
}
// export it
export default Brand

// css for the image and link
const Image = styled.img`
    padding-top: 2%;
    height: 50px;
    width:50px
    
  `;
const Link = styled.a`
    color: black;
    margin: auto;
    width: 40%;
    text-transform: uppercase;
    font-weight:bold;
    text-decoration:none;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.4rem;
    
      &:hover{
        color: black;
        text-decoration: none;
      }
      &:visited{
        color: black;
      }
        &:hover{
          color: black;
          text-decoration: none;
        }
  `;