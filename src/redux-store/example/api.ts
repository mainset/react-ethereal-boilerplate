import { fetchRequestExample } from 'utils';

import { AppDispatch } from '../redux-store';

import {
  fetchInternalWelcomeSuccess,
  fetchPublicWelcomeSuccess,
} from './actions';

// internal API
function fetchInternalWelcomeData() {
  return (dispatch: AppDispatch) => {
    return fetchRequestExample('/api-boilerplate', { method: 'GET' }).then(
      (responseAsJson) => {
        dispatch(fetchInternalWelcomeSuccess(responseAsJson));
      }
    );
  };
}

// public API
function fetchPublicWelcomeData() {
  return (dispatch: AppDispatch) => {
    return fetchRequestExample('/api/get', { method: 'GET' }).then(
      (responseAsJson) => {
        dispatch(fetchPublicWelcomeSuccess(responseAsJson));
      }
    );
  };
}

export { fetchInternalWelcomeData, fetchPublicWelcomeData };
