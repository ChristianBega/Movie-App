import { styled } from "styled-components";
import { PADDING_SM, PREVIEW_HEADER_2 } from "../../../../index.styles";
import { device } from "../../../../device-breakpoints.styles";

// export const

export const PreviewContentContainer = styled.div`
  ${PADDING_SM}
  width: 90vw;
  margin-top: 1rem;

  @media ${device.laptop} {
    padding: 2rem;
  }

  @media ${device.desktop} {
    padding: 4rem;
  }
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
    .genres-container {
      max-width: 90%;
      margin-left: 1rem;
      gap: 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      @media ${device.desktop} {
        margin-left: 2rem;
      }
      .genre {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        min-width: 75px;
      }
    }
  }
  & .movie-overview {
    line-height: 22px;
    margin-bottom: 1rem;
    display: block;
    max-width: 650px;
  }
  .button-container {
    display: flex;
    gap: 0.5rem;
    & .success-alert {
      border-radius: 12px;
      border: 2px solid #4caf4fbf;
      color: #fff;
      padding: 10px;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25rem;
    }
  }
`;
