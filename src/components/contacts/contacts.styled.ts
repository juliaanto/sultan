import styled from 'styled-components';
import { verticalLine } from '../../theme/mixins';

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;

  &:not(:first-child) {
    ${verticalLine("left")}
    margin-left: 23px;
    padding-left: 21px;
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