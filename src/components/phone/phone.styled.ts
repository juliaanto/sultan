import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PhoneNumber = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: 5px;
  margin-bottom: 7px;
`;

export const SecondaryText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 0;
`;

export const RequestCall = styled.a`
  font-size: 10px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  margin-top: 10px;
`;
