import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from "../../";
import { dummyLoginData, testSignUpData } from "../../utils/constants";
import { toast } from "react-toastify";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [signedUpAlready, setSignedUpalready] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    username: "",
    password: "",
    confirmPassword:"",
    bio: "",
    website: "",
    profileAvatar: "",
    backgroundImage: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1688371999/tweetopia/hyacinth-1398839_1280_bpodyt.jpg",
  });

  const { loginFunction, signUpFunction } = useAuth();
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginFunction(loginData.username, loginData.password);
  };
  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    if(signUpData.password !== signUpData.confirmPassword)
    toast("Passwords does not match")
    else
    signUpFunction(signUpData);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpInput = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
    
  };

  if (signedUpAlready)
    return (
      <>
      {/* <img src="\assets\loginbg.jpg" alt="" className="landingPageImage" /> */}
        <div className="loginPage">
          <h3>Login Please</h3>
          <div className="loginForm">
            <form onSubmit={loginSubmitHandler}>
              <label htmlFor="username">
                Enter Your registered User Name :{" "}
              </label>
              <input
                type="text"
                name="username"
                required
                id="userName"
                value={loginData.username}
                onChange={handleInput}
              />
              <label htmlFor="passwordLogin">Enter your Password : </label>
              <div className="passwordInput">
                <input
                type={showPassword?"text":"password"}
                name="password"
                id="passwordLogin"
                value={loginData.password}
                onChange={handleInput}
              />
              {
                showPassword ? <VisibilityIcon onClick={()=>{
                  setShowPassword(!showPassword)
                }}/>:<VisibilityOffIcon  onClick={()=>{
                  setShowPassword(!showPassword)
                }}/>
              }
              </div>
              
              <button type="submit">Login</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  loginFunction(
                    dummyLoginData.username,
                    dummyLoginData.password
                  );
                }}
              >
                Guest login
              </button>
              <small>New here ?👇</small>{" "}
              <button
                onClick={() => {
                  setSignedUpalready(false);
                }}
              >
                Sign Up Now
              </button>
            </form>
          </div>
        </div>
      </>
    );
  else
    return (
      <div className="signupPage">
      {/* <img src="\assets\loginbg.jpg" className="landingPageImage" alt="" /> */}

        <h3>Sign Up here</h3>
        <form onSubmit={signUpSubmitHandler} method="post">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
            value={signUpData.firstName}
            onChange={handleSignUpInput}
          />
         
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
            value={signUpData.lastName}
            onChange={handleSignUpInput}
          />
     
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={signUpData.username}
            onChange={handleSignUpInput}
          />
          <input
            type="email"
            name="emailId"
            id="emailId"
            placeholder="Email id"
            required
            value={signUpData.emailId}
            onChange={handleSignUpInput}
          />
       
          <div className="passwordInput">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            
            value={signUpData.password}
            onChange={handleSignUpInput}
          />  
          </div>
      
          <div className="passwordInput">
          <input
            type={showPassword?"text":"password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            value={signUpData.confirmPassword}
            onChange={handleSignUpInput}
          />   {
            showPassword ? <VisibilityIcon onClick={()=>{
              setShowPassword(!showPassword)
            }}/>:<VisibilityOffIcon onClick={()=>{
              setShowPassword(!showPassword)
            }} />
          }
          </div>
          <button type="submit">Sign Up</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSignUpData(testSignUpData);
            }}
          >
            Fill with test data
          </button>
          <small>Already registered ?👇</small>{" "}
          <button
            onClick={() => {
              setSignedUpalready(true);
            }}
          >
            Login here
          </button>
        </form>
      </div>
    );
}
