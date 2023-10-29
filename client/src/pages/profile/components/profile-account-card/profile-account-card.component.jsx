import React, { useEffect, useState } from "react";
import { StyledProfileContainer } from "./profile-account-card.styles";
import { useNavigate } from "react-router-dom";

const ProfileAccountCard = ({ index, colors, profileImg, profileName, hoveredIndex, handleHoverEvent }) => {
  const [rgbaColors, setRgbaColors] = useState();
  useEffect(() => {
    const splitString = () => {
      const colorsArrayToString = colors.toString();
      const cleanedString = colorsArrayToString.replace(/(rgba\([^)]+\))/g, '"$1"');
      const rgbaArray = cleanedString.split(",");
      setRgbaColors(rgbaArray);
    };
    splitString();
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
      // colors={rgbaColors}
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
