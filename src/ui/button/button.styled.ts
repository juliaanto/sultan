import styled, { css } from "styled-components";

import { ButtonView } from ".";

interface StyledButtonProps {
  $view?: ButtonView;
  $width?: string;
  $height?: string;
  $isLocatedInFooter?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  background-color: ${({theme}) => theme.color.primary};
  cursor: pointer;
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};

  ${(props) => {
    switch (props.$view) {
      case ButtonView.icon:
        return css`
          width: 32px;
          height: 32px;
          border-radius: 50%;

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            width: 39px;
            height: 39px;
          }
        `;
      case ButtonView.footerEmail:
        return css`
          width: 39px;
          height: 39px;
          border-radius: 50%;
        `;
      case ButtonView.headerSearch:
        return css`
          background-color: transparent;

          & svg {
            width: 12px;
            height: auto;
          }
          
          & svg path {
            stroke: ${({theme}) => theme.color.textSecondary};
          }

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            background-color: ${({theme}) => theme.color.primary};
            border-radius: 50%;
            width: 39px;
            height: 39px;
            padding: 0;

            & svg {
              width: 16px;
              height: auto;
            }
            
            & svg path {
              stroke: ${({theme}) => theme.color.textButton};
            }
          }
        `;
      case ButtonView.priceList:
        return css`
          padding: 10px;
          border-radius: 79px;
          font-weight: 700;
          color: ${({theme}) => theme.color.textButton};
          font-size:  ${({$isLocatedInFooter}) => $isLocatedInFooter ? "12px" : "14px"};
          gap: ${({$isLocatedInFooter}) => $isLocatedInFooter ? "5px" : "14px"};

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            font-size: 14px;
            gap: 14px;
          }
        `;
      default:
        return css`
          padding: 10px;
          border-radius: 79px;
          font-weight: 700;
          color: ${({theme}) => theme.color.textButton};
          font-size: 14px;
          gap: 14px;
        `;
    }
  }}
`;