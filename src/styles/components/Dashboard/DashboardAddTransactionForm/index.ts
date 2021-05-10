import styled from "styled-components";

export const TransactionFormWrapper = styled.form`
  width: 100%;
  max-width: 380px;
  border-radius: 20px;
  padding: 1rem;
  margin: 3.75rem auto 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;