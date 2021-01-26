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
    padding-top: 1%;
    height: 85%;
    width:50px
    
  `;
  const Link = styled.a`
    font-color: black;
    margin: auto;
    width: 60%;
    padding-left: 1%;
    font-weight:bold;
    text-decoration:none;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.4rem;
    fo
      &:hover{
        color: white;
        text-decoration:underline;
      }
      &:visited{
        color: black;
      }
        &:hover{
          color: white;
          text-decoration:underline;
        }
  `;