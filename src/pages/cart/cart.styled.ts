import styled from "styled-components";

export const Block = styled.main`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  padding: 47px 15px 100px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    max-width: ${({ theme }) => theme.contentWidth.maxDesktop};
    width: 100vw;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 16px;
  margin: 50px 0 100px;
`;

export const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 0;
  line-height: 1;
`;