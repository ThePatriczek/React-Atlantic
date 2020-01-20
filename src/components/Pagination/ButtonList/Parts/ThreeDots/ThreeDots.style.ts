import styled from 'styled-components';
import { StyledIcon } from '../../../../Icon/Icon.style';



export const StyledPaginationIcon = styled.span`
  margin: 0 ${props => props.theme.margin.sm};
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: ${props => props.theme.color.text.beta};
  width: 25px;
`;

export const StyledPaginationStepIcon = styled(StyledPaginationIcon)`
  ${StyledIcon} {
    margin: 0 ${props => props.theme.margin.sm};
    display: inline-block;
    vertical-align: middle;
    color: ${props => props.theme.color.primary.alpha};
    cursor: pointer;
  }
`;
