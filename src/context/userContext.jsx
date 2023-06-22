import { createContext, useContext, useReducer, useEffect } from "react";
import {
  getAllUsersService,
  bookMarKPostService,
  getAllBookmarksService,
  getUserByIdService,
  removeBookmarkService,
} from "../services/userService";
import {
  userReducerFunction,
  userInitialState,
} from "../reducers/userReducers";
import { actionTypes } from "../utils/constants";
import { toast } from "react-toastify";
import { useAuth } from "../";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, usersDispatch] = useReducer(
    userReducerFunction,
    userInitialState
  );
  const { token } = useAuth();
  const { GET_ALL_USERS, GET_USER,
    GET_BOOKMARKS } = actionTypes



  const getAllUsersFunction = async () => {
 
    try {
      const response = await getAllUsersService();
      usersDispatch({ type: GET_ALL_USERS, payload: response.data.users });
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const getUserByIdFunction = async (userId) => {
   
    try {
      const response = await getUserByIdService(userId);
      usersDispatch({ type: GET_USER, payload: response.data.user });
     
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const bookMarKPostFunction = async (id, encodedToken) => {
  
    try {
      const response = await bookMarKPostService(id, encodedToken);
      if (response.status === 200) {
        toast.success("Added BookMark");
        usersDispatch({ type: GET_BOOKMARKS, payload: response.data.bookmarks });
      }
      getAllUsersFunction();
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  // const getBookMarksFunction = async (encodedToken) => {
  //   try {
  //     console.log(encodedToken);

  //     const response = await getAllBookmarksService(encodedToken);
  //     console.log(response);
  //     // usersDispatch({ type: GET_BOOKMARKS, payload: response.data.bookmarks });
  //   } catch (error) {
  //     if (error?.response?.status === 500) {
  //       toast.error(error.response.data.error);
  //     } else {
  //       console.log(error);
  //       // toast.error(error?.response?.data?.errors[0]);
  //     }
  //   }
  // };

  const removeFromBookmarkFunction = async (postId, encodedToken) => {
    try {
      const response = await removeBookmarkService(postId, encodedToken)
      usersDispatch({ type: GET_BOOKMARKS, payload: response.data.bookmarks });
      if(response.status===200){
        toast.success("Post removed from Bookmarks")
      }
    } catch (error) {
      toast.error("something went wrong")
      console.error(error)
    }
  }

  useEffect(() => {
    // getBookMarksFunction(token);
    getAllUsersFunction();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        users,
        bookMarKPostFunction,
        getUserByIdFunction,
        // getBookMarksFunction,
        removeFromBookmarkFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
