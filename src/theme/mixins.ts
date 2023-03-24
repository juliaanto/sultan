import { css } from "styled-components";

export const verticalLine = (position: "left" | "right" | "leftRight") => {
  return css`
    background-repeat: no-repeat;
    border-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
    background-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px),
                      repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);

    ${() => {
        switch (position) {
          case "left":
            return css`
              background-position: 0 100%;
              background-size: 1px 100%, 0 0;
            `;
          case "right":
            return css`
              background-position: 100% 0;
              background-size: 1px 100%, 0 0;
            `;
          case "leftRight":
            return css`
              background-position: 0 100%, 100% 100%;
              background-size: 1px 100%, 1px 100%;
            `;
        }
      }}
`;
} 
