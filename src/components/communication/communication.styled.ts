import styled from "styled-components";

export const Title = styled.p`
  line-height: 1.5;
  max-width: 123px;
  margin: 22px 0 15px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin: 25px 6px 17px;
    max-width: none;
  }
`;

export const IconLink = styled.a`
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  margin: 0 5px;
  display: flex;
  gap: 10px;
`;