import { useState } from "react";
import { createUser } from "../api";
import "./Signup.css";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(firstName, lastName, email);
    await createUser(firstName, lastName, email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-signup-container">
      <form className="login-signup-form" onSubmit={handleSubmit}>
        <label className="login-signup-label" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          required
          className="login-signup-input"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <label className="login-signup-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          required
          className="login-signup-input"
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <label className="login-signup-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="login-signup-input"
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <label className="login-signup-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className="login-signup-input"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-signup-button">
          Create New User
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
