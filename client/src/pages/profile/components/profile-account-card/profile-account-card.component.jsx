import React, { useContext, useEffect, useState } from "react";
import { StyledProfileContainer } from "./profile-account-card.styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../setup/contexts/user.context";

const ProfileAccountCard = ({ index, colors, profileImg, profileName, hoveredIndex, handleHoverEvent, arrayLength, profileId }) => {
  const [rgbaColors, setRgbaColors] = useState();
  const { setCurrentProfileId } = useContext(UserContext);
  useEffect(() => {
    const formatRgbaColors = () => {
      const colorsArrayToString = colors && colors.toString();
      const regex = /(rgba\([^)]+\))/g;
      const matches = colorsArrayToString && colorsArrayToString.match(regex);

      if (matches) {
        setRgbaColors(matches);
      }
    };
    formatRgbaColors();
  }, [colors]);

  const navigate = useNavigate();

  const handleCreateProfileAccount = () => {
    navigate("/create-profile-account");
  };
  const handleChangingProfileAccount = () => {
    setCurrentProfileId(profileId);
    navigate("/");
  };
  return (
    <StyledProfileContainer
      onClick={profileName === "Create an account" ? handleCreateProfileAccount : handleChangingProfileAccount}
      onMouseEnter={() => handleHoverEvent(index)}
      onMouseLeave={() => handleHoverEvent(arrayLength === 1 ? 0 : 1)}
      isActive={hoveredIndex === index ? true : false}
      colors={rgbaColors && rgbaColors}
      key={index}
      id={index}
      className="profile-container"
    >
      <span className="profile-text-wrapper">
        <div className="profile-image-wrapper">
          <img src={profileImg} alt="profile-img" />
        </div>
        <p>{profileName}</p>
        {/* <p>{profileId}</p> */}
      </span>
    </StyledProfileContainer>
  );
};

export default ProfileAccountCard;
