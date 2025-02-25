import {
  FETCH_INTERNAL_WELCOME_DATA,
  FETCH_INTERNAL_WELCOME_DATA_ERROR,
  FETCH_INTERNAL_WELCOME_DATA_SUCCESS,
  FETCH_PUBLIC_WELCOME_DATA,
  FETCH_PUBLIC_WELCOME_DATA_ERROR,
  FETCH_PUBLIC_WELCOME_DATA_SUCCESS,
} from './constants';

// internal API
const fetchInternalWelcomeData = () => ({
  type: FETCH_INTERNAL_WELCOME_DATA,
});

const fetchInternalWelcomeSuccess = (data) => ({
  type: FETCH_INTERNAL_WELCOME_DATA_SUCCESS,
  data,
});

const fetchInternalWelcomeError = (error) => ({
  type: FETCH_INTERNAL_WELCOME_DATA_ERROR,
  error,
});

// public API
const fetchPublicWelcomeData = () => ({
  type: FETCH_PUBLIC_WELCOME_DATA,
});

const fetchPublicWelcomeSuccess = (data) => ({
  type: FETCH_PUBLIC_WELCOME_DATA_SUCCESS,
  data,
});

const fetchPublicWelcomeError = (error) => ({
  type: FETCH_PUBLIC_WELCOME_DATA_ERROR,
  error,
});

export {
  // internal API
  fetchInternalWelcomeData,
  fetchInternalWelcomeError,
  fetchInternalWelcomeSuccess,

  // public API
  fetchPublicWelcomeData,
  fetchPublicWelcomeError,
  fetchPublicWelcomeSuccess,
};
