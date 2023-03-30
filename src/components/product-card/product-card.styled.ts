import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div`
  max-width: 326px;
  padding: 30px 25px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 14px 39px -11px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
  max-width: 276px;
`;

export const ProductSizeWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  margin-left: 2px;
`;

export const ProductSize = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 12px;
  margin: 0;
`;

export const Title = styled(Link)`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
  line-height: 1.3;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const Property = styled.p`
  margin: 9px 0;
`;

export const PrimaryText = styled.span`
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: 500;
  font-size: 14px;
`;

export const SecondaryText = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 300;
  font-size: 14px;
`;

export const BottomLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 26px;
`;

export const Price = styled.p`
  font-weight: 800;
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
`;