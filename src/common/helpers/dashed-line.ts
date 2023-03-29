import { css } from "styled-components";

export enum LinePosition {
  left = "left",
  right = "right",
  leftRight = "leftRight",
  top = "top",
  bottom = "bottom",
}

export const dashedLine = (position: LinePosition) => {
  return css`
    background-repeat: no-repeat;
    border-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
    background-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px),
                      repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px),
                      repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px),
                      repeating-linear-gradient(270deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);

    ${() => {
        switch (position) {
          case LinePosition.left:
            return css`
              background-position: 0 100%;
              background-size: 1px 100%, 0 0, 0 0, 0 0;
            `;
          case LinePosition.right:
            return css`
              background-position: 100% 0;
              background-size: 0 0, 0 0, 1px 100%, 0 0;
            `;
          case LinePosition.leftRight:
            return css`
              background-position: 0 100%, 0 0, 100% 100%;
              background-size: 1px 100%, 0 0, 1px 100%, 0 0;
            `;
          case LinePosition.top:
            return css`
              background-position: 100% 0;
              background-size: 0 0, 0 0, 0 0, 100% 1px;
            `;
          case LinePosition.bottom:
            return css`
              background-position: 0 100%;
              background-size: 0 0, 0 0, 0 0, 100% 1px;
            `;
        }
      }}
`;
} 
