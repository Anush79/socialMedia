
import { actionTypes } from "../utils/constants"

export const initialstate = []
const {GET_EVERY_POSTS} = actionTypes;
export const postReducerfunction = (state, action)=>{
const {type, payload} = action;
switch (type) {
  case GET_EVERY_POSTS:
    return payload

  default:
    break;
}
}