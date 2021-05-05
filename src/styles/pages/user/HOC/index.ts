import styled from "styled-components";

export const UserFormAuthHocWrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 3.75rem 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px) {
    height: 100%;
  }
`;

export const UserFormAuthHocContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;