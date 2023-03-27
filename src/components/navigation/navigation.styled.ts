import styled, { css } from "styled-components";

import { verticalLine } from "../../common/helpers/verticalLine";

export const Block = styled.nav`
  flex-grow: 1;
`;

interface ListProps {
  $isLocatedInFooter?: boolean;
}

export const List = styled.ul<ListProps>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 10px;
  flex-wrap: wrap;

  ${({$isLocatedInFooter}) => !$isLocatedInFooter &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        flex-direction: row;
      }
    `
  }
`;

interface ItemProps {
  $isLocatedInFooter?: boolean;
}

export const Item = styled.li<ItemProps>`
  min-height: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  ${({$isLocatedInFooter}) => !$isLocatedInFooter &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        &:not(:first-child) {
          ${verticalLine("left")}
          margin-left: 31px;
          padding-left: 32px;
        }
    `
  }
`;

interface LinkProps {
  $isLocatedInFooter?: boolean;
}

export const Link = styled.a<LinkProps>`
  font-weight: 400;


  ${({$isLocatedInFooter}) => $isLocatedInFooter ?
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `
    :
    css`
      color: ${({ theme }) => theme.color.textSecondary};
    `
  }
`;