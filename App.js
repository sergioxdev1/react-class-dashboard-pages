import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from './Dashboard/Dashboard';
import AddDefect from './Adddefect/Adddefect';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}



export default App;

