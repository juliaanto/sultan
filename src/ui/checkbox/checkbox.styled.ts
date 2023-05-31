import styled from "styled-components";

export const Block = styled.div`
  margin-top: 9px;
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.color.textSecondary};
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const CheckboxInput = styled.input`
  width: 10px;
  height: 10px;
  margin: 0;
  display: block;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 10px;
  margin-left: 6px;
`;