import styled from "styled-components";

export const Block = styled.footer`
  background-color: ${({ theme }) => theme.color.footer};
  color: ${({ theme }) => theme.color.textFooter};
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  column-gap: 15px;
  row-gap: 23px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    max-width: ${({ theme }) => theme.contentWidth.maxDesktop};
    padding: 70px 15px 115px;
    gap: 40px;
  }
`;

export const Column = styled.div`
  &:first-child {
    margin: 0 auto;
    flex-grow: 1;

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
      margin-right: 20px;
      flex-grow: 0;
    }
  }
  
  &:not(:first-child) {
    min-width: 35%;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
      flex-grow: 1;
      min-width: auto;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin-bottom: 27px;
    margin-top: 2px;
  }
`;

export const Text = styled.p`
  max-width: 320px;
  font-weight: 400;
  line-height: 1.5;
  margin: 12px 0 14px;
  font-size: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin: 12px 0 44px;
    font-size: 16px;
  }
`;

export const IconLink = styled.a`
  display: inline-block;
  cursor: pointer;
`;

export const PaymentMethodsWrapper = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 5px;
`;

export const CommunicationWrapperMobile = styled.div`
  margin-top: 26px;
  max-width: 165px;
  flex-grow: 1;
  flex-shrink: 1;
`;
