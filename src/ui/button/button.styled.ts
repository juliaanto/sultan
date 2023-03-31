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
      case ButtonView.Icon:
        return css`
          width: 32px;
          height: 32px;
          border-radius: 50%;

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            width: ${({$width}) => $width ? $width : "39px"};
            height: ${({$height}) => $height ? $height : "39px"};
          }
        `;
      case ButtonView.FooterEmail:
        return css`
          width: 39px;
          height: 39px;
          border-radius: 50%;
        `;
      case ButtonView.Search:
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
      case ButtonView.PriceList:
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
      case ButtonView.AddToCart:
        return css`
          border-radius: 80px;
          color: ${({theme}) => theme.color.textButton};
          text-transform: uppercase;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: .15em;
          line-height: 1.21;
          gap: 5px;

          & svg {
            width: 27px;
            height: auto;
          }
          
          & svg path {
            fill: ${({theme}) => theme.color.textButton};
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