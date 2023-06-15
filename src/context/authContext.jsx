import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { loginService, signUpService } from "../services/loginService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();

  const navigate = useNavigate();

  const loginFunction = async (username, password) => {
    try {
      const response = await loginService(username, password);
      const {
        data: { encodedToken, foundUser, error },
        status,
      } = response;
      setToken(encodedToken);
      setCurrentUser(() => foundUser);
      if (status === 200) {
        toast.success(`Welcome back ${foundUser.firstName}`);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUpFunction = async (signUpData) => {
    try {
      const response = await signUpService(signUpData);
      const {
        data: { createdUser, encodedToken },
        status,
      } = response;
      setToken(encodedToken);
      setCurrentUser(() => createdUser);
      if (status === 201) {
        toast.success(`Hello ${createdUser.firstName}! Welcome to Tweetopia`);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginFunction, signUpFunction,token ,currentUser}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
