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
    background-color: #fefce2;
    height: 100vh;
  }
`;

export default GlobalStyles;