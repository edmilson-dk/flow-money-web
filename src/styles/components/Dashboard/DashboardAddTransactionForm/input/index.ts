import styled from "styled-components";

export const TransactionInputWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  & + & {
    margin-top: 15px;
  }

  > label {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
    margin-bottom: 5px;
  }

  > input {
    width: 100%;
    outline: none;
    padding: 0 0.875rem;
    height: 50px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors["green-100"]};

    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;

    transition: border-radius .4s ease-in-out;

    &:focus {
      border-color: ${({ theme }) => theme.colors["violet-100"]};
    }
  }
`;