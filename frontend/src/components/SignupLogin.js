import React from "react";
import { useState, useContext } from "react";
import "./css/SignupLogin.css";
import { useNavigate } from "react-router-dom";
import alertContext from "./Alert/alertContext";
import Alert from "./Alert";
import girl from "./images/image-2.png";
import plant from "./images/image-1.png";
import Animation from "./Animation";

const SignupLogin = () => {
  const context = useContext(alertContext);
  const { showAlert } = context;

  const [isSignup, setIsSignup] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (user == "" || password == "") {
      showAlert("Incomplete Credentials", "danger");
      navigate("/");
    } else {
      showAlert("Login Successful", "success");
      localStorage.setItem("token", true);
      navigate("/contact");
    }

    console.log("Username:", user);
    console.log("Password:", password);

    setUser("");
    setPassword("");
  };

  return (
    <>
    <Animation/>
      <div className="wrap">
        <div className="inner">
          <div className="right-alert">
            <Alert/>
          </div>
          <img src={girl} alt="" className="image-2"/>
          <form className="signuplogin">
            <h3>{isSignup ? "Signup" : "Login"}</h3>

            <i className="far fa-user"></i>
            <input
              type="text"
              className="input mb-4"
              placeholder="Username"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />

            <i className="fas fa-user-lock"></i>
            <input
              type="password"
              className="input mb-5"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              id="main"
              className="mb-3"
              onClick={handleLogin}
            >
              {isSignup ? "Signup" : "Login"}
            </button>
          </form>
          <img src={plant} alt="" className="image-1" width="12%"/>


          <br />

          <p>
            {isSignup ? "Already have an account?" : "New Account?"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleToggle} className="loginbtn">
              {isSignup ? "Login" : "Signup"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupLogin;
