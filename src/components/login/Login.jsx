import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = ({authRole}) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "avanitalati@gmai.com" && password === "@1234") {
      navigate("/timer");
    }
  };
  return (
    <>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <span className="loginText">Login</span>
          <div className="inputFieldContainer">
            <label htmlFor="" className="label">
              {" "}
              Email:{" "}
            </label>
            <input
              type="text"
              className="emailtext"
              placeholder="Please Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="" className="label">
              {" "}
              Password:{" "}
            </label>
            <input
              type="text"
              className="emailtext"
              placeholder="Please Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btnContainer">
            <button className="submitBtn">Submit</button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default Login;
