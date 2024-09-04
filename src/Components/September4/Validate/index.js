export default function validate(name, value) {
    let error = "";
    switch (name) {
      case "Name":
        if (!value) {
          error = "Name is required.";
        }
        break;
      case "Email Address":
        if (!value) {
          error = "Email Address is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email Address is invalid.";
        }
        break;
      case "Country":
        if (!value) {
          error = "Country is required.";
        }
        break;
      case "Phone":
        if (!value) {
          error = "Phone number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Phone number is invalid. It should be 10 digits.";
        }
        break;
      case "Password":
        if (!value) {
          error = "Password is required.";
        } else if (value.length < 6) {
          error = "Password should be at least 6 characters.";
        }
        break;
      default:
        break;
    }
    return error;
  }
  