import React, { useEffect, useState } from "react";
import { StyledProfileContainer } from "./profile-account-card.styles";
import { useNavigate } from "react-router-dom";

const ProfileAccountCard = ({ index, colors, profileImg, profileName, hoveredIndex, handleHoverEvent }) => {
  const [rgbaColors, setRgbaColors] = useState();
  useEffect(() => {
    const formatRgbaColors = () => {
      const colorsArrayToString = colors.toString();
      const regex = /(rgba\([^)]+\))/g;
      const matches = colorsArrayToString.match(regex);

      if (matches) {
        setRgbaColors(matches);
      }
    };
    formatRgbaColors();
  }, [colors]);

  const navigate = useNavigate();

  const handleCreateProfileAccount = () => {
    navigate("/create-profile-account");
    console.log("created");
  };
  const handleChangingProfileAccount = () => {
    console.log("self destruct");
  };
  return (
    <StyledProfileContainer
      onClick={profileName === "Create an account" ? handleCreateProfileAccount : handleChangingProfileAccount}
      onMouseEnter={() => handleHoverEvent(index)}
      onMouseLeave={() => handleHoverEvent(1)}
      isActive={hoveredIndex === index ? true : false}
      colors={rgbaColors && rgbaColors}
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
};

export default ProfileAccountCard;
