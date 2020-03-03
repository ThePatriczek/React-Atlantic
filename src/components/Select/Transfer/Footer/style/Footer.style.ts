import styled from 'styled-components';
import { StyledTransferProps } from '../../style';

export const StyledTransferFooter = styled.div<StyledTransferProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.border};

  button {
    margin: ${props => props.theme.margin.sm} ${props => props.theme.margin.sm}
      ${props => props.theme.margin.sm} 0;
  }
`;