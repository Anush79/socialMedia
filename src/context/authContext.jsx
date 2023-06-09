import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { loginService, signUpService } from "../services/loginService";
import { useNavigate, useLocation , Navigate} from "react-router-dom";

const AuthContext = createContext();

const localStorageData = JSON.parse(localStorage.getItem("loginDetails"));
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(localStorageData?.user);
  const [token, setToken] = useState(localStorageData?.token);

  const navigate = useNavigate();
  const location = useLocation()
  const loginFunction = async (username, password) => {
    try {
      const response = await loginService(username, password);
      const {
        data: { encodedToken, foundUser },
        status,
      } = response;

      setToken(encodedToken);
      setCurrentUser(() => foundUser);
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({ user: foundUser, token: encodedToken })
      );
      if (status === 200) {
        toast.success(`Welcome back ${foundUser?.firstName}`);
        if (location?.state?.from?.pathname)
          navigate(location?.state?.from?.pathname);
        else navigate("/home/feed", { replace: true });
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
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({ user: createdUser, token: encodedToken })
      );
      console.log(createdUser, "output")

      if (status === 201) {
        toast.success(`Hello ${createdUser?.firstName}! Welcome to Tweetopia`);
    
        navigate(`/home/profile/${createdUser?.username}/${createdUser?._id}`,{state:{from : location} } );
   
    }
    } catch (error) {
      console.log(error);
    }
  };

  const logOutFunction = async () => {
    setToken(() => null);
    setCurrentUser(() => null);
    toast.success("logged out successfully");
    localStorage.removeItem("loginDetails");
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{
        loginFunction,
        signUpFunction,
        logOutFunction,
        token,
        setCurrentUser,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
