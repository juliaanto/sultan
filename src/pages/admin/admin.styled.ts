import styled from "styled-components";

export const Block = styled.main`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  min-width: ${({ theme }) => theme.contentWidth.minMobile};
  margin: 0 auto;
  padding: 30px 15px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    max-width: ${({ theme }) => theme.contentWidth.maxDesktop};
    width: 100vw;
  }
`;
