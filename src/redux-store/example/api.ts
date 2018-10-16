import { fetchRequestExample } from 'utils';

import { AppDispatch } from '../redux-store';

import { fetchWelcomeSuccess } from './actions';

function fetchWelcomeData() {
  return (dispatch: AppDispatch) => {
    return fetchRequestExample('/api/get', { method: 'GET' }).then((responseAsJson) => {
      dispatch(fetchWelcomeSuccess(responseAsJson));
    });
  };
}

export { fetchWelcomeData };
