import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { getEveryPostService } from "../services/postService";
import { useAuth } from '../'
import { initialstate, postReducerfunction } from "../reducers/postReducer";
import { actionTypes } from "../utils/constants";
const PostContext = createContext();

export function PostProvider({ children }) {
  const [allPosts, postDispatch] = useReducer(postReducerfunction, initialstate)
  const { token } = useAuth();
  const { GET_EVERY_POSTS } = actionTypes;

  const getEveryPostinDb = async () => {
    try {
      const response = await getEveryPostService()
      postDispatch({ type: GET_EVERY_POSTS, payload: response.data.posts })
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getEveryPostinDb()
  }, [token])

  return <PostContext.Provider value={{ allPosts }}>{children}</PostContext.Provider>;
}

export const usePost = () => useContext(PostContext);
