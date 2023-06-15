import axios from "axios";
import { toast } from "react-toastify";
export const loginService = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export const signUpService = async ({
  firstName,
  lastName,
  userName,
  password,
}) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      userName,
      password,
    });
    if (response.status === 201) return response;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
