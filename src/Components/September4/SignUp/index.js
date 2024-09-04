import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import PasswordComponent from "../PasswordComponent";
import useFormValidation from "../../September4/hook/useFormValidation";
import validate from "../Validate";

function SignUp() {
  const initialState = {
    Name: "",
    "Email Address": "",
    Country: "",
    Phone: "",
    Password: "",
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormValidation(
    initialState,
    validate
  );

  const submitForm = () => {
    console.log("Form submitted successfully", values);
    resetForm(); 
  };

  return (
    <div className="sign-up-wrapper">
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={(e) => handleSubmit(e, submitForm)}>
          {Object.keys(initialState)
            .filter((label) => label !== "Password")
            .map((label) => (
              <div className="input-group" key={label}>
                <input
                  type="text"
                  name={label}
                  value={values[label]}
                  onChange={handleChange}
                  required
                />
                <label>{label}</label>
                {errors[label] && (
                  <span className="error-message">{errors[label]}</span>
                )}
              </div>
            ))}

          <div className="input-group">
            <PasswordComponent
              value={values.Password}
              onChange={handleChange}
              error={errors.Password}
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" required />
            <label>I accept terms & conditions</label>
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <div className="sign-in-link">
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
