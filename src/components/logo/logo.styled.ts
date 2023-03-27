import styled, { css } from "styled-components";

import { ReactComponent as IconLogo } from "../../assets/icons/logo.svg";

interface IconProps {
  $isLight?: boolean;
}

export const Icon = styled(IconLogo)<IconProps>`
  height: 41px;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    height: 66px;
  }

  ${({$isLight}) => $isLight &&
    css`
      & path {
        fill: white;
      }
    `}
`;