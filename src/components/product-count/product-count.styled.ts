import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  width: 112px;
  justify-content: space-between;
  align-items: center;
`;

export const Count = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 0;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: linear-gradient(rgba(255, 198, 80, 0.3), rgba(254, 202, 110, 0.3));
  width: 34px;
  height: 23px;
  border-radius: 1000px;
  color: ${({ theme }) => theme.color.textSecondary};
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 300;

  &:hover {
    background-color: rgba(${({ theme }) => theme.color.primaryRGB}, .6);
  }

  &:active {
    background-color: rgba(${({ theme }) => theme.color.primaryRGB}, .3);
  }
`;