import styled from "styled-components";

export const BannerWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 2.5rem 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  display: flex;
  justify-content: center;
  align-items: center;
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
    font-size: 1rem;
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
`;