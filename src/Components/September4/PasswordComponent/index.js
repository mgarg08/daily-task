import React, { useState } from "react";
import "./style.css";

function PasswordComponent({ value, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-group">
      <input
        type={showPassword ? "text" : "password"}
        name="Password"
        value={value}
        onChange={onChange}
        required
      />
      <label>Password</label>
      <button
        className="toggle-password"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
      {error && <div className="password-error-message">{error}</div>}
    </div>
  );
}

export default PasswordComponent;
