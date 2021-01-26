import React from 'react';
import styled from 'styled-components';
import logo from "../images/logo.png";

const Brand = () => {
    return (
      <>
        <a href="/home"><Image src={logo} alt="Company Logo" /></a>
        <Link href="/home"> PantryPal</Link>
      </>
    )
  }
  
  export default Brand
  
  const Image = styled.img`
    padding-top: 2%;
    height: 50px;
    width:50px
    
  `;
  const Link = styled.a`
    font-color: black;
    margin: auto;
    width: 60%;
    text-transform: uppercase;
    font-weight:bold;
    text-decoration:none;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.4rem;
    fo
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