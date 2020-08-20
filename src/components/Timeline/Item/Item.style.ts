import styled, { css } from 'styled-components';
import { Type } from '../../../types';
import { PureButton } from '../../Button/Pure';
import { StyledIcon } from '../../Icon/Icon.style';
import { Link } from '../../Typography/Link';
import { StyledLink } from '../../Typography/Link/Link.style';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';

const circleSize = `15px`;

export interface StyledTimelineItemProps {
  index?: number;
  highlight?: boolean;
  type?: Type;
  isActive?: Readonly<boolean>;
}

export interface StyledTimelineCircleProps {
  isActive?: boolean;
  type?: Type;
  isDisabled?: Readonly<boolean>;
}

export interface StyledTimelineTitleProps {
  isActive?: boolean;
  type?: Type;
}

export const StyledTimelineButton = styled(PureButton)<{
  isDisabled?: Readonly<boolean>;
}>`
  ${StyledIcon} {
    height: auto;
  }

  ${props =>
    props.isDisabled &&
    css`
      ${StyledIcon} {
        color: ${props.theme.color.text.beta};
      }
    `}
`;

export const StyledTimelineCaption = styled(Link)<{
  hasMarginRight: Readonly<boolean>;
  isDisabled?: Readonly<boolean>;
  type?: Type;
  isActive?: Readonly<boolean>;
}>`
  display: block;
  margin: 0;

  ${StyledText} {
    font-size: ${props => props.theme.font.size.sm};
  }

  ${props =>
    props.hasMarginRight &&
    css`
      margin-right: ${props.theme.margin.sm};
    `}

  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const StyledTimelineCircle = styled.div<StyledTimelineCircleProps>`
  position: relative;
  box-sizing: border-box;
  width: ${circleSize};
  height: ${circleSize};
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.border};
  background-color: ${props => props.theme.color.background.alpha};
`;

export const StyledTimelineTitle = styled(Link)<StyledTimelineTitleProps>`
  display: block;
  overflow: hidden;
  margin: 0;
  font-weight: 600;
  color: ${props => props.theme.color.text.alpha};

  ${StyledTitle5} {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: ${props => props.theme.font.size.md};
  }

  &:hover {
    color: ${props => props.theme.color.text.alpha};

    ${StyledTitle5} {
      color: ${props => props.theme.color.text.alpha};
    }
  }

  ${StyledTitle5} {
    margin: 0;
    color: ${props => props.theme.color.text.alpha};
  }
`;

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
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.color.default};

  ${StyledTimelineCaption} {
    color: ${props => props.theme.color.text.beta};

    ${StyledText} {
      color: ${props => props.theme.color.text.beta};
    }
  }

  ${props =>
    props.isActive &&
    css`
      cursor: default;
      background-color: ${props.theme.color.text.beta};

      ${StyledTimelineCaption} {
        color: ${props.theme.color.text.gamma};

        ${StyledText} {
          color: ${props => props.theme.color.text.gamma};
        }
      }

      ${StyledTimelineTitle} {
        color: ${props => props.theme.color.text.gamma};

        ${StyledTitle5} {
          color: ${props => props.theme.color.text.gamma};
        }

        &:hover {
          cursor: default;
          text-decoration: none;

          ${StyledTitle5} {
            color: ${props => props.theme.color.text.gamma};
          }
        }
      }

      ${StyledTimelineButton} {
        ${StyledIcon} {
          color: ${props => props.theme.color.text.gamma};
        }
      }

      ${StyledTimelineCircle} {
        cursor: default;
        border-color: ${props.theme.color.text.beta};
      }
    `}

  ${props =>
    props.isActive &&
    props.type &&
    props.type !== 'default' &&
    css`
      background-color: ${props.theme.color[props.type]?.alpha};

      ${StyledTimelineCircle} {
        border-color: ${props.theme.color[props.type]?.alpha};
      }
    `}
`;

export const StyledTimelineSide = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  right: calc(100% + ${props => props.theme.margin.sm});
  width: ${circleSize};
`;

export const StyledTimelineContainer = styled.div``;

export const StyledTimelineMainContainer = styled(StyledTimelineContainer)`
  overflow: hidden;
  max-width: 100%;
  padding-right: ${props => props.theme.padding.sm};
  flex: 1 1 0%;
`;

export const StyledTimelineCaptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListElementsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledListItem = styled.li``;
