import styled from "styled-components";

type Props = {
  bg: string;
}

export const DashboardValueBoxWrapper = styled.article<Props>`
  width: 100%;
  padding: 1rem;
  height: 140px;
  background-color: ${({ bg }) => bg};
  margin-top: 60px;
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.040);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > header h3 {
    font-size: 1.125rem;
    font-weight: 600;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }

  > header span {
    width: 30px;

    > svg {
      width: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  > h2 {
    font-size: 2.125rem;
    font-weight: 600;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }
`;