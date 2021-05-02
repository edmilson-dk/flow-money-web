import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: auto;
    height: auto;
    max-width: 200px;

    @media screen and (max-width: 620px) {
      max-width: 170px;
    }

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  > nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;