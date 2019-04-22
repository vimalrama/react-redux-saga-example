import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetGitHubSaga from './watchers/getGithubUsers'

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetGitHubSaga),
  ]);
}
