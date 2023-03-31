import { css } from "styled-components";

export enum LinePosition {
  Left = "left",
  Right = "right",
  LeftRight = "leftRight",
  Top = "top",
  Bottom = "bottom",
  TopBottom = "topBottom",
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
          case LinePosition.Left:
            return css`
              background-position: 0 100%;
              background-size: 1px 100%, 0 0, 0 0, 0 0;
            `;
          case LinePosition.Right:
            return css`
              background-position: 100% 0;
              background-size: 0 0, 0 0, 1px 100%, 0 0;
            `;
          case LinePosition.LeftRight:
            return css`
              background-position: 0 100%, 0 0, 100% 100%;
              background-size: 1px 100%, 0 0, 1px 100%, 0 0;
            `;
          case LinePosition.Top:
            return css`
              background-position: 100% 0;
              background-size: 0 0, 0 0, 0 0, 100% 1px;
            `;
          case LinePosition.Bottom:
            return css`
              background-position: 0 100%;
              background-size: 0 0, 0 0, 0 0, 100% 1px;
            `;
          case LinePosition.TopBottom:
            return css`
              background-position: 0 0, 0 0, 100% 100%, 0 100%;
              background-size: 0 0, 100% 1px, 0 0, 100% 1px;
            `;
        }
      }}
`;
} 
