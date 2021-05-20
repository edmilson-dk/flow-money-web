import styled from "styled-components";

export const DashboardNavBarWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: flex;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const DashboardNavBarMenu = styled.aside`
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