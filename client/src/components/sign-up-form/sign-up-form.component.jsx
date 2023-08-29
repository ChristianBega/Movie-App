import React, { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/button.component";
const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();

  const { username, email, password, confirmPassword, firstName, lastName } = formFields;
  // Resetting formField
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Handle Submit - listens for form submit then runs function
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    }
    try {
      // try creating a user with email and password
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      // using the new user create a userDocument in fireStore DB.
      await createUserDocumentFromAuth(user, { username });
      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <form style={{ border: "1px solid red", maxWidth: "650px", margin: "1rem auto" }} onSubmit={handleFormSubmit}>
      <FormInput label="User Name" type="text" required onChange={handleChange} name="username" value={username} />
      <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
      <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
      <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
      <FormInput label="First Name" type="text" required onChange={handleChange} name="firstName" value={firstName} />
      <FormInput label="Last Name" type="text" required onChange={handleChange} name="lastName" value={lastName} />
      <CustomButton buttonType="form" type="submit">
        Sign Up
      </CustomButton>
    </form>
  );
};
