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
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors["orange-400"]};

    &:hover {
      opacity: 0.8;
    }
    &:focus {
      opacity: 1;
    }

    &:disabled {
      opacity: 0.6;
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
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }

  > button:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;