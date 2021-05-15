import styled from "styled-components";

export const DashboardTransactionTableRowWrapper = styled.tr`
  width: 100%;
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.010);
  border-radius: 20px;
 
  > td {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["gray-200"]};
    height: 50px;
    padding: 0 1rem;
  }

  > td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  > td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  > td#isDecrement {
    color: ${({ theme }) => theme.colors["red-200"]};
  }

  > td#notIsDecrement {
    color: ${({ theme }) => theme.colors["green-300"]};
  }

  > td button {
    width: 3.75rem;
    height: 1.875rem;
    font-size: 0;
    background: none;

    > svg {
      stroke: ${({ theme }) => theme.colors["red-200"]};
    }
  }
`;