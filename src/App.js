import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './styles/Global';
import { LoginStatusProvider } from './LoginContext'
import { Routing } from './Routing';
import 'bootstrap/dist/css/bootstrap.min.css';


// class component of react  
// extends react.Component and creates a render function
// allows life-cycle hooks
// read more: https://dev.to/carlmungazi/turning-class-app-extends-react-component-into-a-coding-lesson-3mod

class App extends Component {
  // initlize state to hold the navbaropen bool
  // read more here: https://daveceddia.com/where-initialize-state-react/

  state = {
    navbarOpen: false
  }
  // es7 way of handling functions  
  handleNavbar = () => {
    // change navbar to open or to close on handleNavbar
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  // render for react required for class 
  // can't comment well in this
  // navbar is where narbar is store so it is on every page
  // routing allows the routing from ./Routing to work
  // LoginStatusProvider is to allow all children of App's to access the status of the user's login
  render() {
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
// export the app
export default App;
