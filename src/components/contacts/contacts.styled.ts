import styled from "styled-components";
import { verticalLine } from "../../common/helpers/verticalLine";

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin-top: auto;
    
    &:not(:first-child) {
      ${verticalLine("left")}
      margin-left: 23px;
      padding-left: 21px;
    }
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
`;

export const TextWrapper = styled.div`
  margin-left: 17px;
`;

export const PrimaryText = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const SecondaryText = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const WorkingHours = styled(SecondaryText)`
  margin-top: 4px;
  margin-left: 33px;
  margin-bottom: 14px;
`;

export const Mail = styled.a`
  font-weight: 600;
`;