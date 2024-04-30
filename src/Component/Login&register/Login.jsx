import React, { useState } from "react";
import { useDispatch,useSelector  } from 'react-redux';
import { loginSuccess,isStudent,isTeacher,setName } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import img from "./LoginArt.png";
import iconGoogle from "./Google.png";
import iconFacebook from "./Facebook.png";
import "./Login.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }
    try {
      // Make a POST request to the authentication endpoint
      const response = await axios.post(
        'https://edume-app-88352f017fde.herokuapp.com/auth/login',
        { username, password }
      );
      // Handle successful login
      console.log("Login successful:", response.data);
      console.log("role:", response.data.role);
      if(response.data.role==='student') {
        dispatch(isStudent());
      }else {
        dispatch(isTeacher());
      }
      let name = response.data.firstName + " " + response.data.lastName;
      dispatch(setName(name));
      
      dispatch(loginSuccess());
      toast.success(`Wellcome ${response.data.firstName}😊`);
       navigate('/Home');
      
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/Home" />;
  // }

  return (
    <div className="container-fluid">
      <div className="row login-container">
        <div className="col-md-7 d-flex justify-content-center align-items-center bg-light">
          <form onSubmit={handleSubmit} className="p-5">
            <h3 className="text-center mb-4">Welcome Back 😊</h3>
            <p className="text-center mb-4">
              Today is a new day. Its your day. You shape it. Sign in to start
              studying.
            </p>
            {error && <p className="text-danger mb-3">{error}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary w-100 mb-3">Sign in</button>
            <div className="mt-3 text-center">
              <div
                style={{
                  borderTop: "1px solid #ccc",
                  width: "100%",
                  margin: "10px 0px 30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "0",
                }}
              >
                <span
                  className="or-text heading-font-l"
                  style={{ background: "white" }}
                >
                  OR
                </span>
              </div>
            </div>

            <button className="btn btn-outline-success w-100 mb-3">
              <img
                style={{ width: "20px", marginRight: "10px" }}
                src={iconGoogle}
                alt="Google Icon"
                className="icon"
              />
              Sign in with Google
            </button>

            <button className="btn btn-outline-primary w-100 mb-3">
              <img
                style={{ width: "20px", marginRight: "10px" }}
                src={iconFacebook}
                alt="Facebook Icon"
                className="icon"
              />
              Sign in with Facebook
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <a href="/Signup" className="signup-link">
                Sign up
              </a>
            </p>
          </form>
        </div>
        <div className="Login-Img col-md-5 m-0 p-0 d-flex justify-content-center">
          <img src={img} alt="LoginArt" className="w-100  m-1" />
        </div>
      </div>
    </div>
  );
}
