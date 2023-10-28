import React, { useContext, useState } from "react";

import { ProfileBackgroundBlur, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";
import { createProfileAccountDocumentIfAuthenticated } from "../../setup/utils/firebase/accountProfiles.firebase";
const profileDATA = [
  {
    profileImg: "",
    profileName: "John Doe",
    colorOne: "rgba(37, 137, 87, 0.655)",
    colorTwo: "rgba(2, 71, 61, 0.7)",
  },
  {
    profileImg: "",
    profileName: "Jane Doe",
    colorOne: "rgba(43, 5, 90, 0.8)",
    colorTwo: "rgba(38, 60, 187, 0.7)",
  },
  {
    profileImg: "",
    profileName: "Jill Doe",
    colorOne: "rgba(137, 37, 37, 0.655)",
    colorTwo: "rgba(71, 40, 2, 0.7)",
  },
  {
    profileImg: "",
    profileName: "Jack Doe",
    colorOne: "rgba(255, 136, 0, 0.4)", // Neon orange (dimmed)
    colorTwo: "rgba(255, 51, 153, 0.4)", // Neon pink (dimmed)
  },
  {
    profileImg: "",
    profileName: "Joey Doe",
    colorOne: "rgba(0, 230, 230, 0.4)", // Neon cyan (dimmed)
    colorTwo: "rgba(255, 102, 204, 0.4)", // Neon magenta (dimmed)
  },
];
const ProfilePage = () => {
  // const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [shuffleAccounts, setShuffleAccounts] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const visibleProfileAccounts = !shuffleAccounts ? profileDATA.slice(0, 3) : profileDATA.slice(3, 6);

  const handleHoverEvent = (index) => {
    setHoveredIndex(index);
  };

  const handleShuffleProfileAccounts = () => {
    setShuffleAccounts(!shuffleAccounts);
    createProfileAccountDocumentIfAuthenticated(currentUser.uid);
  };

  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };
  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        <button onClick={handleShuffleProfileAccounts}>Left</button>
        {visibleProfileAccounts.map(({ profileImg, profileName, colorOne, colorTwo }, index) => {
          return (
            <ProfileAccountCard
              index={index}
              profileImg={profileImg}
              colorOne={colorOne}
              colorTwo={colorTwo}
              profileName={profileName}
              hoveredIndex={hoveredIndex}
              handleHoverEvent={handleHoverEvent}
            />
          );
        })}
        <ProfileBackgroundBlur />
        <button onClick={handleShuffleProfileAccounts}>Right</button>
      </StyledProfileSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div>
    </>
  );
};
export default ProfilePage;
