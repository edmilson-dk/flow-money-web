import styled from "styled-components";

export const DashboardChartsWrapper = styled.main`
  width: 100%;
  padding: 60px 0;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  div.dashboardChartsItem {
    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 1rem;
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.040);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;