import React from "react";
import "./style.css";
import PasswordComponent from "../PasswordComponent";

function SignIn() {
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-container">

        <h2>Sign in</h2>

        <div className="sign-in-input-group">
          <input type="text" required />
          <label>Email Address</label>
        </div>
<div className="sign-in-input-group">
<PasswordComponent/>
    </div>
        <button type="submit" className="login-btn">
            Login
          </button>
      </div>
    </div>
  );
}
export default SignIn;
