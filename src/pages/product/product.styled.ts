import styled from "styled-components";

export const Block = styled.main`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  width: 100%;
  padding: 47px 15px;

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
  max-height: 600px;
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

