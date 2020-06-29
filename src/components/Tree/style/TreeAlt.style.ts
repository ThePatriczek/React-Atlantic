import styled from 'styled-components';
import { StyledTreeShared } from './TreeShared.style';

const verticalLineWidth = `11px`;

export const StyledTreeAlt = styled(StyledTreeShared)`
  .rst__lineFullVertical {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: ${verticalLineWidth};
      height: 100%;
      border-left: 1px dashed ${props => props.theme.color.border};
    }
  }

  .rst__lineHalfVerticalTop {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: ${verticalLineWidth};
      height: 50%;
      border-left: 1px dashed ${props => props.theme.color.border};
    }
  }

  .rst__lineFullVertical:first-child + .rst__lineHalfVerticalTop:after {
    display: none;
  }

  .rst__lineHalfHorizontalRight {
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: ${verticalLineWidth};
      height: 1px;
      border-bottom: 1px dashed ${props => props.theme.color.border};
    }
  }
`;
