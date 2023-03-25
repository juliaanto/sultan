import { ReactComponent as IconLogo } from "../../assets/icons/logo.svg";
import styled from "styled-components";

export const Icon = styled(IconLogo)`
  height: 41px;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    height: 66px;
  }
`;