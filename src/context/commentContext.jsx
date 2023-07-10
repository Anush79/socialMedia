import {createContext, useState, useContext, useEffect} from react


const CommentData= createContext()
export default function CommentProvider({children}){
  return <CommentData.CommentProvider>
    {children}
  </CommentData.CommentProvider>
}
export const useComment = ()=>useContext(CommentData)