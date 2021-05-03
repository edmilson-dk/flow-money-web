import styled, { keyframes } from "styled-components";

const switchAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SwitchThemeButtonWrapper = styled.button`
  background: none;
  margin-right: 1rem;
  font-size: 0;
  width: 60px;
  height: 60px;
  transform: rotate(0deg);
  animation: ${switchAnimate} 3s ease-in-out infinite;

  > span {
    width: 100%;
    height: 100%;

    > img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media screen and (max-width: 980px) {
    width: 65px;
    height: 65px;
  }
`;