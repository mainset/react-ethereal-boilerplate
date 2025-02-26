import { SET_CURRENT_SESSION_USER_ID } from './current-session.constants';

const initialState = {
  authenticatedUserId: null,
};

function currentSessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SESSION_USER_ID:
      return {
        ...state,
        authenticatedUserId: action.authenticatedUserId,
      };
    default:
      return state;
  }
}

export { currentSessionReducer };
