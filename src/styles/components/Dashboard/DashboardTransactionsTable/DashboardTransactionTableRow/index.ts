import styled from "styled-components";

export const DashboardTransactionTableRowWrapper = styled.tr`
  width: 100%;
  
  > td {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["gray-200"]};
    height: 50px;
    padding: 0 1rem;
    border-top: 2px solid ${({ theme }) => theme.colors["gray-100"]};
    border-bottom: 2px solid ${({ theme }) => theme.colors["gray-100"]};
  }

  > td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 2px solid ${({ theme }) => theme.colors["gray-100"]};
  }

  > td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 2px solid ${({ theme }) => theme.colors["gray-100"]};
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