import { combineReducers } from 'redux';

import usersReducer from './users';

import gitHubUserReducer from './gitHubUsers';

export default combineReducers({
  usersReducer,
  gitHubUserReducer
});
