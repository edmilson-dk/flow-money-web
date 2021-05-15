import styled from "styled-components";

export const DashboardDataPaginateWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  margin: 40px auto;

  > button {
    width: 100%;
    height: 40px;
    font-size: 0;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colors["orange-400"]};

    &:hover {
      opacity: 0.9;
    }
    &:focus {
      opacity: 1;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    };

    > span {
      width: 40px;
      height: 40px;

      > svg {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  > button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }

  > button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;