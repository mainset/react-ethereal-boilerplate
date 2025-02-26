import {
  SET_EXTERNAL_WELCOME_PUBLIC_DATA,
  SET_INTERNAL_WELCOME_PROTECTED_DATA,
  SET_INTERNAL_WELCOME_PUBLIC_DATA,
} from './welcome.constants';

// internal API
const setInternalWelcomePublicData = (data) => ({
  type: SET_INTERNAL_WELCOME_PUBLIC_DATA,
  data,
});

const setInternalWelcomeProtectedData = (data) => ({
  type: SET_INTERNAL_WELCOME_PROTECTED_DATA,
  data,
});

// external API
const setExternalWelcomePublicData = (data) => ({
  type: SET_EXTERNAL_WELCOME_PUBLIC_DATA,
  data,
});

export {
  // external API
  setExternalWelcomePublicData,
  // internal API
  setInternalWelcomeProtectedData,
  setInternalWelcomePublicData,
};
