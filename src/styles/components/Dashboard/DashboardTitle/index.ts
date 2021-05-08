import styled from "styled-components";

export const TitlePrimary = styled.h2`
  font-size: 3.125rem;
  line-height: 3.125rem;
  font-weight: 700;
  color: ${({ color, theme }) => color ?? theme.colors["gray-200"]};
  text-align: left;
  margin-bottom: 1.875rem;
  position: relative;
`;