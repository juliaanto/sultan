import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { verticalLine } from "../../theme/mixins";

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
  margin-right: -10px;
`;

export const LinkText = styled.span`
`;

export const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;

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

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PhoneNumber = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: 5px;
  margin-bottom: 7px;
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

export const RequestCall = styled.a`
  font-size: 10px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  padding: 0 25px;
  
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

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-right: 5px;
`;

interface CartProps {
  $productsCount?: number;
}

export const Cart = styled.div<CartProps>`
  position: relative;

  &::after {
    ${(props) => props.$productsCount && props.$productsCount > 0 && css`
      content: "${props.$productsCount}";
      width: 22px;
      height: 22px;
      background-color: ${({ theme }) => theme.color.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -5px;
      right: -14px;
      border-radius: 50%;
      color: ${({ theme }) => theme.color.textButton};
      font-weight: 700;
      box-shadow: 0px 0px 0px 3px #ffffff;
    `}
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
