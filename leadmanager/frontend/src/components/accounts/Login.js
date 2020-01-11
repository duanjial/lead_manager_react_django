import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { loadUser, loginUser } from "../../actions/auth";
import { connect } from "react-redux";
import { createMessage, returnErrors } from "../../actions/messages";
import PropTypes from "prop-types";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    createMessage: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    // console.log(username, password);
    if (!username || !password) {
      this.props.createMessage({
        msg: "Please provide Username or Password to login"
      });
    } else {
      const user = { username: username, password: password };
      this.props.loginUser(user);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, {
  loadUser,
  loginUser,
  createMessage,
  returnErrors
})(Login);
