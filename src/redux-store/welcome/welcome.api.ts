import { fetchRequest } from 'utils';

import { AppDispatch } from '../redux-store';
import {
  setExternalWelcomePublicData,
  setInternalWelcomeProtectedData,
  setInternalWelcomePublicData,
} from './welcome.actions';

// internal API
function fetchInternalWelcomePublicData() {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api-boilerplate/welcome/public', {
      method: 'GET',
    }).then((responseAsJson) => {
      dispatch(setInternalWelcomePublicData(responseAsJson));
    });
  };
}

function fetchInternalWelcomeProtectedData() {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api-boilerplate/welcome/protected', {
      method: 'GET',
    }).then((responseAsJson) => {
      dispatch(setInternalWelcomeProtectedData(responseAsJson));
    });
  };
}

// external API
function fetchExternalWelcomePublicData() {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api/get', { method: 'GET' }).then(
      (responseAsJson) => {
        dispatch(setExternalWelcomePublicData(responseAsJson));
      },
    );
  };
}

export {
  fetchExternalWelcomePublicData,
  fetchInternalWelcomeProtectedData,
  fetchInternalWelcomePublicData,
};
