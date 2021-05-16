import styled from "styled-components";

export const TransactionSwitchBooleanWrapper = styled.div`
  margin-top: 20px;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: 10px;
  }

  > label {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
  }
  
  > div button {
    height: 40px;
    min-width: 170px;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    > span {
      height: 30px;
      width: 30px;
       
      > svg {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  > div button:hover,
  > div button:focus {
    opacity: 1;
  }

  > div button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color:  ${({ theme }) => theme.colors["green-400"]};
  }

  > div button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color:  ${({ theme }) => theme.colors["red-200"]};
  }
`;