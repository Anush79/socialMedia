import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../";
import { colorSet } from "../utils/constants";
import {
  userInitialState,
  userReducerFunction,
} from "../reducers/userReducers";
import {
  bookMarKPostService,
  editUserProfileService,
  followUserService,
  getAllUsersService,
  getUserByIdService,
  removeBookmarkService,
  unfollowUserService,
} from "../services/userService";
import { actionTypes } from "../utils/constants";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, usersDispatch] = useReducer(
    userReducerFunction,
    userInitialState
  );

  const { token, currentUser, setCurrentUser } = useAuth();
  const { GET_ALL_USERS, GET_USER, GET_BOOKMARKS, GET_SUGGESTED_USER } =
    actionTypes;

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
      toast.error(error.response);
    }
  };
  const getUserByUsername =(userName)=>{
    const foundUser = users?.allUsersInDB?.find(item=>item.username===userName)
    return foundUser
  }

  const bookMarKPostFunction = async (id) => {
    try {
      const response = await bookMarKPostService(id, token);
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

  const removeFromBookmarkFunction = async (postId) => {
    try {
      const response = await removeBookmarkService(postId, token);
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
          `Started following ${response?.data?.followUser?.firstName}`
        );
        setCurrentUser(response.data.user);
        usersDispatch({ type: GET_USER, payload: response.data.user });
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
        usersDispatch({ type: GET_USER, payload: response.data.user });
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
  const getSuggestedUsersArray = () => {
    const suggestions = users?.allUsersInDB?.filter(
      (item) =>
        item.username !== currentUser.username &&
        currentUser.following.every(
          (person) => person.username !== item.username
        )
    );
    usersDispatch({ type: GET_SUGGESTED_USER, payload: suggestions });
  };

  const editUserProfileFunction = async (userData) => {
    try {
      const { data, status } = await editUserProfileService(userData, token);
      if (status === 201) {
        toast.success("profile updated successfully");
        setCurrentUser(data.user);
        usersDispatch({ type: GET_USER, payload: data.user });
        getUserByIdFunction(data?.user._id);          
        
      }
    } catch (error) {
      console.error(error);
    }
  };
  const changeTheme = (index) => {
    const root = document.documentElement;
    Object.keys(colorSet[index]).forEach((colorKey) => {
      root.style.setProperty(colorKey, colorSet[index][colorKey]);
    });
  };
  const themeHandler=(index)=>{
    usersDispatch({type:actionTypes.REGISTER_THEME, payload:index});
    localStorage.setItem("selectedTheme", JSON.stringify(index))
    changeTheme(users.theme)
  }

  useEffect(() => {
    getAllUsersFunction();
  }, []);

useEffect(()=>{
  if(token)
  getSuggestedUsersArray();
},[users?.allUsersInDB])
useEffect(()=>{
  changeTheme(localStorage.getItem("selectedTheme"))
},[users.theme])
  return (
    <UserContext.Provider
      value={{
        users,

        getAllUsersFunction,
        bookMarKPostFunction,
        getUserByIdFunction,
        removeFromBookmarkFunction,
        isAlreadyBookMarked,
        followUserFunction,
        unFollowUserFunction,
        isAlreadyFollowing,
        getSuggestedUsersArray,
        editUserProfileFunction,
        getUserByUsername,
        themeHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
