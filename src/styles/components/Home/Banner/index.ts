import styled from "styled-components";

export const BannerWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 3.75rem 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px) {
    height: 100%;
  }
`;

export const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > article {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > article p {
    margin-bottom: 1.875rem;
    font-size: 1.125rem;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }

  > div {
    width: 50%;
    max-width: 300px;
    z-index: 9999;
  }

  > div img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;

    > article,
    > div {
      width: 100%;
    }

    > article {
      margin-bottom: 1.875rem;
    }
  }
`;