import { currentSessionReducer } from './current-session';
import { usersReducer } from './users';
import { welcomeReducer } from './welcome';

const rootReducer = {
  currentSession: currentSessionReducer,
  users: usersReducer,

  // TODO: drop
  welcome: welcomeReducer,
};

export { rootReducer };
