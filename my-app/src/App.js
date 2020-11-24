//import statements

import './App.css';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Welcome } from './Welcome';
import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      //using router to create page links
      <Router>
        <div className="App">
          {/* creating page links for every page */}
          <Route path="/" exact render={
            () => {
              return (<Login />);
            }
          } />

          <Route path="/Login" exact render={
            () => {
              return (<Login />);
            }
          } />

          <Route path="/SignUp" exact render={
            () => {
              return (<SignUp />);
            }
          } />

          <Route path="/Welcome" exact render={
            () => {
              return (<Welcome />);
            }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
