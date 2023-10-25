import React, { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import { signInAuthWithEmailAndPassword } from "../../../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/button/button.component";
import { StyledForm, StyledLink } from "./sign-in-form.styles";
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
    <StyledForm onSubmit={handleFormSubmit}>
      <div className="form-header-container">
        <h1>Welcome back</h1>
        <p>Sign into your account below</p>
      </div>
      <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
      <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
      <StyledLink style={{ display: "block", marginBottom: "1rem" }} to="/authenticate-user" state={{ linkType: "sign-up" }}>
        Don't have an account? Sign up here
      </StyledLink>
      <CustomButton buttonType="form" type="submit">
        Sign In
      </CustomButton>
    </StyledForm>
  );
};
