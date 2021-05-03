import styled from "styled-components";

export const ServicesWrapper = styled.section`
  width: 100%;
  padding: 2.5rem 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const ServicesContainer = styled.div`
  width: 100%;
  
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.875rem;
  justify-content: center;

  padding-top: 1.875rem;
  
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;