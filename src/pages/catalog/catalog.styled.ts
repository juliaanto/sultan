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

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;
