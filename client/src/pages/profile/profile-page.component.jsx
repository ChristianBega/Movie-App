import React, { useContext, useEffect, useState } from "react";

import { ProfileBackgroundBlur, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProfilePage = () => {
  const { currentProfileAccounts } = useContext(UserContext);
  const navigate = useNavigate();
  const [shuffleAccounts, setShuffleAccounts] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const [currentVisibleProfileAccount, setCurrentVisibleProfileAccount] = useState();

  useEffect(() => {
    if (currentProfileAccounts) {
      const visibleProfileAccounts = !shuffleAccounts ? currentProfileAccounts.slice(0, 3) : currentProfileAccounts.slice(3, 6);
      setCurrentVisibleProfileAccount(visibleProfileAccounts);
      if (visibleProfileAccounts.length == 1) {
        setHoveredIndex(0);
      }
    } else {
      console.log("fetching profiles");
    }
  }, [currentProfileAccounts, shuffleAccounts]);

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

  const renderRightButton = () =>
    currentProfileAccounts?.length > 3 ? (
      <button style={{ marginLeft: "1rem" }} onClick={handleShuffleProfileAccounts}>
        <BiChevronRight style={{ fontSize: "2rem" }} />
      </button>
    ) : null;

  const renderLeftButton = () =>
    currentProfileAccounts?.length > 3 ? (
      <button style={{ marginRight: "1rem" }} onClick={handleShuffleProfileAccounts}>
        <BiChevronLeft style={{ fontSize: "2rem" }} />
      </button>
    ) : null;

  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        {renderLeftButton()}
        {currentVisibleProfileAccount?.map(({ profileImg, profileName, colors }, index) => {
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
        {renderRightButton()}
      </StyledProfileSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div>
    </>
  );
};
export default ProfilePage;
