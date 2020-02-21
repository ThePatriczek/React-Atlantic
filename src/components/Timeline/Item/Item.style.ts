import styled, { css } from 'styled-components';
import { Type } from '../../../types';
import { PureButton } from '../../Button/Pure';
import { StyledIcon } from '../../Icon/Icon.style';
import { Link } from '../../Typography/Link';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';

const circleSize = `15px`;

export interface StyledTimelineItemProps {
  index?: number;
  highlight?: boolean;
}

export interface StyledTimelineCircleProps {
  isActive?: boolean;
  type?: Type;
}

export interface StyledTimelineTitleProps {
  isActive?: boolean;
}

export interface StyledTimelineContainerProps {
  isMain?: boolean;
}

export const StyledTimelineItem = styled.li<StyledTimelineItemProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: ${props =>
    parseFloat(props.theme.margin.sm) + parseFloat(circleSize)}px;
  padding: ${props => props.theme.padding.sm};
  margin-bottom: ${props => props.theme.margin.md};
  background-color: ${props => props.theme.color.background.alpha};
  border-radius: ${props => props.theme.radius};

  ${props =>
    props.highlight &&
    css`
      background-color: ${props => props.theme.color.default};
    `}
`;

export const StyledTimelineSide = styled.div`
  position: absolute;
  height: 100%;
  right: calc(100% + ${props => props.theme.margin.sm});
  width: ${circleSize};
`;

export const StyledTimelineCircle = styled.div<StyledTimelineCircleProps>`
  position: relative;
  box-sizing: border-box;
  width: ${circleSize};
  height: ${circleSize};
  cursor: pointer;
  margin-top: ${props => props.theme.margin.md};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.text.beta};
  background-color: ${props => props.theme.color.background.alpha};

  ${props =>
    props.type &&
    css`
      border-color: ${props.theme.color[props.type]?.alpha};
    `}

  ${props =>
    props.isActive &&
    css`
      border-color: ${props => props.theme.color.primary.alpha};
    `}
`;

export const StyledTimelineTitle = styled(Link)<StyledTimelineTitleProps>`
  display: block;
  margin: 0;
  font-weight: 600;
  color: ${props => props.theme.color.text.alpha};

  &:hover {
    color: ${props => props.theme.color.primary.alpha};

    ${StyledTitle5} {
      color: ${props => props.theme.color.primary.alpha};
    }
  }

  ${StyledTitle5} {
    margin: 0;
    color: ${props => props.theme.color.text.alpha};

    ${props =>
      props.isActive &&
      css`
        color: ${props => props.theme.color.primary.alpha};
      `}
  }
`;

export const StyledTimelineCaption = styled(Link)`
  display: block;
  margin: 0;
  color: ${props => props.theme.color.text.beta};
  font-size: ${props => props.theme.font.size.sm};

  ${StyledText} {
    color: ${props => props.theme.color.text.beta};
  }
`;

export const StyledTimelineContainer = styled.div<StyledTimelineContainerProps>`
  ${props =>
    props.isMain &&
    css`
      flex: 1 1 0;
    `}
`;

export const StyledTimelineButton = styled(PureButton)`
  ${StyledIcon} {
    height: auto;
  }
`;