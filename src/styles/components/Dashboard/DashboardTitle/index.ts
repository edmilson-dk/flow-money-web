import styled from "styled-components";

import { TitleThirdProps } from "./types";

export const TitlePrimary = styled.h2`
  font-size: 3.125rem;
  line-height: 3.125rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["gray-200"]};
  text-align: left;
  margin-bottom: 30px;
  position: relative;
`;

export const TitleThird = styled.h3<TitleThirdProps>`
  font-size: 1.875rem;
  line-height: 1.875rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["gray-200"]};
  text-align: ${({ align }) => align};
  margin-bottom: 20px;
  position: relative;
`;