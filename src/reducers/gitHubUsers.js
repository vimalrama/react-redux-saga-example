import { SET_GITHUB_USERS,SET_GITHUB_USER_DETAIL } from '../constants';

const initialState = { users: [],details:[] };

export default function setGitUserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_GITHUB_USERS:
      return {
        ...state,
        users: action.users
      };
      case SET_GITHUB_USER_DETAIL:  
      return {
        ...state,
        details: action.users
      };
    default:
      return state;
  }
}
