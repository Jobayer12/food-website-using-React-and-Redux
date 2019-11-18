import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/actions/userAction";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
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
    let { email, password, confirmPassword } = this.state;
    this.props.register({
      email,
      password,
      confirmPassword
    });
  };

  render() {
    if (this.props.user.Auth !== null) {
      this.props.history.push("/");
    }

    const { email, password, confirmPassword, errors, loading } = this.state;

    return (
      <div className="row m-4">
        <div className="col-md-6 offset-md-3 col-sm-12 col-lg-6">
          <h1 className="text-center display-4">Register Here</h1>
          <form onSubmit={this.submitHandlers}>
            <div className="form-group my-4">
              <input
                type="text"
                name="email"
                className={
                  errors.email || errors.message
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

              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
            <div className="form-group my-4">
              <input
                name="password"
                value={password}
                onChange={this.changleHandlers}
                type="password"
                className={
                  errors.password ? "form-control is-invalid" : "form-control"
                }
                id="password"
                placeholder="Enter Password"
              />

              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="form-group my-4">
              <input
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={this.changleHandlers}
                className={
                  errors.confirmPassword
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="exampleInputPassword1"
                placeholder="Enter Confirmpassword"
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <Link to="/login">Already Have an account? Login Here</Link>
            <button type="submit" className="btn btn-primary my-4 d-block">
              Register
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
  { register }
)(Register);
