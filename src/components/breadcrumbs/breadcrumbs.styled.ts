import { LinePosition, dashedLine } from "../../common/helpers/dashed-line";

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div`
  display: flex;
`;

export const PreviousSection = styled(Link)`
  ${dashedLine(LinePosition.right)};
  color: ${({ theme }) => theme.color.textSecondary};
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin-right: 10px;
`;

export const CurrentSection = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  opacity: 50%;
  margin: 0;
`;