import styled from "styled-components";

export const Block = styled.header`
  max-width: ${({ theme }) => theme.contentWidth.max};
  margin: 0 auto;
  width: 100%;
`;

export const Menu = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
