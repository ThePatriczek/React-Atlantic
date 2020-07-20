import { animated } from 'react-spring/web.cjs';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Position, Size, Type } from '../../types';

export interface StyledPopconfirmProps {
  position?: Position;
  elementRect?: Readonly<any>;
}

export const StyledAnimatedPopconfirmContainer = styled(animated.div)<
  StyledPopconfirmProps
>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
  background-color: ${props => props.theme.color.background.beta};
  height: 150px;
  width: 250px;
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.color.border};
  z-index: 10;

  ${props =>
      props.position === 'left'
        ? css`
            left: calc(${parseInt(props.elementRect.left, 0)}px - 260px);
            top: calc(${parseInt(props.elementRect.top, 0)}px - 59px);
          `
        : props.position === 'right'
        ? css`
            left: calc(
              ${parseInt(props.elementRect.left, 0)}px +
                ${parseInt(props.elementRect.width, 0)}px + 20px
            );
            top: calc(${parseInt(props.elementRect.top, 0)}px - 59px);
          `
        : props.position === 'top'
        ? css`
            top: calc(${parseInt(props.elementRect.top, 0)}px - 170px);
          `
        : props.position === 'bottom' &&
          css`
            top: calc(${parseInt(props.elementRect.top, 0)}px + 55px);
          `}
    :after {
    ${props =>
      props.position === 'left'
        ? css`
            content: '';
            position: absolute;
            top: calc(50% - 16px);
            left: 99%;
            width: 0;
            height: 0;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-left: 16px solid
              ${props => props.theme.color.background.beta};
          `
        : props.position === 'right'
        ? css`
            content: '';
            position: absolute;
            top: calc(50% - 16px);
            right: 99%;
            width: 0;
            height: 0;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-right: 16px solid
              ${props => props.theme.color.background.beta};
          `
        : props.position === 'top'
        ? css`
            content: '';
            position: absolute;
            top: 99%;
            left: calc(50% - 16px);
            width: 0;
            height: 0;
            border-top: solid 16px ${props.theme.color.background.beta};
            border-left: solid 16px transparent;
            border-right: solid 16px transparent;
          `
        : props.position === 'bottom' &&
          css`
            content: '';
            position: absolute;
            bottom: 99%;
            left: calc(50% - 16px);
            width: 0;
            height: 0;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            border-bottom: 16px solid ${props.theme.color.background.beta};
          `}
  }

  :before {
    ${props =>
      props.position === 'left'
        ? css`
            content: '';
            position: absolute;
            top: calc(50% - 16px);
            left: 100%;
            width: 0;
            height: 0;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-left: 16px solid ${props => props.theme.color.border};
          `
        : props.position === 'right'
        ? css`
            content: '';
            position: absolute;
            top: calc(50% - 16px);
            right: 100%;
            width: 0;
            height: 0;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-right: 16px solid ${props => props.theme.color.border};
          `
        : props.position === 'top'
        ? css`
            content: '';
            position: absolute;
            top: 100%;
            left: calc(50% - 16px);
            width: 0;
            height: 0;
            border-top: solid 16px ${props.theme.color.border};
            border-left: solid 16px transparent;
            border-right: solid 16px transparent;
          `
        : props.position === 'bottom' &&
          css`
            content: '';
            position: absolute;
            bottom: 100%;
            left: calc(50% - 16px);
            width: 0;
            height: 0;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            border-bottom: 16px solid ${props.theme.color.border};
          `}
  }
`;

export const StyledPopconfirmFooter = styled.div<StyledPopconfirmProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-self: flex-end;
`;

export const StyledPopconfirmContent = styled.div<StyledPopconfirmProps>`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledPopconfirmContainer = styled.span<StyledPopconfirmProps>`
  display: contents;
`;

export const StyledCancelButtonContainer = styled.div<StyledPopconfirmProps>`
  padding-right: 5px;
`;
