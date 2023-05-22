import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
`;

export const StyledTextarea = styled.textarea`
  background-color: ${({theme}) => theme.color.input};
  border-radius: 36px;
  padding: 21px 30px;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;