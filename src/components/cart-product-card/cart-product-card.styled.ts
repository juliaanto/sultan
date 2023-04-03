import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div`
  ${dashedLine(LinePosition.Top)};
  display: flex;
  align-items: center;
  padding: 50px 0;

  &:last-child {
    ${dashedLine(LinePosition.TopBottom)};
  }
`;

export const ImageWrapper = styled.div`
  width: 280px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
`;

export const TextWrapper = styled.div`
  margin: 10px 0 0 20px;
  flex-grow: 3;
`;

export const Title = styled(Link)`
  font-weight: 700;
  font-size: 30px;
  margin: 10px 10px 0 0;
  display: block;
  max-width: 440px;

  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin: 10px 10px 12px 0;
  max-width: 440px;
`;

export const ProductCountWrapper = styled.div`
  ${dashedLine(LinePosition.Left)};
  height: 50px;
  padding: 0 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Price = styled.p`
  ${dashedLine(LinePosition.LeftRight)};
  height: 50px;
  padding: 0 20px;
  margin: 0 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  min-width: 210px;
`;

export const ButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;