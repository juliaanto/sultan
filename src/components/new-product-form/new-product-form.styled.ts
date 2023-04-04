import { Button } from "../../ui";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
  flex-grow: 1;
`;

export const BottomLine = styled.div`
  width: 100%;
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