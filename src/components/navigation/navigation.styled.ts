import styled from "styled-components";
import { verticalLine } from "../../common/helpers/verticalLine";

export const Block = styled.nav`
  flex-grow: 1;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const Item = styled.li`
  min-height: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    ${verticalLine("left")}
    margin-left: 31px;
    padding-left: 32px;
  }
`;

export const Link = styled.a`
`;