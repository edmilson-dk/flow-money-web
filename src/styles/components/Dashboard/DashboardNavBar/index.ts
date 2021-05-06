import styled from "styled-components";

export const DashboardNavBarWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: flex;
`;

export const DashboardNavBarMenu = styled.nav`
  width: 280px;
  background-color: ${({ theme }) => theme.colors["green-400"]};
  min-height: 100vh;
  z-index: 9999;
  padding: 20px 0;

  > h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding-bottom: 20px;
  }
`;

export const DashboardNavBarContent = styled.main`
  width: calc(100% - 280px);
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px;
`;