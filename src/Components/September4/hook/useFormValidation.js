import { useState } from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = (event, callback) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(values).forEach((key) => {
      const error = validate(key, values[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useFormValidation;
