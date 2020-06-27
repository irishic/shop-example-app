import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  signUpFormError: null,
  signInFormError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        signInFormError: null,
        signUpFormError: null,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signInFormError: null,
        signUpFormError: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        signInFormError: action.payload.message,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpFormError: action.payload.message,
      };
    case UserActionTypes.CLEAR_FORMS_ERRORS:
      switch (action.payload.name) {
        case 'signUpFormError':
          return {
            ...state,
            signUpFormError: null,
          };
        case 'signInFormError':
          return {
            ...state,
            signInFormError: null,
          };
        default:
          return {
            ...state,
            signUpFormError: null,
            signInFormError: null,
          };
      }
    default:
      return state;
  }
};

export default userReducer;
