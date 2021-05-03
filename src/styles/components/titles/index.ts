import styled, { css } from "styled-components";

type TitleProps = {
  color?: string;
};

export const TitlePrimary = styled.h1<TitleProps>`
  font-size: 3.75rem;
  line-height: 3.75rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["violet-300"]};
  text-align: center;
  margin-bottom: 1.875rem;
`;

export const TitleSecondary = styled.h2<TitleProps>`
  font-size: 3.125rem;
  line-height: 3.125rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["violet-300"]};
  text-align: left;
  margin-bottom: 1.875rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 60px;
    height: 10px;
    transform: skewX(-45deg);
    background-color: ${({ theme }) => theme.colors["green-200"]};
  }
`;