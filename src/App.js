import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './styles/Global';
import Login from "./components/Login/Login"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from "./components/pages/Home";


class App extends Component {
  state = {
    navbarOpen: false,
    loggedIn: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  loginEvent = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  render() {

    return (
      <>

      <div className="App">
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
          loggedIn={this.state.loggedIn}
        />
        <GlobalStyle />

        <BrowserRouter>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
        
            <Route path="/login">
              {((this.state.loggedIn != true) ? <Login loginState={this.state.loggedIn} loginHandler={this.loginEvent}/> : <Redirect from='/login' to="/Home" />)}
              
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      
        
     </>
  )
  }
}

export default App;
