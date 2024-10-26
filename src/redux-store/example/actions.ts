import {
  FETCH_WELCOME_DATA,
  FETCH_WELCOME_DATA_ERROR,
  FETCH_WELCOME_DATA_SUCCESS,
} from './constants';

const fetchWelcomeData = () => ({
  type: FETCH_WELCOME_DATA,
});

const fetchWelcomeSuccess = (data) => ({
  type: FETCH_WELCOME_DATA_SUCCESS,
  data,
});

const fetchWelcomeError = (error) => ({
  type: FETCH_WELCOME_DATA_ERROR,
  error,
});

export { fetchWelcomeData, fetchWelcomeError, fetchWelcomeSuccess };
