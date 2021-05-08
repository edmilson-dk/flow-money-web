import styled from "styled-components";

export const DashBoardHeader = styled.header`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors["violet-400"]};
  position: relative;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 1.875rem;
  padding: 0 60px;
`;