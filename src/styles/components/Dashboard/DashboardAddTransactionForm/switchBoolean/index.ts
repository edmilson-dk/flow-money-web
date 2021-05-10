import styled from "styled-components";

export const TransactionSwitchBooleanWrapper = styled.div`
  margin-top: 20px;

  > div {
    width: 100%;
    display: flex;
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
    font-size: 0;
    opacity: 0.7;

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
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color:  ${({ theme }) => theme.colors["green-400"]};
  }

  > div button:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color:  ${({ theme }) => theme.colors["red-200"]};
  }
`;