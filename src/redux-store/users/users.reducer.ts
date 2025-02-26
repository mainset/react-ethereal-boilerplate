import { MERGE_IN_USER } from './users.constants';

const initialState = {
  userById: {},
  userIds: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case MERGE_IN_USER:
      return {
        ...state,
        userById: {
          ...state.userById,
          ...action.userById,
        },
        userIds: [...state.userIds, ...action.userIds],
      };
    default:
      return state;
  }
}

export { usersReducer };
