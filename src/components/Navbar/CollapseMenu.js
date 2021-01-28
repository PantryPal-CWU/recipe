import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useLoginStatus } from '../../LoginContext'

// es7 function

const CollapseMenu = (props) => {

  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  const { loginStatus } = useLoginStatus();

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="../pages/Home.js" onClick={props.handleNavbar}>Home</a></li>
          <li><a href="../pages/Pantry.js" onClick={props.handleNavbar}>Your Pantry</a></li>
          <li><a href="../Ingredients&Pantry/Ingredients.js" onClick={props.handleNavbar}>Add Ingredients</a></li>
          <li><a href="../About/About.js" onClick={props.handleNavbar}>About / Contact</a></li>
          <li>{(loginStatus) ? <a href="../login" onClick={props.handleNavbar}>Login</a> 
            : <a href="../signout" onClick={props.handleNavbar}>Sign out</a>}</li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #848181;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #232121;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #faf6f6;
      border-bottom: 1px solid #232121;
    }
  }
`;
