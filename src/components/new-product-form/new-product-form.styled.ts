import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  column-gap: 30px;
  row-gap: 15px;
  margin-top: 50px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  grid-column: 2 / -1;
`;
