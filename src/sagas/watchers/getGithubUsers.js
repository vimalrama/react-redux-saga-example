import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_GITHUB_USERS,GET_GITHUB_USER_DETAIL } from '../../constants';
import { setGithubUsers,setUserDetailSaga } from '../../actions/gitHubUsers';
import { getGitHubUsers,getGitHubUserDetail } from '../../lib/api';

function* workerGetGitHubUsersSaga() {
  const users = yield call(getGitHubUsers);
  yield put(setGithubUsers(users));
}

function* workerGetGitHubUserDetailSaga(actions) {
  const users = yield call(getGitHubUserDetail,actions.payload);
  yield put(setUserDetailSaga(users));
}

export default function* watchGetGitHubSaga() {
  yield takeLatest(GET_GITHUB_USERS, workerGetGitHubUsersSaga);
  yield takeLatest(GET_GITHUB_USER_DETAIL, workerGetGitHubUserDetailSaga);
}