import styled from "styled-components";

export const BgCircle = styled.div`
  width: 40vw;
  height: 100vh;
  border-top-left-radius: 45%;
  border-bottom-left-radius: 45%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors["violet-100"]};
  z-index: 1;
`;