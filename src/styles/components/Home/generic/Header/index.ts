import styled, { keyframes } from "styled-components";

const switchAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: auto;
    height: auto;
    max-width: 200px;

    @media screen and (max-width: 620px) {
      max-width: 170px;
    }

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  > nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > nav button {
    background: none;
    margin-right: 2rem;
    font-size: 0;
    width: 35px;
    height: 35px;
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
  }

  > nav a {
    width: 100px;
    display: block;
    padding: 1rem 0.5rem;

    background-color: ${({ theme }) => theme.colors["pink-300"]};
    border-radius: 20px;

    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
`;