import { fetchRequest } from 'utils';

import { getDocumentCookieValue } from '../../utils';
import { AppDispatch } from '../redux-store';
import { mergeInUser } from '../users/users.actions';
import { setCurrentSessionUserId } from './current-session.actions';

function getAuthMe() {
  return (dispatch: AppDispatch) => {
    // NOTE: true used on localhost
    const accessToken = getDocumentCookieValue('access_token');

    const isDevEnv = process.env.NODE_ENV === 'development';

    // NOTE: do not sent request if we already know that there is no session
    return accessToken || isDevEnv
      ? fetchRequest('/api-boilerplate/auth/me', {
          method: 'get',
        })
          .then((responseAsJson) => {
            const { user } = responseAsJson;

            dispatch(
              mergeInUser({
                userById: {
                  [user.id]: user,
                },
                userIds: [user.id],
              }),
            );

            dispatch(
              setCurrentSessionUserId({
                authenticatedUserId: user.id,
              }),
            );
          })
          .catch(() => {
            dispatch(
              setCurrentSessionUserId({
                authenticatedUserId: null,
              }),
            );
          })
      : Promise.resolve();
  };
}

type PostAuthLoginParams = {
  data: {
    email: FormDataEntryValue | string;
    password: FormDataEntryValue | string;
  };
};

function postAuthLogin({ data }: PostAuthLoginParams) {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api-boilerplate/auth/login', {
      method: 'post',
      body: JSON.stringify(data),
    }).then((responseAsJson) => {
      const { user } = responseAsJson;

      dispatch(
        mergeInUser({
          userById: {
            [user.id]: user,
          },
          userIds: [user.id],
        }),
      );

      dispatch(
        setCurrentSessionUserId({
          authenticatedUserId: user.id,
        }),
      );
    });
  };
}

function postAuthLogout() {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api-boilerplate/auth/logout', {
      method: 'post',
    }).then(() => {
      dispatch(
        setCurrentSessionUserId({
          authenticatedUserId: null,
        }),
      );
    });
  };
}

export { getAuthMe, postAuthLogin, postAuthLogout };
