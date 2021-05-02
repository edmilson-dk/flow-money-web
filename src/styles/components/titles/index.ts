import styled, { css } from "styled-components";

type TitleProps = {
  color?: string;
};

export const TitlePrimary = styled.h1<TitleProps>`
  font-size: 4.0625rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["violet-300"]};
  text-align: center;
  margin-bottom: 1.875rem;
`;