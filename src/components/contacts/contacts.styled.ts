import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;

  &:not(:first-child) {
    margin-left: 23px;
    padding-left: 21px;
    background-position:  0 0, 0 0, 100% 0, 0 100%;
    background-size: 1px 100%, 100% 3px, 3px 100% , 100% 3px;
    background-repeat: no-repeat;
    background-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
    border-image: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px);
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
`;

export const TextWrapper = styled.div`
  margin-left: 17px;
`;

export const PrimaryText = styled.div`
  font-weight: 600;
`;

export const SecondaryText = styled.div`
  font-size: 12px;
`;

export const Mail = styled.a`
  font-weight: 600;
`;