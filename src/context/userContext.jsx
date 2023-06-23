import { createContext, useContext, useReducer, useEffect } from "react";
import {
  getAllUsersService,
  bookMarKPostService,
  getUserByIdService,
  removeBookmarkService,
  followUserService,
  unfollowUserService,
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

  const { token, currentUser, setCurrentUser } = useAuth();
  const { GET_ALL_USERS, GET_USER, GET_BOOKMARKS } = actionTypes;

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
        usersDispatch({
          type: GET_BOOKMARKS,
          payload: response.data.bookmarks,
        });
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
      const response = await removeBookmarkService(postId, encodedToken);
      usersDispatch({ type: GET_BOOKMARKS, payload: response.data.bookmarks });
      if (response.status === 200) {
        toast.info("Post removed from Bookmarks");
      }
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    }
  };

  const followUserFunction = async (followUserId) => {
    try {
      const response = await followUserService(followUserId, token);
      if (response.status === 200) {
        toast.success(
          `Started following ${response?.data.followUser.firstName}`
        );
        setCurrentUser(response.data.user);
        console.log(response.data.user);
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
      console.error(error);
    }
  };
  const unFollowUserFunction = async (followUserId) => {
    try {
      const response = await unfollowUserService(followUserId, token);
      if (response.status === 200) {
        toast.info(`Unfollowed ${response?.data.followUser.firstName}`);
        setCurrentUser(response.data.user);

      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
      console.error(error);
    }
  };
  const isAlreadyBookMarked = (post) => {
    const indexofBookMark = users?.booksMarks.find(
      (item) => item._id === post._id
    );
    return indexofBookMark ? true : false;
  };
  const isAlreadyFollowing = (userId) => {
    const checkFollowing = currentUser.following.find(
      (item) => item._id === userId
    );
    return checkFollowing ? true : false;
  };

  useEffect(() => {
    getAllUsersFunction();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        users,
        bookMarKPostFunction,
        getUserByIdFunction,
        removeFromBookmarkFunction,
        isAlreadyBookMarked,
        followUserFunction,
        unFollowUserFunction,
        isAlreadyFollowing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
