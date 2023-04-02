import styled from "styled-components";

export const Form = styled.form`
  max-width: 238px;
  margin-top: 37px;
  flex-grow: 1;
`;

export const Heading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 33px;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 300;
  padding: 0;
  margin-bottom: 17px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

