import {
  SET_EXTERNAL_WELCOME_PUBLIC_DATA,
  SET_INTERNAL_WELCOME_PROTECTED_DATA,
  SET_INTERNAL_WELCOME_PUBLIC_DATA,
} from './welcome.constants';

const initialState = {
  internalPublicAPIData: null,
  internalProtectedAPIData: null,

  externalPublicAPIData: null,
};

function welcomeReducer(state = initialState, action) {
  switch (action.type) {
    // internal API
    case SET_INTERNAL_WELCOME_PUBLIC_DATA:
      return {
        ...state,
        internalPublicAPIData: action.data,
      };
    case SET_INTERNAL_WELCOME_PROTECTED_DATA:
      return {
        ...state,
        internalProtectedAPIData: action.data,
      };
    // external API
    case SET_EXTERNAL_WELCOME_PUBLIC_DATA:
      return {
        ...state,
        externalPublicAPIData: action.data,
      };
    default:
      return state;
  }
}

export { welcomeReducer };
