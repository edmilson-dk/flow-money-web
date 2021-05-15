import styled, { css } from "styled-components";

type ButtonProps = {
  bg?: string;
  upper?: boolean;
};

export const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  max-width: 180px;
  padding: 12px 0.625rem;

  border-radius: 10px;
  background-color: ${({ bg, theme }) => bg ?? theme.colors["violet-400"]};

  &:hover {
    filter: brightness(0.9);
  }

  font-weight: 600;
  text-align: center;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ upper }) => upper ? css`text-transform: uppercase;` : css`text-transform: none;`};
`;