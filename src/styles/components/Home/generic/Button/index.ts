import styled from "styled-components";

type ButtonProps = {
  bg?: string;
};

export const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  max-width: 180px;
  padding: 0.75rem 0.625rem;

  border-radius: 20px;
  background-color: ${({ bg, theme }) => bg ?? theme.colors["violet-400"]};

  font-weight: 600;
  text-align: center;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
`;