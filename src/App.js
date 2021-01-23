import React from 'react'
import './App.css';
import {Navbar, Login} from "./components";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/login' exact component={() => <Login />} />
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
