import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { toast } from "react-toastify";

import { actionTypes } from "../utils/constants";
import { useAuth } from "../";
import { initialstate, postReducerfunction } from "../reducers/postReducer";
import {
  getEveryPostService,
  getPostByIdService,
  getAllUserPostsHandlerService,
  likePostHandlerService,dislikePostService,
} from "../services/postService";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [allPosts, postDispatch] = useReducer(
    postReducerfunction,
    initialstate
  );

  const { token } = useAuth();
  const { GET_EVERY_POSTS, GET_SINGLE_POST, GET_ALL_POSTS_OF_USER} =
    actionTypes;

  const getEveryPostinDb = async () => {
    try {
      const response = await getEveryPostService();
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEveryPostinDb();
  }, [token]);

  const getPostByIdFunction = async (id) => {
    try {
      const response = await getPostByIdService(id);
      postDispatch({ type: GET_SINGLE_POST, payload: response.data.post });
    } catch (error) {
      toast.error(error);
    }
  };

  const getAllUserPostsHandlerFunction = async (username) => {
    try {
      const response = await getAllUserPostsHandlerService(username);
      postDispatch({
        type: GET_ALL_POSTS_OF_USER,
        payload: response.data.posts,
      });
    } catch (error) {
      toast.error(error);
    }
  };
  const likePostHandlerfunction = async (postId, token) => {
    try {
      const response = await likePostHandlerService(postId, token);
      postDispatch({type: GET_EVERY_POSTS, payload:response.data.posts})
      getPostByIdFunction(postId)
    } catch (error) {
      console.error(error)
      toast.error(error);
    }
  };
  const dislikePostHandlerfunction = async (postId, token) => {
    try {
      const response = await dislikePostService(postId, token);
      postDispatch({type: GET_EVERY_POSTS, payload:response.data.posts})
      getPostByIdFunction(postId)
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };
 
  return (
    <PostContext.Provider
      value={{
        allPosts,
        likePostHandlerfunction,
        getPostByIdFunction,
        getAllUserPostsHandlerFunction,
        dislikePostHandlerfunction,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
