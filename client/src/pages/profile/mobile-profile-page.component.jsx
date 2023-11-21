import React, { useContext, useState } from "react";
import { ProfileBackgroundBlur, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MobileProfilePage = () => {
  const { currentProfileAccounts } = useContext(UserContext);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProfileAccounts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentProfileAccounts.length) % currentProfileAccounts.length);
  };

  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };

  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        <button style={{ marginRight: "1rem" }} onClick={handlePrev}>
          <BiChevronLeft style={{ fontSize: "2rem" }} />
        </button>
        <ProfileAccountCard
          index={currentIndex}
          profileImg={currentProfileAccounts[currentIndex]?.profileImg}
          colors={currentProfileAccounts[currentIndex]?.colors}
          profileName={currentProfileAccounts[currentIndex]?.profileName}
          profileId={currentProfileAccounts[currentIndex]?.profileId}
          hoveredIndex={currentIndex}
          arrayLength={currentProfileAccounts.length}
          handleHoverEvent={() => null}
        />
        <ProfileBackgroundBlur />

        <button style={{ marginLeft: "1rem" }} onClick={handleNext}>
          <BiChevronRight style={{ fontSize: "2rem" }} />
        </button>
      </StyledProfileSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div>
    </>
  );
};

export default MobileProfilePage;
