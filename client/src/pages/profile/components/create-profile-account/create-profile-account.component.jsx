import React from "react";
import { StyledProfilePageHeader, StyledProfileSection } from "../../profile-page.styles";
import { CreateProfileAccountForm } from "../create-profile-account-form/create-profile-account-form.component";

const CreateProfileAccount = () => {
  return (
    <>
      <StyledProfilePageHeader>Create a new profile Account</StyledProfilePageHeader>
      <StyledProfileSection>
        <CreateProfileAccountForm />
      </StyledProfileSection>
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div> */}
    </>
  );
};

export default CreateProfileAccount;
