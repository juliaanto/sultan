import styled, { css } from "styled-components";

import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;

  ${(props) => {
    switch (props.$style) {
      case "text":
        return css`
          padding: 20px 44px;
          border-radius: 79px;
          font-weight: 700;
          background-color: ${({theme}) => theme.color.primary};
          color: ${({theme}) => theme.color.textButton};
          font-size: 14px;
          gap: 14px;
        `;
      case "headerSearch":
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
      default:
        return css`
          background-color: ${({theme}) => theme.color.primary};
          border-radius: 50%;
          width: 32px;
          height: 32px;
          padding: 0;

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            width: 39px;
            height: 39px;
          }
        `;
    }
  }}
`;