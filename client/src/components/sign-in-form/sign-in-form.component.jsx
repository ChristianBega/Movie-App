import React, { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user found!");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <form style={{ border: "1px solid red", maxWidth: "650px", margin: "1rem auto" }} onSubmit={handleFormSubmit}>
      <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
      <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
      <CustomButton buttonType="form" type="submit">
        Sign In
      </CustomButton>
    </form>
  );
};
