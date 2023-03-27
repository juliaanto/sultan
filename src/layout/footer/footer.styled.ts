import styled from "styled-components";

export const Block = styled.footer`
  background-color: ${({ theme }) => theme.color.footer};
  color: ${({ theme }) => theme.color.textFooter};
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    max-width: ${({ theme }) => theme.contentWidth.maxDesktop};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 70px 15px 115px;
  gap: 40px;
`;

export const Column = styled.div`
  &:first-child {
    margin-right: 20px;
  }
  
  &:not(:first-child) {
    flex-grow: 1;
  }
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 20px;
  margin-top: 2px;
`;

export const Text = styled.p`
  max-width: 320px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 12px 0 44px;
`;

export const CommunicationTitle = styled.p`
  margin: 25px 6px 17px;
`;

export const IconLink = styled.a`
  display: inline-block;
  cursor: pointer;
`;

export const CommunicationWrapper = styled.div`
  margin: 0 5px;
  display: flex;
  gap: 10px;
`;

export const PaymentMethodsWrapper = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 5px;
`;
