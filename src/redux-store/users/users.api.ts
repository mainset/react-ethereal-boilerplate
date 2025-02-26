import { fetchRequest } from 'utils';

import { AppDispatch } from '../redux-store';

import { setCurrentSessionUserId } from '../current-session/current-session.actions';

import { mergeInUser } from './users.actions';

type PostUserRegisterParams = {
  data: {
    email: FormDataEntryValue | string;
    password: FormDataEntryValue | string;
  };
};

function postUserRegister({ data }: PostUserRegisterParams) {
  return (dispatch: AppDispatch) => {
    return fetchRequest('/api-boilerplate/users/register', {
      method: 'post',
      body: JSON.stringify(data),
    }).then((responseAsJson) => {
      dispatch(mergeInUser(responseAsJson));

      setCurrentSessionUserId({
        authenticatedUserId: 'TODO__DYNAMIC_USER_ID',
      });
    });
  };
}

export { postUserRegister };
