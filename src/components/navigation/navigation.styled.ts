import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";
import styled, { css } from "styled-components";

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

  ${({$isLocatedInFooter}) => $isLocatedInFooter ?
    css`
      row-gap: 8px;

      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        row-gap: 10px;
      }
    `
    :
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
          ${dashedLine(LinePosition.Left)}
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
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }

  ${({$isLocatedInFooter}) => $isLocatedInFooter ?
    css`
      color: ${({ theme }) => theme.color.textFooter};
      font-size: 12px;

      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 14px;
      }
    `
    :
    css`
      color: ${({ theme }) => theme.color.textSecondary};
    `
  }
`;