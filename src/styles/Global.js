// global styling for the website

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* current font we are using*/
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  .main {
    background-color: #eef0e8;
    min-height: 87vh;
    z-index: -20;
  }
  .mainInside {
    background: #dbdfcd;
    height: auto;
    min-height: 87vh;
    margin: 0 auto;
    width: 80%;
    z-index: 0;
    min-width: 550px;
    max-width: 1400px;
  }
`;

export default GlobalStyles;