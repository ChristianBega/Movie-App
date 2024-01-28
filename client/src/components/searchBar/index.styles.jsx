import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-right: 1rem;
`;
export const StyledSearchBarInput = styled.input`
  border: 2px solid #625e5e;
  color: #ffffff;
  background-color: #524e4ecc;

  padding: 0.8rem;
  border-radius: 50px;
  width: 100%;
  &:focus {
    /* background-color: #dad9d9c4; */
  }
`;
