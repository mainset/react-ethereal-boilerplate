import { fetchRequest } from 'utils';

import { AppDispatch } from '../redux-store';

import { setCurrentSessionUserId } from './current-session.actions';

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
    }).then(() => {
      dispatch(
        setCurrentSessionUserId({
          authenticatedUserId: 'TODO__DYNAMIC_USER_ID',
        })
      );
    });
  };
}

export { postAuthLogin };
