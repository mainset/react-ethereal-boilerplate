import { MERGE_IN_USER } from './users.constants';

const mergeInUser = ({ userById, userIds }) => ({
  type: MERGE_IN_USER,
  userById,
  userIds,
});

export { mergeInUser };
