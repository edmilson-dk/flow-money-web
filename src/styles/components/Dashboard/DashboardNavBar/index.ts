import styled, { css } from "styled-components";

type PropsMenu = {
  displayResponsive: boolean;
}

export const DashboardNavBarWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: flex;
  position: relative;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }

  @media screen and (max-width: 860px) {
    button#control-menu-btn {
      display: flex !important;
      align-self: flex-start;
      justify-content: center;
      align-items: center;
    }
  }

  button#control-menu-btn {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 10px;
    margin-left: 10px;
    z-index: 999999;

    position: absolute;
    
    background-color: transparent;
    border-radius: 10px;

    display: none;
    
    font-size: 0;
    background-color: ${({ theme }) => theme.colors["violet-200"]};

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  button#control-menu-btn {
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 3px solid ${({ theme }) => theme.colors["violet-200"]};

      > span svg {
        stroke: ${({ theme }) => theme.colors["green-300"]}; 
      }
    }
  }
`;

export const DashboardNavBarMenu = styled.aside<PropsMenu>`
  width: 280px;
  background-color: ${({ theme }) => theme.colors["violet-400"]};
  min-height: 100vh;
  z-index: 9999;
  padding: 20px 0;
  position: relative;

  @media screen and (max-width: 1080px) {
    min-height: auto;
    width: 100%;
  }

  @media screen and (max-width: 860px) {
    ${({ displayResponsive }) => displayResponsive ? css`
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100vh;
    ` : css`
      top: 0;
      height: 0;
      display: none;
    `
  }
  }
`;

export const DashboardNavBarContent = styled.main`
  width: calc(100% - 280px);
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;