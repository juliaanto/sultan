import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";

import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(17, 17, 17, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 103px;
  bottom: 0;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.canvas};
`;

export const Block = styled.div`
  max-width: ${({ theme }) => theme.contentWidth.maxMobile};
  margin: 0 auto;
  padding: 5px 15px 30px;
`;

export const Heading = styled.h2`
  ${dashedLine(LinePosition.Top)}
  margin: 24px 0;
  padding-top: 28px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const ButtonWrapper = styled.div`
  margin-top: 19px;
  
  & button {
    width: 100%;
    max-width: 320px;
    padding-top: 27px;
    padding-bottom: 27px;
  }
`;
