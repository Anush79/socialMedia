import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../";
import { initialstate, postReducerfunction } from "../reducers/postReducer";
import {
  createPostService,
  deletePostHandlerService,
  dislikePostService,
  editPostService,
  getAllUserPostsHandlerService,
  getEveryPostService,
  getPostByIdService,
  likePostHandlerService,
} from "../services/postService";

import {
  getAllCommentsOfPostService,
  addCommentService,
  editCommentService,
  deleteCommentService,
} from "../services/commentService";

import { actionTypes } from "../utils/constants";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [allPosts, postDispatch] = useReducer(
    postReducerfunction,
    initialstate
  );
  const { token, currentUser } = useAuth();
  const {
    GET_EVERY_POSTS,
    GET_SINGLE_POST,
    SORT_LATEST_POSTS,
    GET_ALL_POSTS_OF_USER,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
  } = actionTypes;

  const getEveryPostinDb = async () => {
    try {
      const response = await getEveryPostService();
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };

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
      toast.success("Liked the post", { autoClose: 800 });
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
      toast.warn("Disliked the post", { autoClose: 800 });
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
        postDispatch({ type: SORT_LATEST_POSTS, payload: "" });
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPostFunction = async (postId, postContent) => {
    try {
      const response = await editPostService(postContent, token);
      if (response.status === 201) {
        toast.success("your Post edited Successfully");
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
        getPostByIdFunction(postId);
        getAllUserPostsHandlerFunction(postContent.username);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const addCommentFunction = async (postId, commentData)=>{
    try{
       const response  = await addCommentService(postId, commentData, token)
       console.log(response)
       if (response?.status === 201) {
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
        toast.success("Comment added")
      }
    }catch(error){
      toast.error("Something went wrong, try again")
       console.error(error)
    }
  }
  const deleteCommentFunction = async (postId, commentId) => {
    try {
      const response= await deleteCommentService(postId, commentId, token);
      if (response.status === 201) {
        postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts });
        toast.success("Comment deleted.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again");
    }
  };


  useEffect(() => {
    getEveryPostinDb();
  }, [token, allPosts?.currentFilter]);

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
        addCommentFunction,
        deleteCommentFunction,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
