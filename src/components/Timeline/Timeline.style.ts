import styled from 'styled-components';

export interface StyledTimelineProps {}

export const StyledTimelineContainer = styled.ul<StyledTimelineProps>`
  position: relative;
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  &:before {
    content: "";
    position: absolute;
    left: 7px;
    height: 100%;
    border-right: 1px solid ${props => props.theme.color.border};
  }
`;
