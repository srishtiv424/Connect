import React, { useState } from "react";
import style from "./login.module.css";
import logo_big from "../../assets/logo_big.png";
import { signup, login, resetPass } from "../../config/firebase";
function Login() {
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (toggle === false) signup(username, email, password);
    else login(email, password);
  };
  return (
    <div className={style.login}>
      <img src={logo_big} className={style.logo} alt="Logo" />
      <form className={style.loginForm} onSubmit={submitHandler}>
        <h2>{toggle === true ? "Login" : "Sign Up"}</h2>
        {!toggle && (
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className={style.formInput}
            required
          />
        )}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email address"
          className={style.formInput}
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className={style.formInput}
          required
        />
        <div className={style.loginTerm}>
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <button type="submit">{toggle === true ? "Login" : "Sign Up"}</button>
        
        <div className={style.loginForgot}>
          <p className={style.loginToggle}>
            {toggle ? "Create an account  " : "Already have an account?  "}
            <span onClick={() => setToggle((prev) => !prev)}> Click Here</span>
          </p>

          {toggle && (
            <p className={style.loginToggle}>
              {" "}
              Forgot Password?
              <span onClick={() => resetPass(email)}> Reset here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
