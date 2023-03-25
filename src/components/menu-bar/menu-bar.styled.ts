import styled from "styled-components";

export const MobileMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 5px;
  align-items: center;
`;

export const DesktopMenuBar = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonSymbol = styled.div`
  background: ${({ theme }) => theme.color.textButton};
  box-shadow: 0 -3.2px ${({ theme }) => theme.color.textButton}, 0 3.2px ${({ theme }) => theme.color.textButton};
  height: 1.2px;
  width: 8.4px;
`;