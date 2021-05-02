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