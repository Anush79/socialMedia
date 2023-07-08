import { actionTypes } from "../utils/constants";

export const initialstate = {
  allPostsInDB: [],
  singlePost: null,
  explorePosts: [],
  feedPost: [],
  bookMarks: [],
  allPostOfUser: [],
  currentFilter: "SORT_LATEST_POSTS",
};
const {
  GET_EVERY_POSTS,
  GET_SINGLE_POST,
  GET_ALL_POSTS_OF_USER,
  DELETE_POST,
  SORT_LATEST_POSTS,
  SORT_OLDEST_POSTS,
  TRENDING_POSTS,
} = actionTypes;

export const postReducerfunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EVERY_POSTS:
      const latestArr =
        state.currentFilter === "TRENDING_POSTS"
          ? payload.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount)
          : state.currentFilter === "SORT_OLDEST_POSTS"
          ? payload?.sort(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
          : payload?.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );

      return { ...state, allPostsInDB: latestArr };
    // return {
    //   ...state,
    //   allPostsInDB: payload,
    // };
    case GET_SINGLE_POST:
      return {
        ...state,
        singlePost: payload,
      };
    case GET_ALL_POSTS_OF_USER:
      return {
        ...state,
        allPostOfUser: payload,
      };
    case DELETE_POST:
      return {
        ...state,
        allPostOfUser: payload,
      };
      
    case SORT_LATEST_POSTS:
      return { ...state, currentFilter: SORT_LATEST_POSTS };
    case SORT_OLDEST_POSTS:
      return { ...state, currentFilter: SORT_OLDEST_POSTS };
    case TRENDING_POSTS:    
      return { ...state, currentFilter:TRENDING_POSTS };
    default:
      break;
  }
};
