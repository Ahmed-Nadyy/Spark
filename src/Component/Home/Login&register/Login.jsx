import React, { useState } from "react";
import img from "./LoginArt.png";
import iconGoogle from "./Google.png";
import iconFacebook from "./Facebook.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }
    // Add authentication logic here
    setError(""); // Clear any previous errors
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 d-flex justify-content-center align-items-center bg-light">
          <form onSubmit={handleSubmit} className="p-5">
            <h3 className="text-center mb-4">Welcome Back 😊</h3>
            <p className="text-center mb-4">
              Today is a new day. It's your day. You shape it. Sign in to start
              studying.
            </p>
            {error && <p className="text-danger mb-3">{error}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter Your Username"
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
              <a href="#" className="signup-link">
                Sign up
              </a>
            </p>
            
          </form>
        </div>
        <div className="col-md-5 m-0 p-0 d-flex align-items-center justify-content-center">
          <img src={img} alt="LoginArt" className="w-100  m-1" />
        </div>
      </div>
    </div>
  );
}
