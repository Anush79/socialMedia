import { actionTypes } from "../utils/constants"

export const userInitialState = {
  allUsersInDB: [],
  userWithId: {},
  booksMarks: [],
  suggestedUsers: []
}
const { GET_ALL_USERS, GET_USER, GET_BOOKMARKS, GET_SUGGESTED_USER } = actionTypes;

export const userReducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USERS:
      return { ...state, allUsersInDB: payload };
    case GET_USER:
      return { ...state, userWithId: payload }
    case GET_BOOKMARKS:
      return { ...state, booksMarks: payload }
    case GET_SUGGESTED_USER:
      return { ...state, suggestedUsers: payload }
    default:
      break;
  }

}