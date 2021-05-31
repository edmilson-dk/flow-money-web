import styled from "styled-components";

export const DashboardHeader = styled.header`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors["violet-400"]};
  position: relative;

  > div {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 1.875rem;
    padding: 20px 60px;
  }

  @media screen and (max-width: 860px) {
    > div {
     overflow-x: scroll;
     padding-bottom: 30px;
     column-gap: 30px;
     justify-items: end;
     max-width: 100%;
    }
  }
`;

export const DashboardContent = styled.section`
  margin-top: 80px;
`;