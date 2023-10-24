import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinnerCss = css`
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      animation: ${spin} 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
    }

    div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #e50914;
      margin: -4px 0 0 -4px;
    }

    div:nth-child(1) {
      animation-delay: -0.036s;

      &:after {
        top: 63px;
        left: 63px;
      }
    }

    div:nth-child(2) {
      animation-delay: -0.072s;

      &:after {
        top: 68px;
        left: 56px;
      }
    }

    div:nth-child(3) {
      animation-delay: -0.108s;

      &:after {
        top: 71px;
        left: 48px;
      }
    }

    div:nth-child(4) {
      animation-delay: -0.144s;

      &:after {
        top: 72px;
        left: 40px;
      }
    }

    div:nth-child(5) {
      animation-delay: -0.18s;

      &:after {
        top: 71px;
        left: 32px;
      }
    }

    div:nth-child(6) {
      animation-delay: -0.216s;

      &:after {
        top: 68px;
        left: 24px;
      }
    }

    div:nth-child(7) {
      animation-delay: -0.252s;

      &:after {
        top: 63px;
        left: 17px;
      }
    }

    div:nth-child(8) {
      animation-delay: -0.288s;

      &:after {
        top: 56px;
        left: 12px;
      }
    }
  }
`;

export const StyledLoadingScreenWrapper = styled.div`
  ${spinnerCss}
  background-color: #12151e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  margin: 0;

  h1 {
    text-align: center;
    font-size: 30px;
    letter-spacing: 0.2rem;
    color: #e50914c0;
  }
`;
