import styled from "styled-components";

export const DashboardNavBarNavigatorWrapper = styled.nav`
  width: 100%;
  position: relative;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button#logout {
    position: absolute;
    bottom: 0px;

    transition: all .3s ease-in-out;
    width: 70%;
    background-color: transparent;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 3px solid ${({ theme }) => theme.colors["violet-200"]};

    & + & {
      margin-top: 30px;
    }

    > strong {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
    }

    > span {
      width: 30px;

      > svg {
        width: 30px;
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

  > button,
  > button#logout {
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};

      > strong {
        color: ${({ theme }) => theme.colors["green-300"]};
      }

      > span svg {
        stroke: ${({ theme }) => theme.colors["green-300"]}; 
      }
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 0 30px;

    > button#logout {
      position: static;
    }
  }

  @media screen and (max-width: 860px) {
    flex-direction: column;
    justify-content: center;

    > button {
      width: 100%;
      max-width: 260px;
    }
  }
`;