import styled from "styled-components";

export const Block = styled.div`
  margin-top: 71px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Select = styled.select`
  border: none;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-left: 2px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Option = styled.option`
`;