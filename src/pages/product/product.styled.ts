import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";
import styled, { css } from "styled-components";

export const Block = styled.main`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  width: 100%;
  padding: 47px 15px 100px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    max-width: ${({ theme }) => theme.contentWidth.maxDesktop};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  gap: 40px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
  object-position: center top;
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  max-width: 665px;
  padding-top: 35px;
`;

export const AccentText = styled.p`
  color: ${({ theme }) => theme.color.accent};
  font-weight: 500;
  margin: 0;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 30px;
  margin: 10px 0;
  line-height: 1.5;
`;

export const Span = styled.span`
  font-weight: 800;
`;

export const PriceWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 40px;
`;

export const Price = styled.p`
  font-weight: 800;
  font-size: 30px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Information = styled.p`
  max-width: 245px;
  margin: 0;
  padding: 20px 35px;
  box-shadow: 0 15px 70px -11px rgba(43, 28, 1, 0.04);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;
`;

export const InformationSpan = styled.span`
  font-weight: 700;
`;

export const MainCharacteristicsWrapper = styled.div`
  margin: 38px 0 33px;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin: 20px 0;
`;

export const Parameter = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 300;
  margin: 0;
`;

export const ParameterValue = styled.span`
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: 500;
`;

interface SectionHeadingWrapperProps {
  $isSectionOpen: boolean;
}

export const SectionHeadingWrapper = styled.div<SectionHeadingWrapperProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  ${({$isSectionOpen}) =>
    $isSectionOpen && css`
      & svg {
        transform: rotate(180deg);
      }
    `}
`;

export const SectionHeading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  width: max-content;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 17px;
  line-height: 1.5;
  max-width: 610px;
`;

export const CharacteristicsWrapper = styled.div`
  ${dashedLine(LinePosition.Top)}
  width: max-content;
  margin-top: 20px;
  padding-top: 7px;
`;
