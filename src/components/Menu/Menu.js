import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        
        Add Ingredients
        </a>
      <a href="/" tabIndex={tabIndex}>
        
        Contact
        </a>
        <a href="/" tabIndex={tabIndex}>
        
        Profile
        </a>
        <a href="/" tabIndex={tabIndex}>
        
        Your Pantry
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;