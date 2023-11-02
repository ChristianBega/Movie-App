// import React, { useContext, useEffect, useState } from "react";

import { ProfileBackgroundBlur, StyledProfilePageHeader, StyledProfileSection } from "./profile-page.styles";
import CustomButton from "../../components/button/button.component";
import { signOutUser } from "../../setup/utils/firebase/authentication.firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../setup/contexts/user.context";
import ProfileAccountCard from "./components/profile-account-card/profile-account-card.component";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { device } from "../../device-breakpoints.styles";
// const ProfilePage = () => {
//   const { currentProfileAccounts } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [shuffleAccounts, setShuffleAccounts] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(1);
//   const [currentVisibleProfileAccount, setCurrentVisibleProfileAccount] = useState();
//   const isLaptop = useMediaQuery({ query: device.laptop });

//   // useEffect(() => {
//   //   if (currentProfileAccounts) {
//   //     const visibleProfileAccounts = !shuffleAccounts ? currentProfileAccounts.slice(0, 3) : currentProfileAccounts.slice(3, 6);
//   //     setCurrentVisibleProfileAccount(visibleProfileAccounts);
//   //     if (visibleProfileAccounts.length == 1) {
//   //       setHoveredIndex(0);
//   //     }
//   //   } else {
//   //     console.log("fetching profiles");
//   //   }
//   // }, [currentProfileAccounts, shuffleAccounts]);

//   useEffect(() => {
//     if (currentProfileAccounts) {
//       const visibleProfileAccounts = !shuffleAccounts ? currentProfileAccounts.slice(0, 3) : currentProfileAccounts.slice(3, 6);
//       setCurrentVisibleProfileAccount(visibleProfileAccounts);
//       if (visibleProfileAccounts.length == 1) {
//         setHoveredIndex(0);
//       }
//     } else {
//       console.log("fetching profiles");
//     }
//   }, [currentProfileAccounts, shuffleAccounts]);

//   const handleHoverEvent = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleShuffleProfileAccounts = () => {
//     setShuffleAccounts(!shuffleAccounts);
//   };

//   const handleSignOut = () => {
//     signOutUser();
//     navigate("/");
//   };

//   const renderRightButton = () =>
//     currentProfileAccounts?.length > 3 ? (
//       <button style={{ marginLeft: "1rem" }} onClick={handleShuffleProfileAccounts}>
//         <BiChevronRight style={{ fontSize: "2rem" }} />
//       </button>
//     ) : null;

//   const renderLeftButton = () =>
//     currentProfileAccounts?.length > 3 ? (
//       <button style={{ marginRight: "1rem" }} onClick={handleShuffleProfileAccounts}>
//         <BiChevronLeft style={{ fontSize: "2rem" }} />
//       </button>
//     ) : null;

//   const renderProfileCards = () => {
//     if (isLaptop) {
//       return currentVisibleProfileAccount?.map(({ profileImg, profileName, colors }, index) => {
//         return (
//           <ProfileAccountCard
//             index={index}
//             profileImg={profileImg}
//             colors={colors}
//             profileName={profileName}
//             hoveredIndex={hoveredIndex}
//             handleHoverEvent={handleHoverEvent}
//             arrayLength={currentVisibleProfileAccount?.length}
//           />
//         );
//       });
//     } else {
//       const { profileImg, profileName, colors } = currentVisibleProfileAccount[hoveredIndex];
//       return (
//         <ProfileAccountCard
//           index={hoveredIndex}
//           profileImg={profileImg}
//           colors={colors}
//           profileName={profileName}
//           hoveredIndex={hoveredIndex}
//           handleHoverEvent={handleHoverEvent}
//           arrayLength={currentVisibleProfileAccount.length}
//         />
//       );
//     }
//   };

//   return (
//     <>
//       <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
//       <StyledProfileSection>
//         {renderLeftButton()}
//         {renderProfileCards()}
//         {/* {currentVisibleProfileAccount?.map(({ profileImg, profileName, colors }, index) => {
//           return (
//             <ProfileAccountCard
//               index={index}
//               profileImg={profileImg}
//               colors={colors}
//               profileName={profileName}
//               hoveredIndex={hoveredIndex}
//               handleHoverEvent={handleHoverEvent}
//               arrayLength={currentVisibleProfileAccount.length}
//             />
//           );
//         })} */}
//         <ProfileBackgroundBlur />
//         {renderRightButton()}
//       </StyledProfileSection>
//       <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//         <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
//       </div>
//     </>
//   );
// };
// export default ProfilePage;
import React, { useContext, useEffect, useState } from "react";

// ... other imports ...

const ProfilePage = () => {
  const { currentProfileAccounts } = useContext(UserContext);
  const navigate = useNavigate();
  const [shuffleAccounts, setShuffleAccounts] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0); // Start with the first card
  const [currentVisibleProfileAccount, setCurrentVisibleProfileAccount] = useState();
  const isTablet = useMediaQuery({ query: device.tablet });

  useEffect(() => {
    if (currentProfileAccounts) {
      const visibleProfileAccounts = !shuffleAccounts ? currentProfileAccounts.slice(0, 3) : currentProfileAccounts.slice(3, 6);
      setCurrentVisibleProfileAccount(visibleProfileAccounts);
      if (visibleProfileAccounts.length === 1) {
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

  const renderProfileCards = () => {
    if (isTablet) {
      return currentVisibleProfileAccount?.map(({ profileImg, profileName, colors }, index) => {
        return (
          <ProfileAccountCard
            index={index}
            profileImg={profileImg}
            colors={colors}
            profileName={profileName}
            hoveredIndex={hoveredIndex}
            handleHoverEvent={handleHoverEvent}
            arrayLength={currentVisibleProfileAccount.length}
          />
        );
      });
    } else {
      if (currentVisibleProfileAccount.length > 0) {
        const currentIndex = Math.min(hoveredIndex, currentVisibleProfileAccount.length - 1);
        const { profileImg, profileName, colors } = currentVisibleProfileAccount[currentIndex];
        return (
          <ProfileAccountCard
            index={currentIndex}
            profileImg={profileImg}
            colors={colors}
            profileName={profileName}
            hoveredIndex={currentIndex}
            handleHoverEvent={handleHoverEvent}
            arrayLength={currentVisibleProfileAccount.length}
          />
        );
      } else {
        return null; // You can add a message or placeholder here
      }
    }
  };

  return (
    <>
      <StyledProfilePageHeader>Who's Watching?</StyledProfilePageHeader>
      <StyledProfileSection>
        {renderLeftButton()}
        {renderProfileCards()}
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
