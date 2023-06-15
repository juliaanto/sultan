import { StyledButton } from "../../ui/button/button.styled";
import styled from "styled-components";

export const Background = styled.div`
  &::before {
    content: "";
    position: fixed;
    top: 0;
    background: #111111;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }
`;

export const Basis = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  max-width: 735px;
  min-height: 200px;
  max-height: calc(100vh - 200px);
  padding: 45px 64px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  overflow: scroll;
  border-radius: 8px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin: 0 auto 40px;
  line-height: 42px;
`;

export const CloseButton = styled(StyledButton)`
  position: absolute;
  right: 30px;
  top: 30px;
`;