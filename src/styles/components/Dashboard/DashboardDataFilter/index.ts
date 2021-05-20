import styled from "styled-components";

export const DashboardDataFilterWrapper = styled.div`
  width: 100%;
  max-width: 340px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;

  > button {
    height: 40px;
    padding: 0 10px;
    border: 2px solid ${({ theme }) => theme.colors["green-300"]};
    background-color: transparent;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
    
    > strong {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 600;
      text-align: left;
      color: ${({ theme }) => theme.colors["green-300"]};
      margin-right: 15px;
    }

    > span svg {
      width: 25px;
      height: 25px;
      stroke: ${({ theme }) => theme.colors["green-300"]};
    }
  }
`;