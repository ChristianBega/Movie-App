import React, { useContext, useEffect, useState } from "react";

import { ProfileBackgroundBlur, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";

const ProfilePage = () => {
  // const navigate = useNavigate();
  const { currentProfileAccounts } = useContext(UserContext);
  const navigate = useNavigate();
  const [shuffleAccounts, setShuffleAccounts] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(1);

  // console.log(currentProfileAccounts);

  // const visibleProfileAccounts = !shuffleAccounts ? currentProfileAccounts.slice(0, 3) : currentProfileAccounts.slice(3, 6);

  const handleHoverEvent = (index) => {
    setHoveredIndex(index);
  };

  const handleShuffleProfileAccounts = () => {
    setShuffleAccounts(!shuffleAccounts);
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
        {currentProfileAccounts?.map(({ profileImg, profileName, colors }, index) => {
          return (
            <ProfileAccountCard
              index={index}
              profileImg={profileImg}
              colors={colors}
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
