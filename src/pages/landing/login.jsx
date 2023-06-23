import { useState } from "react";

import { useAuth } from "../../";
import {dummyLoginData,testSignUpData} from '../../utils/constants'
export default function Login() {
  const [signedUpAlready, setSignedUpalready]  = useState(true)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    emailId: "",
  });


  const { loginFunction, signUpFunction } = useAuth();
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginFunction(loginData.username, loginData.password);
  };
  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    signUpFunction(signUpData);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpInput = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };
  if(signedUpAlready)
  return (
    <>
      <div className="loginPage">
        <h3>Login Please</h3>
        <div className="loginForm">
          <form onSubmit={loginSubmitHandler}>
            <label htmlFor="username">Enter Your registered User Name : </label>
            <input
              type="text"
              name="username"
              required
              id="username"
              value={loginData.username}
              onChange={handleInput}
            />
            <label htmlFor="passwordLogin">Enter your Password : </label>
            <input
              type="password"
              name="password"
              id="passwordLogin"
              value={loginData.password}
              onChange={handleInput}
            />
            <button type="submit">Login</button>
            <button
      onClick={(e) => {
        e.preventDefault();
        loginFunction(dummyLoginData.username, dummyLoginData.password)
      }}
    >
      Guest login
    </button>
            <small>New here ?👇</small> <button onClick={()=>{setSignedUpalready(false)}}>Sign Up Now</button>
          </form>
        </div>
      </div>

      
    </>
  );

  else return <div className="signupPage">
  <h3>Sign Up here</h3>
  <form onSubmit={signUpSubmitHandler} method="post">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      required
      value={signUpData.firstName}
      onChange={handleSignUpInput}
    />
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      name="lastName"
      id="lastName"
      required
      value={signUpData.lastName}
      onChange={handleSignUpInput}
    />
    <label htmlFor="username">UserName</label>
    <input
      type="text"
      name="userName"
      id="userName"
      required
      value={signUpData.userName}
      onChange={handleSignUpInput}
    />
    <label htmlFor="emailId">Email</label>
    <input
      type="email"
      name="emailId"
      id="emailId"
      required
      value={signUpData.emailId}
      onChange={handleSignUpInput}
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      required
      value={signUpData.password}
      onChange={handleSignUpInput}
    />
    <button type="submit">Sign Up</button>
    <button
      onClick={(e) => {
        e.preventDefault();
       setSignUpData(testSignUpData)
      }}
    >
      Fill with test data
    </button>
    <small>Already registered ?👇</small> <button onClick={()=>{setSignedUpalready(true)}}>Login here</button>

  </form>
</div>
}
