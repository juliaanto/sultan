import { StyledButton } from "../../ui/button/button.styled";
import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  column-gap: 30px;
  row-gap: 15px;
  margin-top: 50px;
`;

export const Button = styled(StyledButton)`
  grid-column: 2 / -1;
  margin-top: auto;
  margin-bottom: 0;
`;

export const TextareaWrapper = styled.div`
  grid-column: 1 / -1;

  & textarea {
    height: 150px;
  }
`;
