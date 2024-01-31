import React, { useState } from "react";
import { StyledSearchBarContainer, StyledSearchBarInput } from "./index.styles";
import { IoIosSearch } from "react-icons/io";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../components/button/button.component";
import useSearch from "./hooks/useSearch.hooks";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error, status, response, sendRequestToTMDBApi } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnSearch = () => {
    sendRequestToTMDBApi(searchTerm);
    if (status === "success") {
      navigate("/preview", { state: { movie: response, previousPath: location.pathname } });
    }
    setSearchTerm("");
  };
  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="search"
        placeholder="Search for movies or tv shows here..."
      />
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.search} onClick={handleOnSearch}>
        <IoIosSearch size="1.5rem" />
      </CustomButton>
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
