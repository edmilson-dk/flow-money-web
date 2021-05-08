import styled, { css } from "styled-components";

type Props = {
  isActive: boolean;
};

export const NavigatorButtonWrapper = styled.button<Props>`
  transition: all .3s ease-in-out;
  width: 70%;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.white : "transparent"};
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  & + & {
    margin-top: 30px;
  }

  ${({ isActive, theme }) => isActive ? css`
    border: none;
  ` : css`
    border: 1px solid ${theme.colors["violet-200"]};
  `};

  > strong {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme, isActive }) => isActive ? theme.colors["green-300"] : theme.colors.white};
  }

  > span {
    width: 30px;

    > svg {
      width: 30px;
      stroke: ${({ isActive, theme }) => isActive ? theme.colors["green-300"] : theme.colors.white};
    }
  }
`;