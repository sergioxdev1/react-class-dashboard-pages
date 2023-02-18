import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <div className="fluid-container header p-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 company-logo">
              <h1>Defect Tracker</h1>
            </div>
            <div className="col-6 logout-btn text-right">
              <span className="username">Hi {this.props.username} &nbsp;</span>
              <Link to="/">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;