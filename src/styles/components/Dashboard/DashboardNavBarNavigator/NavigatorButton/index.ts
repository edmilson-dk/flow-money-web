import styled, { css } from "styled-components";

type Props = {
  isActive: boolean;
};

export const NavigatorButtonWrapper = styled.button<Props>`
  transition: width .3s ease-in-out;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.white : "transparent"};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  position: absolute;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  ${({ isActive, theme }) => !isActive && css`
    &:hover,
    &:focus {
      width: 35%;
    }
  `};

  ${({ isActive, theme }) => isActive ? css`
    width: 70%;
    border: none;
  ` : css`
    width: 30%;
    border: 1px solid ${theme.colors["violet-200"]};
  `};

  > strong {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors["green-300"]};

     ${({ isActive, theme }) => isActive ? css`display: inline`: css`display: none;`};
  }

  > span {
    width: 30px;

    > svg {
      width: 30px;
      stroke: ${({ isActive, theme }) => isActive ? theme.colors["green-300"] : theme.colors.white};
    }
  }
`;