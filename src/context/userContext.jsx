import { createContext, useContext,useReducer, useEffect } from "react";
import { getAllUsersService } from '../services/userService'
import {userReducerFunction,userInitialState} from '../reducers/userReducers'
import { actionTypes } from "../utils/constants";


const UserContext = createContext()

export function UserProvider({ children }) {
  const [users, usersDispatch] = useReducer(userReducerFunction,userInitialState)

  const getAllUsersFunction = async () => {
    const {GET_ALL_USERS} = actionTypes
    try {
      const response = await getAllUsersService()
      usersDispatch({type:GET_ALL_USERS, payload: response.data.users})
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllUsersFunction()
  }, [])
console.log(users)

  return <UserContext.Provider value={{users}}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
