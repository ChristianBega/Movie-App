import React from "react";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
export const ProfilePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };
  return (
    <div>
      Profile Page
      <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
    </div>
  );
};
