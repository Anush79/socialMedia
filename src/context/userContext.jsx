import { createContext, useContext, useReducer, useEffect } from "react";
import { getAllUsersService, bookMarKPostService, getUserByIdService } from '../services/userService'
import { userReducerFunction, userInitialState } from '../reducers/userReducers'
import { actionTypes } from "../utils/constants";
import { toast } from 'react-toastify'

const UserContext = createContext()

export function UserProvider({ children }) {

  const [users, usersDispatch] = useReducer(userReducerFunction, userInitialState)

  const getAllUsersFunction = async () => {
    const { GET_ALL_USERS } = actionTypes
    try {
      const response = await getAllUsersService()
      usersDispatch({ type: GET_ALL_USERS, payload: response.data.users })
    }
    catch (error) {
      toast.error(error.response.data.errors[0])
    }
  }

  const getUserByIdFunction = async (userId) => {
    const { GET_USER } = actionTypes
    try {
      const response = await getUserByIdService(userId)
      usersDispatch({ type: GET_USER, payload: response.data.user })
      
    }
    catch (error) {
      toast.error(error.response.data.errors[0])
    }
  }

  const bookMarKPostFunction = async (id, encodedToken) => {
    try {
      const response = await bookMarKPostService(id, encodedToken)
      if (response.status === 200) {
        toast.success("Added BookMark")
      }
      getAllUsersFunction()
    } catch (error) {
      toast.error(error.response.data.errors[0])
    }
  }
 console.log(users)
  useEffect(() => { 

    getAllUsersFunction()
  }, [])

  return <UserContext.Provider value={{
    users,
    bookMarKPostFunction,
    getUserByIdFunction,
  }}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
