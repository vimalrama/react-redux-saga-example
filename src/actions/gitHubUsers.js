import { GET_GITHUB_USERS, SET_GITHUB_USERS,GET_GITHUB_USER_DETAIL,
  SET_GITHUB_USER_DETAIL } from '../constants';

export function setGithubUsers(users) {
  return {
    type: SET_GITHUB_USERS,
    users
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_GITHUB_USERS
  };
}


export function getUserDetailSaga(data) {
  return {
    type: GET_GITHUB_USER_DETAIL,
    payload: data
  };
}

export function setUserDetailSaga(users) { 
  return {
    type: SET_GITHUB_USER_DETAIL,
    users
  };
}