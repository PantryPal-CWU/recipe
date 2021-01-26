import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './styles/Global';
import Login from "./components/Login/Login"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const routing = (
  <BrowserRouter>
    <Switch>
        <Route path="/login">
          <Login />
        </Route>
    </Switch>
  </BrowserRouter>
  
);

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>

      <div className="App">
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />

        {routing}
      </div>
      
        
     </>
  )
  }
}

export default App;
