import React from "react";
import { StyledSearchBarContainer, StyledSearchBarInput } from "./index.styles";
import { IoIosSearch } from "react-icons/io";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../components/button/button.component";

const SearchBar = () => {
  const handleOnSearch = () => {
    console.log("test");
  };
  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput type="search" placeholder="Search for movies or tv shows here..." />
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.search} onClick={handleOnSearch}>
        <IoIosSearch size="1.5rem" />
        <p>Search</p>
      </CustomButton>
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
