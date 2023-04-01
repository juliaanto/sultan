import styled from "styled-components";

export const Block = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
`;

export const Wrapper = styled.div`
`;

export const Label = styled.label`
  width: min-content;
  display: inline-block;
  text-align: center;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  padding: 18px 15px;
  box-shadow: 0 15px 70px -11px rgba(43, 28, 1, 0.15);
  border-radius: 10px;

  &:hover {
    background-color: rgba(${({ theme }) => theme.color.primaryRGB}, .3);
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.textButton};
  }
`;

