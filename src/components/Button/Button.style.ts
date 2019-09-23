import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Size } from '../../types';
import { ButtonType } from './Button';

interface StyledButtonProps {
  styleType?: ButtonType;
  isRounded: boolean;
  size: Size;
  isFullWide: boolean;
}

const defaultButton = styled.button`
  padding: 0 ${props => props.theme.padding.md};
  height: 34px;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  color: black;
  border-radius: ${props => props.theme.radius};
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.1s ease;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);
  border: 1px solid ${props => darken(0.1, props.theme.color.default)};
`;

export const StyledButton = styled(defaultButton)<StyledButtonProps>`
  @-webkit-keyframes focusAnimation {
    0%   { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  ${props =>
    !props.disabled &&
    props.styleType !== 'transparent' &&
    !props.isRounded &&
    css`
      &.animation {
        &:after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;

          opacity: 0;
          z-index: -1;
          border-radius: ${props.theme.radius};
          background: ${lighten(0.4, props.theme.color.primary)};
          animation: focusAnimation 0.3s linear;
        }
      }
    `}

  ${props => {
    let color = `black`;
    let bgColor = props.theme.color.default;
    let hoverBgColor = lighten(0.1, bgColor);
    let borderColor = darken(0.1, bgColor);
    let borderType = `solid`;

    if (props.styleType === 'primary') {
      bgColor = props.theme.color.primary;
      hoverBgColor = lighten(0.1, bgColor);
      color = `white`;
      borderColor = bgColor;
    } else if (props.styleType === 'success') {
      bgColor = props.theme.color.success;
      hoverBgColor = lighten(0.05, bgColor);
      color = `white`;
      borderColor = bgColor;
    } else if (props.styleType === 'warning') {
      bgColor = props.theme.color.warning;
      hoverBgColor = lighten(0.15, bgColor);
      color = `white`;
      borderColor = bgColor;
    } else if (props.styleType === 'error') {
      bgColor = props.theme.color.error;
      hoverBgColor = lighten(0.15, bgColor);
      color = `white`;
      borderColor = bgColor;
    } else if (props.styleType === 'dashed') {
      borderType = `dashed`;
    } else if (props.styleType === 'transparent') {
      bgColor = `transparent`;
      color = props.theme.color.primary;
      borderColor = bgColor;
    }

    return css`
      background-color: ${bgColor};
      color: ${color};
      border: 1px ${borderType} ${borderColor};

      &:hover {
        background-color: ${hoverBgColor};
        ${props.styleType === 'transparent' &&
          css`
            border: 1px ${borderType} ${color};
          `}
      }
    `;
  }}

  ${props =>
    props.disabled &&
    css`
      color: ${darken(0.2, `#b7b7b7`)};
      cursor: not-allowed;

      &:hover {
        background-color: ${props.theme.color.default};
      }
    `}
  
  ${props =>
    props.isRounded &&
    css`
      border-radius: ${props.theme.rounded};
    `}
    
  ${props =>
    props.size === 'small' &&
    css`
      padding: 0 ${props.theme.padding.sm};
      height: 26px;
      font-size: 12px;

      > span,
      > i {
        vertical-align: -3px;
      }

      i + span,
      span + i {
        margin-left: ${props.theme.margin.sm};
      }
    `}
    
  ${props =>
    props.size === 'large' &&
    css`
      padding: 0 ${props.theme.padding.lg};
      height: 40px;
      font-size: 16px;

      i + span,
      span + i {
        margin-left: ${props.theme.margin.lg};
      }
    `}
    
  ${props =>
    props.isFullWide &&
    css`
      width: 100%;
    `}
  
    > span, > i{
    height: 18px;
    line-height: 18px;

    display: inline-block;
    vertical-align: 1px;
    pointer-events: none;
    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
  }

  i+span,span+i{
    margin-left: ${props => props.theme.margin.md};
  }

  i{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

StyledButton.defaultProps = {
  theme
};
