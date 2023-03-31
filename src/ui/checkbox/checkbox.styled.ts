import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";

import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
  margin: 20px 0 22px;
  padding: 0 0 22px;

  &:not(:last-of-type) {
    ${dashedLine(LinePosition.Bottom)};
  }
`;

export const Legend = styled.legend`
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin-bottom: 17px;
`;

export const Wrapper = styled.div`
  margin-top: 18px;
`;

export const CheckboxWrapper = styled.div`
  margin-top: 9px;
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.color.textSecondary};
  margin-left: 10px;
`;

export const CheckboxInput = styled.input`
  width: 10px;
  height: 10px;
  margin: 0;
  display: block;
`;

export const Span = styled.span`
  font-size: 10px;
  margin-left: 6px;
`;

export const ShowAllButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  padding: 0;
  margin-top: 18px;
`;