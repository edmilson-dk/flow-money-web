import styled from "styled-components";

export const ServiceBoxWrapper = styled.article`
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.colors["green-100"]};
  border-top: 1px solid ${({ theme }) => theme.colors["green-100"]};
  border-left: 1px solid ${({ theme }) => theme.colors["green-100"]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: box-shadow .4s ease-in-out;

  &:hover {
    box-shadow: 0.7rem 0.7rem 0 ${({ theme }) => theme.colors["green-100"]};
  }

  > img {
    width: 4.375rem;
    height: 4.375rem;
    object-fit: cover;
    margin-bottom: 15px;
  }

  > h3 {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;