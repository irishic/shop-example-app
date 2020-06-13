import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import './sign-in.scss';
import { createStructuredSelector } from 'reselect';
import { selectUserError } from '../../redux/user/user.selectors';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });

    if (this.state.errorMessage) {
      this.setState({ errorMessage: '' });
    }
  };

  render() {
    const { googleSignInStart } = this.props;
    const { email, password } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your username and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <div className="error-case">{errorMessage ? errorMessage : ''}</div>
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const mapStateToProps = createStructuredSelector({
  errorMessage: selectUserError,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
