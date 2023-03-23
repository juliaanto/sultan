import styled from 'styled-components';

export const Block = styled.nav`
  flex-grow: 1;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const Item = styled.li`
  min-height: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 31px;
    padding-left: 32px;
    background-position:  0 0, 0 0, 100% 0, 0 100%;
    background-size: 1px 100%, 100% 3px, 3px 100% , 100% 3px;
    background-repeat: no-repeat;
    background-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
    border-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
  }
`;

export const Link = styled.a`
`;