import React, { Component } from 'react';
import '../style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.username == "") {
      let data = this.state.errors;
      data["user"] = true;
      this.setState({ erros: data });
    } else if (this.state.password == "") {
      let data = this.state.errors;
      data["password"] = true;
      this.setState({ erros: data });
    } else if (this.state.username != "tester" && this.state.username != "developer") {
      let data = this.state.errors;
      data["invaliduser"] = true;
      this.setState({ erros: data });
    } else {
      let data = this.state.errors;
      data["invaliduser"] = false;
      this.setState({ erros: data });
      window.localStorage.setItem("username", this.state.username);
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-main">
          <div className="fluid-container header p-4">
            <div className="container">
              <h1>Defect Tracker</h1>
            </div>
          </div>

          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-4">
                {
                  this.state.errors.invaliduser &&
                  <h5 className="text-danger">Invalid User</h5>
                }
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      className={
                        this.state.errors.user ?
                          "form-control border-danger" :
                          "form-control"
                      }
                      id="exampleInputEmail1"
                      placeholder="Enter User name"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                        let data = this.state.errors;
                        data["user"] = false;
                        this.setState({ erros: data });
                      }} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className={
                        this.state.errors.password ?
                          "form-control border-danger" :
                          "form-control"
                      }
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                        let data = this.state.errors;
                        data["password"] = false;
                        this.setState({ erros: data });
                      }
                      } />
                  </div>

                  <button type="submit"
                    className="btn btn-md btn-primary"
                    onClick={this.onFormSubmit.bind(this)}>Sign in
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Login;
