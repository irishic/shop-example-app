import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart, clearErrors } from '../../redux/user/user.actions';

import './sign-up.scss';
import { createStructuredSelector } from 'reselect';
import { selectSignUpError } from '../../redux/user/user.selectors';

const SignUp = ({ signUpStart, errorMessage, clearError }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSumit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  useEffect(() => {
    clearError();
  }, [clearError]);

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sing up with your email and password</span>
      <form className="sign-up__form" onSubmit={handleSumit}>
        <FormInput
          label="Login"
          type="text"
          name="displayName"
          value={displayName}
          required={true}
          handleChange={({ target }) => setDisplayName(target.value)}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required={true}
          handleChange={({ target }) => setEmail(target.value)}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required={true}
          handleChange={({ target }) => setPassword(target.value)}
        />

        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required={true}
          handleChange={({ target }) => setConfirmPassword(target.value)}
        />

        <div className="error-case">{errorMessage ? errorMessage : ''}</div>
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (payload) => dispatch(signUpStart(payload)),
  clearError: () => dispatch(clearErrors({ name: 'signUpFormError' })),
});

const mapStateToProps = createStructuredSelector({
  errorMessage: selectSignUpError,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
