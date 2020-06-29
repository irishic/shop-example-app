import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
  clearErrors,
} from '../../redux/user/user.actions';

import './sign-in.scss';
import { createStructuredSelector } from 'reselect';
import { selectSignInError } from '../../redux/user/user.selectors';

const SignIn = ({
  clearError,
  googleSignInStart,
  emailSignInStart,
  errorMessage,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  useEffect(() => {
    clearError();
  }, [clearError]);

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required={true}
          handleChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required={true}
          handleChange={(event) => {
            setPassword(event.target.value);
          }}
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
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  clearError: () => dispatch(clearErrors({ name: 'signInFormError' })),
});

const mapStateToProps = createStructuredSelector({
  errorMessage: selectSignInError,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
