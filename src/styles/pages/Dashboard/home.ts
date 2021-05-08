import styled from "styled-components";

export const DashboardHeader = styled.header`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors["violet-400"]};
  position: relative;

  > div {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 1.875rem;
  }
`;

export const DashboardContent = styled.section`
`;