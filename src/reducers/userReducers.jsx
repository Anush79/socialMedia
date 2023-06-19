import { actionTypes } from "../utils/constants"

export const userInitialState = []
const{GET_ALL_USERS} = actionTypes;

export const userReducerFunction =(state, action)=>{
 const {type, payload} = action;
 switch (type) {
  case GET_ALL_USERS:
    return payload;
 
  default:
    break;
 }

}