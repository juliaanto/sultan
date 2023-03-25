import { Link } from "react-router-dom";
import styled from "styled-components";
import { verticalLine } from "../../common/helpers/verticalLine";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 15px;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 1px;
    background-color: rgba(63, 78, 101, 0.2);
    left: 0vw;
  }

  &::before {
    transform: translateY(-54px);
  }

  &::after {
    transform: translateY(54px);
  }
`;

export const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.color.textButton};
  padding: 20px 55px;
  border-radius: 79px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
  margin-left: 14px;
  margin-right: 10px;
`;

export const LinkText = styled.span`
`;

export const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;

  &::after {
    content: "";
    width: 74px;
    height: 90px;
    background-image: url("../img/operator.png");
    background-size: 74px 113px;
    background-repeat: no-repeat;
    background-position: right bottom -20px;
    border-radius: 35px;
    margin-top: -4px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.accent};
    border-radius: 50%;
    right: 6px;
    top: 24px;
    box-shadow: 0px 0px 0px 2px #f0f6fa;
  }
`;

export const PrimaryText = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const SecondaryText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 230px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  
  &::after {
    ${verticalLine("leftRight")}
    position: absolute;
    content: "";
    width: 100%;
    height: 49px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
