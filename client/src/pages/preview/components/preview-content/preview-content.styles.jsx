import { styled } from "styled-components";
import { PADDING_SM, PREVIEW_HEADER_2, DEFAULT_ALERT } from "../../../../index.styles";
import { device } from "../../../../device-breakpoints.styles";

export const PreviewContentContainer = styled.div`
  ${PADDING_SM}
  width: 100vw;
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
  }

  @media ${device.desktop} {
    padding: 4rem;
    flex-direction: row;
  }
  @media ${device.desktopLarge} {
    flex-direction: row;
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
    flex-direction: column;
    gap: 1rem;
    @media ${device.laptop} {
      flex-direction: row;
      gap: 0.5rem;
    }
    & .success-alert-add {
      ${DEFAULT_ALERT}
      border: 2px solid #4caf4fbf;
    }
    & .success-alert-remove {
      ${DEFAULT_ALERT}
      border: 2px solid #afad4cbe;
    }
  }
`;
