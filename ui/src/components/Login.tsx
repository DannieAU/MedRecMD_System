import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, getUser } from "../api";
import { checkPassword } from "../util";
import "./Login.css";
interface LoginProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const Login: React.FC<LoginProps> = ({ setIsLogin, setUser }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: User = await getUser(username);
    console.log(user);
    checkPassword(password, user.password).then((isMatch) => {
      if (isMatch) {
        setIsLogin(true);
        setUser(user);
        navigate("/");
      } else {
        setErrorMessage("Access Denied");
      }
    });
  };

  return (
    <div className="login-signup-container">
      <form className="login-signup-form">
        <label className="login-signup-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="login-signup-input"
          onChange={handleEmailChange}
        />
        <label className="login-signup-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className="login-signup-input"
          onChange={handlePasswordChange}
        />
        <button
          type="submit"
          className="login-signup-button"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="signup-button">
          <Link to="/signup">Create New User</Link>
        </div>
        <div className="error-message">
          <span>{errorMessage}</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
