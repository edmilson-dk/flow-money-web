import styled from "styled-components";

export const AuthButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors["green-400"]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border-radius: 20px;
  margin-top: 30px;

  transition: background-color .4s ease-in-out;

  &:hover, 
  &:focus {
    background-color: ${({ theme }) => theme.colors["violet-100"]};
  }
`;