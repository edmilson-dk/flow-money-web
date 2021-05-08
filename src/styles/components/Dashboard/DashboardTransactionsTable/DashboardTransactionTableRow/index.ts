import styled from "styled-components";

export const DashboardTransactionTableRowWrapper = styled.tr`
  width: 100%;
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.010);
  border-radius: 20px;
 
  > td {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  > td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  > td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;