import React, { useState } from "react";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { ProfileBackgroundBlur, ProfileOrb, StyledProfileContainer, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";

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
export const ProfilePage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };

  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        {profileDATA.map(({ profileImg, profileName, colorOne, colorTwo }, index) => {
          return (
            <StyledProfileContainer
              key={index}
              id={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(1)}
              className="profile-container"
            >
              <ProfileOrb isActive={hoveredIndex === index && true} colorOne={colorOne} colorTwo={colorTwo} />
              <img src={profileImg} alt="profile-img" />
              <p>{profileName}</p>
            </StyledProfileContainer>
          );
        })}
        <ProfileBackgroundBlur />
      </StyledProfileSection>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div>
    </>
  );
};
