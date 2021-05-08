import styled from "styled-components";

export const DashboardTransactionsTableWrapper = styled.article`
  width: 100%;

  > table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;

    th {
      padding: 0.75rem 1rem;
    }

    th {
      color: ${({ theme }) => theme.colors["gray-200"]};
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: left;
    }
  }
`;