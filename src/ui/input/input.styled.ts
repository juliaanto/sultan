import styled, { css } from "styled-components";

import { InputProps } from ".";

export const Wrapper = styled.div<{$style?: "headerSearch"}>`
  border-radius: 36px;
  display: flex;

  ${({$style}) => {
  switch ($style) {
    case "headerSearch":
      return css`
        flex-direction: row-reverse;
        justify-content: center;
        width: 30%;
        flex-grow: 1;
        
        @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
          padding: 10px 10px 10px 20px;
          background-color: ${({theme}) => theme.color.input};
          flex-direction: row;
          flex-grow: 1;
          flex-shrink: 1;
          max-width: 233px;
          width: auto;
          justify-content: space-between;
        }
      `;
    default:
      return css`
        padding: 10px 10px 10px 20px;
        background-color: ${({theme}) => theme.color.input};
      `;
    }
  }}
`;

export const StyledInput = styled.input<InputProps>`
  border: none;
  background-color: transparent;
  padding: 0;

  &:focus-visible {
    outline: none;

    &::placeholder {
      color: transparent;

      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        color: rgba(92, 99, 112, 0.6);
      }
    }
  }

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 12px;
  }

  ${({$style}) => {
  switch ($style) {
    case "headerSearch":
      return css`
        width: 50px;

        @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
          width: auto;
        }
        
        &::placeholder {
          color: ${({theme}) => theme.color.textSecondary};
          font-weight: 600;

          @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
            color: rgba(92, 99, 112, 0.6);
            font-weight: 400;
          }
        }
      `;
    default:
      return css`
        &::placeholder {
          color: rgba(92, 99, 112, 0.6);
        }
      `;
    }
  }}
`;

