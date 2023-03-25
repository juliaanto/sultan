import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const Block = styled(Link)`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-right: 5px;
  margin-left: 10px;
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