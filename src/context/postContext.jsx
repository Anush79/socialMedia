import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

import { actionTypes } from "../utils/constants";
import { useAuth } from "../";
import { initialstate, postReducerfunction } from "../reducers/postReducer";
import {
  getEveryPostService,
  getPostByIdService,
  getAllUserPostsHandlerService,
  likePostHandlerService,
  dislikePostService,
  deletePostHandlerService,
  createPostService,
  editPostService,
} from "../services/postService";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [allPosts, postDispatch] = useReducer(
    postReducerfunction,
    initialstate
  );

  const { token, currentUser } = useAuth();
  const { GET_EVERY_POSTS, GET_SINGLE_POST, GET_ALL_POSTS_OF_USER } =
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
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
      getPostByIdFunction(postId);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };
  const dislikePostHandlerfunction = async (postId, token) => {
    try {
      const response = await dislikePostService(postId, token);
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
      getPostByIdFunction(postId);
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };
  const deletePostFunction = async (postId, token) => {
    try {
      const response = await deletePostHandlerService(postId, token);
      getAllUserPostsHandlerFunction(currentUser.username);
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
      toast.info("Post deleted Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const createPostFunction = async (content) => {
    try {
      const response = await createPostService(content, token);
      if (response.status === 201) {
        toast.success("New Post Created");
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPostFunction = async (postId, postContent) => {
    try {
      const response = await editPostService( postContent, token);
      if (response.status === 201) {
        toast.success("New Post Created");
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
        getPostByIdFunction(postId)
        getAllUserPostsHandlerFunction(postContent.username)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentUser) getAllUserPostsHandlerFunction(currentUser.username);
  }, []);
  return (
    <PostContext.Provider
      value={{
        allPosts,
        likePostHandlerfunction,
        getPostByIdFunction,
        getAllUserPostsHandlerFunction,
        dislikePostHandlerfunction,
        deletePostFunction,
        createPostFunction,
        postDispatch,
        editPostFunction,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
