import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { getEveryPostService } from "../services/postService";
import {useAuth} from '../'
import { initialstate, postReducerfunction } from "../reducers/postReducer";
const PostContext = createContext();

export function PostProvider({ children }) {
  const [allPosts, postDispatch] = useReducer(postReducerfunction, initialstate)
  const {token} = useAuth();

  const getEveryPostinDb = async () => {
    try {
      const response = await getEveryPostService()
      console.log(response, "from context")
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getEveryPostinDb()
  }, [token])

  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
}

export const usePost = () => useContext(PostContext);
