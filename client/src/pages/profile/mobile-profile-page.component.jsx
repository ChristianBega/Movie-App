import React, { useContext, useState } from "react";
import { ProfileBackgroundBlur, StyledProfileSection } from "./profile-page.styles";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MobileProfilePage = () => {
  const { currentProfileAccounts } = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProfileAccounts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentProfileAccounts.length) % currentProfileAccounts.length);
  };

  return (
    <>
      <StyledProfileSection>
        <button style={{ marginRight: "1rem" }} onClick={handlePrev}>
          <BiChevronLeft style={{ fontSize: "2rem" }} />
        </button>
        <ProfileAccountCard
          key={currentIndex}
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
    </>
  );
};

export default MobileProfilePage;
