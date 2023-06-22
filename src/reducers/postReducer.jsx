
import { actionTypes } from "../utils/constants"

export const initialstate = {
  allPostsInDB : [],
  singlePost:null,
  explorePosts:[],
  feedPost:[],
  bookMarks:[],
  allPostOfUser:[]

}
const {GET_EVERY_POSTS,GET_SINGLE_POST,GET_ALL_POSTS_OF_USER, DELETE_POST} = actionTypes;
export const postReducerfunction = (state, action)=>{
const {type, payload} = action;
switch (type) {
  case GET_EVERY_POSTS:
    return {
      ...state,
      allPostsInDB :payload,
    }
  case GET_SINGLE_POST:
    return{
      ...state,
      singlePost :payload,
    }
  case GET_ALL_POSTS_OF_USER:
    return {
      ...state, 
      allPostOfUser:payload
    }
  case DELETE_POST: 
  return {
      ...state, 
      allPostOfUser:payload
    }
  default:
    break;
}
}