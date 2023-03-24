import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 10px 10px 20px;
  background-color: ${({theme}) => theme.color.input};
  border-radius: 36px;
  display: flex;
  flex-grow: 1;
  max-width: 233px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: ${({theme}) => theme.color.input};
  flex-grow: 1;
  padding: 0;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-size: 12px;
    font-family: "Inter", sans-serif;
    color: rgba(92, 99, 112, 0.6)
  }
`;

