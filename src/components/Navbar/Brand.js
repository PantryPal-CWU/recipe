import React from 'react';
import styled from 'styled-components';
import logo from "../images/chef(1).png";

const Brand = () => {
    return (
      <a href="/"> <Image src={logo} alt="Company Logo" /></a>
    )
  }
  
  export default Brand
  
  const Image = styled.img`
    height: 85%;
    margin: auto 0;
  `;