import React from "react";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";
import { useLocation } from "react-router-dom";

export const AuthenticationPage = () => {
  const location = useLocation();
  
  return (
    <div>
      {location.state.linkType === "sign-in" && <SignInForm />}
      {location.state.linkType === "sign-up" && <SignUpForm />}
    </div>
  );
};
