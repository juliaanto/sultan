import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  margin-left: 2px;
`;

export const Text = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 12px;
  margin: 0;
`;