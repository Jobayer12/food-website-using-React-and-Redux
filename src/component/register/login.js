import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userlogin } from "../../redux/actions/userAction";
class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      loading: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }
  changleHandlers = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandlers = event => {
    event.preventDefault();
    let { email, password } = this.state;
    const userData = {
      email,
      password
    };

    this.props.userlogin(userData, this.props.history);
  };

  render() {
    const { email, password, errors, loading } = this.state;

    if (this.props.user.Auth !== null) {
      this.props.history.push("/");
    }
    return (
      <div className="row m-4">
        <div className="col-md-6 offset-md-3 col-sm-12 col-lg-6">
          <h1 className="text-center display-4">Login Here</h1>
          <form onSubmit={this.submitHandlers}>
            <div className="form-group my-4">
              <input
                type="text"
                name="email"
                className={
                  errors.email || errors.noUser
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="email"
                value={email}
                onChange={this.changleHandlers}
                placeholder="Enter email"
              />

              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}

              {errors.noUser && (
                <div className="invalid-feedback">{errors.noUser}</div>
              )}
            </div>

            <div className="form-group my-4">
              <input
                name="password"
                value={password}
                onChange={this.changleHandlers}
                type="password"
                className={
                  errors.password || errors.noMatch
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="password"
                placeholder="Enter Password"
              />

              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
              {errors.noMatch && (
                <div className="invalid-feedback">{errors.noMatch}</div>
              )}
            </div>

            <Link to="/signup">Don't Have an account? Register Here</Link>
            <button type="submit" className="btn btn-primary my-4 d-block">
              Login
              {loading && (
                <span class="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { userlogin }
)(login);
