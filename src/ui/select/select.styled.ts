import { ReactComponent as IconTriangle } from "../../assets/icons/triangle.svg";
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

export const SelectWrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  background-color: ${({theme}) => theme.color.input};
  border-radius: 36px;
  padding: 21px 30px;
  border: none;
  width: 100%;
  outline: none;
  -moz-appearance:none;
  -webkit-appearance:none;
  appearance:none;

  :invalid { 
    color: ${({ theme }) => theme.color.placeholder};
  }
`;

export const Icon = styled(IconTriangle)`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

export const Option = styled.option`
`;