import { styled } from "styled-components";
import { HEADER_2, PADDING_SM, PREVIEW_HEADER_2 } from "../../index.styles";

// export const

export const PreviewContentContainer = styled.div`
  max-width: 600px;
  ${PADDING_SM}
  margin-top: 1rem;

  & .movie-title {
    ${PREVIEW_HEADER_2}
    display: inline;
  }
  & .movie-release-date {
    margin-left: 1rem;
    display: inline;
  }
  & .movie-details {
    display: flex;
    align-items: center;
    gap: 0.2;
    margin: 0.3rem 0 1rem 0;
    img {
      max-width: 25px;
      margin-right: 0.3rem;
    }
    small {
      line-height: 24px;
      display: inline;
    }
  }
  & .movie-overview {
    line-height: 22px;
    margin-bottom: 1rem;
  }
`;
