import styled from 'styled-components';
import { Button } from '../../Button';
import { PureButton } from '../../Button/Pure';
import { Text } from '../../Typography';

export interface StyledTimelineItemProps {
  index?: number;
}
export interface StyledTimelineCircleProps {
  blue?: boolean
};

export const StyledTimelineItem = styled.li<StyledTimelineItemProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding: ${props => props.theme.padding.sm};
  margin-bottom: ${props => props.theme.margin.md};
  background-color: ${props => props.theme.color.default};
  border-radius: ${props => props.theme.border};
`;

export const StyledTimelineSide = styled.div`
  position: absolute;
  height: 100%;
  right: 100%;
`;

export const StyledTimelineCircle = styled.div<StyledTimelineCircleProps>`
  

`;

export const StyledTimelineTitle = styled(Text)`
  display: block;
  margin: 0;
`;

export const StyledTimelineCaption = styled(Text)`
  display: block;
  margin: 0;
  font-size: ${props => props.theme.font.size.sm};
`;

export const StyledTimelineContainer = styled.div``;

export const StyledTimelineButton = styled(PureButton)``;
