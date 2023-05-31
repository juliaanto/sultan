import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";

import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
  margin: 20px 0 22px;
  padding: 0 0 5px;

  &:not(:last-of-type) {
    ${dashedLine(LinePosition.Bottom)};
    padding: 0 0 22px;
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

  &:hover {
    opacity: 0.7;
  }
`;