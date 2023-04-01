import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";
import styled, { css } from "styled-components";

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
      ${dashedLine(LinePosition.Left)}
      margin-left: 23px;
      padding-left: 21px;
    }
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
`;

interface TextWrapperProps {
  $isLocatedInFooter?: boolean;
}

export const TextWrapper = styled.div<TextWrapperProps>`
  ${({$isLocatedInFooter}) => !$isLocatedInFooter &&
    css`
      margin-left: 17px;
    `}
`;

export const PrimaryText = styled.p`
  font-weight: 600;
  margin: 0;
`;

interface SecondaryTextProps {
  $isLocatedInFooter?: boolean;
}

export const SecondaryText = styled.p<SecondaryTextProps>`
  font-size: 12px;
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};

  ${({$isLocatedInFooter}) => $isLocatedInFooter &&
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `}
`;

export const WorkingHours = styled(SecondaryText)`
  margin-top: 4px;
  margin-left: 33px;
  margin-bottom: 14px;
`;

interface MailProps {
  $isLocatedInFooter?: boolean;
}

export const Mail = styled.a<MailProps>`
  font-weight: 600;

  &:hover {
    opacity: 0.6;
  }

  ${({$isLocatedInFooter}) => $isLocatedInFooter &&
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `}
`;