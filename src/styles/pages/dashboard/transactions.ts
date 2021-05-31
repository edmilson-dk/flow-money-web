import styled from "styled-components";

export const DashboardTransactionsHeader = styled.header`
  width: 100%;
  margin-bottom: 60px;

  &, div#input-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > h2 {
    margin: 0;
  }

  div#input-search {
    width: 100%;
    max-width: 340px;

    > input {
      width: calc(100% - 50px);
      outline: none;
      padding: 0 0.875rem;
      height: 50px;
      border-radius: 10px 0 0 10px;
      border-top: 2px solid ${({ theme }) => theme.colors["orange-100"]};
      border-left: 2px solid ${({ theme }) => theme.colors["orange-100"]};
      border-bottom: 2px solid ${({ theme }) => theme.colors["orange-100"]};
      border-right: none;

      font-size: 1.125rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors["gray-200"]};
      background-color: transparent;

      transition: border-color .4s ease-in-out;

      &:focus {
        border-color: ${({ theme }) => theme.colors["green-100"]};
      }

      &:focus ~ button {
        background-color: ${({ theme }) => theme.colors["green-100"]};
        border-color: ${({ theme }) => theme.colors["green-100"]};
      }

      &::placeholder {
        color: #ccc;
      }
    }

    > button {
      width: 50px;
      height: 50px;
      outline: none;
      height: 50px;
      border-radius: 0 10px 10px 0;
      border: 2px solid ${({ theme }) => theme.colors["orange-100"]};

      font-size: 0;
      background-color: ${({ theme }) => theme.colors["orange-100"]};
      transition: all .4s ease-in-out;

      > span svg {
        width: 35px;
        height: 35px;
        stroke: ${({ theme }) => theme.colors.white};
      }

      &:focus {
        background-color: ${({ theme }) => theme.colors["orange-400"]};
        border-color: ${({ theme }) => theme.colors["orange-400"]};
      }
    }
  }

  @media screen and (max-width: 805px) {
    
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      > div {
        margin-top: 30px;
      }
    
  }
`;