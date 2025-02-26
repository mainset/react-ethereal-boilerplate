import { SET_CURRENT_SESSION_USER_ID } from './current-session.constants';

const setCurrentSessionUserId = ({ authenticatedUserId }) => ({
  type: SET_CURRENT_SESSION_USER_ID,
  authenticatedUserId,
});

export { setCurrentSessionUserId };
