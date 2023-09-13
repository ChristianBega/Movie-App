import React, { useState } from "react";

import { ProfileBackgroundBlur, StyledProfileContainer, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";

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
];
const ProfilePage = () => {
  // const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const handleHoverEvent = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        {profileDATA.map(({ profileImg, profileName, colorOne, colorTwo }, index) => {
          return (
            <StyledProfileContainer
              onMouseEnter={() => handleHoverEvent(index)}
              onMouseLeave={() => handleHoverEvent(1)}
              isActive={hoveredIndex === index ? true : false}
              colorOne={colorOne}
              colorTwo={colorTwo}
              key={index}
              id={index}
              className="profile-container"
            >
              <span className="profile-text-wrapper">
                <img src={profileImg} alt="profile-img" />
                <p>{profileName}</p>
              </span>
            </StyledProfileContainer>
          );
        })}
        <ProfileBackgroundBlur />
      </StyledProfileSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton>Sign Out</CustomButton>
      </div>
    </>
  );
};
export default ProfilePage;
