import { ReactComponent as IconTriangle } from "../../assets/icons/triangle.svg";
import styled from "styled-components";

export const Block = styled.div`
  position: relative;
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  text-align: left;
  position: relative;
  background-color: ${({theme}) => theme.color.input};
  border-radius: 36px;
  padding: 21px 60px 21px 30px;
  border: none;
  color: ${({ theme }) => theme.color.placeholder};
  z-index: 2;
`;

export const Icon = styled(IconTriangle)`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

export const Menu = styled.div`
  position: absolute;
  padding: 35px 0 20px 20px;
  background-color: white;
  border: 1px solid ${({theme}) => theme.color.input};
  width: 100%;
  box-sizing: border-box;
  transform: translateY(-28px);
`;