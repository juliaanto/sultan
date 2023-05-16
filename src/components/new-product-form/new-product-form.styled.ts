import { Button } from "../../ui";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;
  justify-self: flex-end;
  width: 400px;
  margin-top: 100px;
`;