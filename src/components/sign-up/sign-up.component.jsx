import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart, clearErrors } from '../../redux/user/user.actions';

import './sign-up.scss';
import { createStructuredSelector } from 'reselect';
import { selectSignUpError } from '../../redux/user/user.selectors';

class SignUp extends Component {
  constructor(props) {
    const { clearError } = props;
    super(props);

    clearError();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSumit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sing up with your email and password</span>
        <form className="sign-up__form" onSubmit={this.handleSumit}>
          <FormInput
            label="Login"
            type="text"
            name="displayName"
            value={displayName}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required={true}
            handleChange={this.handleChange}
          />

          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required={true}
            handleChange={this.handleChange}
          />

          <div className="error-case">{errorMessage ? errorMessage : ''}</div>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (payload) => dispatch(signUpStart(payload)),
  clearError: () => dispatch(clearErrors({ name: 'signUpFormError' })),
});

const mapStateToProps = createStructuredSelector({
  errorMessage: selectSignUpError,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
