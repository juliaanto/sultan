import styled from "styled-components";

export const Background = styled.div`
  &::before {
    content: "";
    position: fixed;
    top: 0;
    background: black;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }
`;

export const Basis = styled.div`
  position: absolute;
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  max-height: calc(100vh - 200px);
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  overflow: scroll;
`;