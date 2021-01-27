import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './styles/Global';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginStatusProvider } from './LoginContext'
import { Routing } from './Routing';

class App extends Component {
  
  
  state = {
    navbarOpen: false,
    // loggedIn: LoginStatus
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render(props) {

    return (
      <>
        <LoginStatusProvider>
          <div className="App">
            <Navbar 
              navbarState={this.state.navbarOpen} 
              handleNavbar={this.handleNavbar}
              
            />
            <GlobalStyle />

            <Routing />
          </div>
        </LoginStatusProvider>
        
     </>
    )
  }
}

export default App;
