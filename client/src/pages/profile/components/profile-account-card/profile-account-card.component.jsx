import React from "react";
import { StyledProfileContainer } from "./profile-account-card.styles";

const ProfileAccountCard = ({ index, colorOne, colorTwo, profileImg, profileName, hoveredIndex, handleHoverEvent }) => {
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
};

export default ProfileAccountCard;
