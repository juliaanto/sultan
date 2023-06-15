import styled from "styled-components";

export const Block = styled.div`
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 30px;
  width: 100%;
`;

export const ProductTypesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProductTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border: 1px solid ${({theme}) => theme.color.input};
  border-radius: 36px;
  padding: 8px 16px;
`;

export const ProductType = styled.p`
  margin: 0;
`;

export const InputWrapper = styled.div`
  flex-grow: 1;
`;

