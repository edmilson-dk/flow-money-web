import styled from "styled-components";

export const DashboardTransactionsTableWrapper = styled.article`
  width: 100%;

  @media screen and (max-width: 725px) {
    min-width: 100%;
    overflow-x: auto;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.060);
  }

  > table {
    width: 100%;
    min-width: 630px;
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