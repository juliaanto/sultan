import styled, { css } from "styled-components";

interface BlockProps {
  $isLocatedInMenu?: boolean;
  $isLocatedInFooter?: boolean;
}

export const Block = styled.div<BlockProps>`
  display: flex;

  ${({$isLocatedInMenu, $isLocatedInFooter}) => {
    switch (true) {
      case $isLocatedInMenu:
        return css`
          gap: 6px;
          align-items: center;
        `;
      case $isLocatedInFooter:
        return css`
          align-items: flex-start;
          flex-direction: column;
          margin-bottom: 20px;
        `;
      default:
        return css`
          align-items: flex-end;
          flex-direction: column;
        `;
      }
    }}
`;

interface PhoneNumberProps {
  $isLocatedInFooter?: boolean;
}

export const PhoneNumber = styled.a<PhoneNumberProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: 5px;
  margin-bottom: 7px;

  &:hover {
    opacity: 0.7;
  }

  ${({$isLocatedInFooter}) => $isLocatedInFooter &&
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `}
`;

interface SecondaryTextProps {
  $isLocatedInFooter?: boolean;
}

export const SecondaryText = styled.p<SecondaryTextProps>`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 0;

  ${({$isLocatedInFooter}) => $isLocatedInFooter &&
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `}
`;

interface RequestCallProps {
  $isLocatedInMenu?: boolean;
  $isLocatedInFooter?: boolean;
}

export const RequestCall = styled.button<RequestCallProps>`
  font-size: 10px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  background-color: transparent;
  border: none;
  padding: 0;
  width: max-content;
  cursor: pointer;
  font-family: "Inter", sans-serif;

  &:hover {
    opacity: 0.7;
  }
  
  ${({$isLocatedInMenu}) => !$isLocatedInMenu &&
    css`
      margin-top: 10px;
    `
  }

  ${({$isLocatedInFooter}) => $isLocatedInFooter &&
    css`
      color: ${({ theme }) => theme.color.textFooter};
    `}
`;
