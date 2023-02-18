import React, { Component } from 'react';
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "view-defect",
      selectedPriority: "",
      selectedCategory: ""
    }
  }

  componentWillMount() { }

  componentDidMount() {
    this.setState({
      username: localStorage.getItem("username") ?
        localStorage.getItem("username") :
        "GUEST"
    });
  }

  setTotalResults(k) {
    this.setState({ results: k });
  }

  render() {
    return (
      <div>
        <Header username={this.state.username} />
        <div className="container">
          <div className="row pt-3 pb-3">
            {
              this.state.username == "tester" &&
              <div className="col-lg-6">
                <span>
                  <button
                    onClick={() => this.setState({
                      page: "add-defect"
                    })}
                    className="btn btn-primary btn-spacing m-2">
                    Add Defect
                    </button>
                  <button
                    onClick={() => this.setState({
                      page: "view-defect"
                    })}
                    className="btn btn-primary btn-spacing m-2">
                    View Defects
                    </button>
                </span>
              </div>
            }
            {
              this.state.page == "view-defect" &&
              <div className="col-lg-6">
                <div className="select-group form-inline">
                  <div className="form-group m-2">
                    <label
                      htmlFor="priority"
                      className="">
                      Priority
                      </label>&nbsp;
                      <select
                      value={this.state.selectedPriority}
                      className="form-control"
                      id="priority"
                      onChange={(e) => {
                        this.setState({ selectedPriority: e.target.value });
                      }}>
                      <option value="" selected disabled>Select priority</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    {
                      this.state.selectedPriority != "" &&
                      <div onClick={() =>
                        this.setState({
                          selectedPriority: ""
                        })
                      }
                        className="close-btn btn btn-secondary">x</div>
                    }
                  </div>

                  <div className="form-group m-2">
                    <label
                      htmlFor="category"
                      className="">Category
                      </label>&nbsp;
                      <select
                      value={this.state.selectedCategory}
                      className="form-control"
                      id="category"
                      onChange={(e) => {
                        this.setState({ selectedCategory: e.target.value });
                      }}>
                      <option value="" selected disabled>Select category</option>
                      <option>UI</option>
                      <option>Functional</option>
                      <option>Change Request</option>
                    </select>
                    {
                      this.state.selectedCategory != "" &&
                      <div onClick={() =>
                        this.setState({ selectedCategory: "" })
                      }
                        className="close-btn btn btn-secondary">
                        x
                        </div>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
          
        </div>
      </div>
    );
  }
}
export default Dashboard;