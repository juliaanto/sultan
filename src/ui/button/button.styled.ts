import styled, { css } from "styled-components";

import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${({theme}) => theme.color.primary};
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
          color: ${({theme}) => theme.color.textButton};
          font-size: 14px;
          gap: 14px;
        `;
      default:
        return css`
          border-radius: 50%;
          width: 39px;
          height: 39px;
          padding: 0;
        `;
    }
  }}
`;