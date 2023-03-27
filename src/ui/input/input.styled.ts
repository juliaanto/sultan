import styled, { css } from "styled-components";

import { InputView } from ".";

interface WrapperProps {
  $view?: InputView;
}

export const Wrapper = styled.div<WrapperProps>`
  border-radius: 36px;
  display: flex;

  ${({$view}) => {
  switch ($view) {
    case InputView.headerSearch:
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
    case InputView.footerEmail:
      return css`
        background-color: ${({theme}) => theme.color.inputFooter};
        padding: 10px 10px 10px 20px;
        max-width: 250px;
        justify-content: space-between;
      `;
    default:
      return css`
        padding: 10px 10px 10px 20px;
        background-color: ${({theme}) => theme.color.input};
        max-width: 300px;
        justify-content: space-between;
      `;
    }
  }}
`;

interface StyledInputProps {
  $view?: InputView;
}

export const StyledInput = styled.input<StyledInputProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  flex-grow: 1;

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

  ${({$view}) => {
  switch ($view) {
    case InputView.headerSearch:
      return css`
        width: 50px;

        @media (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
          width: auto;
          flex-grow: 1;
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

export const Label = styled.label`
  display: inline-block;
  font-size: 12px;
  margin-bottom: 15px;
`;
