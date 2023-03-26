import styled from "styled-components";
import { verticalLine } from "../../common/helpers/verticalLine";

export const Block = styled.nav`
  flex-grow: 1;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  min-height: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    &:not(:first-child) {
      ${verticalLine("left")}
      margin-left: 31px;
      padding-left: 32px;
    }
  }
`;

export const Link = styled.a`
  font-weight: 400;
  color: ${({ theme }) => theme.color.textSecondary};
`;