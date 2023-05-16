import styled from "styled-components";

export const Block = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  &::before {
    content: "";
    background-color: #ededed;
    width: 100vw;
    height: 10px;
    display: block;
    position: absolute;
    left: 0vw;
    right: 100vw;
    height: 57px;
    z-index: -1;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 20px 10px;
`;