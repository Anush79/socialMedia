import { actionTypes } from "../utils/constants"

export const userInitialState = {
  allUsersInDB :[],
  userWithId:{},

}
const{GET_ALL_USERS,GET_USER} = actionTypes;

export const userReducerFunction =(state, action)=>{
 const {type, payload} = action;
 switch (type) {
  case GET_ALL_USERS:
    return {...state, allUsersInDB:payload};
  case GET_USER:
    return {...state, userWithId:payload}
  default:
    break;
 }

}