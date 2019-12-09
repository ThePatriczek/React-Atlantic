import { darken, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';
import { Size } from '../../types';
import { ButtonType } from './Button';

interface StyledButtonProps {
  styleType?: ButtonType;
  isRound: boolean;
  size: Size;
  isFullWidth: boolean;
  animationRunning?: boolean;
}

const focusAnimation = keyframes`
    0%    {
    opacity: 0; 
    }
    25%   { 
    opacity: 0.5; 
    }
    50%   { 
    opacity: 1; 
    }
    75%   { 
    opacity: 0.5; 
    }
    100%  { 
    opacity: 0; 
    }
`;

const DefaultButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0 ${props => props.theme.padding.md};
  height: ${props => props.theme.height.md};
  line-height: 1.5;

  background-image: none;
  color: ${props => props.theme.color.text.alpha};

  outline: 0;
  cursor: pointer;
  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  user-select: none;
  touch-action: manipulation;
  transition: background-color 0.1s ease;
  box-shadow: ${props => props.theme.boxShadow.sm};
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};

  > span,
  > i {
    height: 18px;
    line-height: 18px;

    display: inline-block;
    vertical-align: 1px;
    pointer-events: none;
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  i {
    vertical-align: 2px;
  }

  i + span,
  span + i {
    margin-left: ${props => props.theme.margin.md};
  }

  i {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  span {
    margin: 0;
  }
`;

export const StyledButton = styled(DefaultButton)<StyledButtonProps>`
${props =>
  !props.disabled &&
  props.styleType !== 'transparent' &&
  props.animationRunning &&
  css`
    &:after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;

      z-index: -1;
      border-radius: ${props.isRound
        ? props.theme.rounded
        : props.theme.radius};
      background: ${props.theme.color.background.gamma};
      animation: ${focusAnimation} 0.4s ease-in-out;
    }
  `}

  ${props => {
    let color = props.theme.color.text.alpha;
    let hoverBgColor = props.theme.color.background.alpha;
    let bgColor = props.theme.color.default;
    let borderColor = props.theme.color.border;
    let borderType = `solid`;

    if (props.styleType === 'primary') {
      bgColor = props.theme.color.primary.alpha;
      hoverBgColor = props.theme.color.primary.beta;
      color = props.theme.color.text.gamma;
      borderColor = bgColor;
    } else if (props.styleType === 'success') {
      bgColor = props.theme.color.success.alpha;
      hoverBgColor = props.theme.color.success.beta;
      color = props.theme.color.text.gamma;
      borderColor = bgColor;
    } else if (props.styleType === 'warning') {
      bgColor = props.theme.color.warning.alpha;
      hoverBgColor = props.theme.color.warning.beta;
      color = props.theme.color.text.gamma;
      borderColor = bgColor;
    } else if (props.styleType === 'error') {
      bgColor = props.theme.color.error.alpha;
      hoverBgColor = props.theme.color.error.beta;
      color = props.theme.color.text.gamma;
      borderColor = bgColor;
    } else if (props.styleType === 'dashed') {
      borderType = `dashed`;
    } else if (props.styleType === 'transparent') {
      bgColor = `transparent`;
      color = props.theme.color.primary.alpha;
      borderColor = bgColor;
    }

    return css`
      background-color: ${bgColor};
      color: ${color};
      border: 1px ${borderType} ${borderColor};
      
      span{
        color: ${color};
      }

      ${props.styleType === 'transparent' &&
        css`
          box-shadow: none;
        `}

      &:hover {
        background-color: ${hoverBgColor};
        ${props.styleType === 'transparent' &&
          css`
            background-color: transparent;
            box-shadow: none;
            border: 1px ${borderType} ${color};
          `}
      }
    `;
  }}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.color.default};
      color: ${props.theme.color.text.beta};
      cursor: not-allowed;

      &:hover {
        background-color: ${props.theme.color.default};
      }
    `}
  
  ${props =>
    props.isRound &&
    css`
      border-radius: ${props.theme.rounded};
    `}
    
  ${props =>
    props.size === 'small' &&
    css`
      padding: 0 ${props.theme.padding.sm};
      height: ${props.theme.height.sm};
      font-size: ${props.theme.font.size.sm};

      > span,
      > i {
        font-size: ${props.theme.font.size.sm};
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
      height: ${props.theme.height.lg};
      font-size: ${props.theme.font.size.lg};

      > span,
      > i {
        font-size: ${props.theme.font.size.lg};
      }

      i + span,
      span + i {
        margin-left: ${props.theme.margin.lg};
      }
    `}
    
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}
`;

export const StyledTypoButton = styled(DefaultButton)`
  padding: 0 ${props => props.theme.padding.sm};
  height: auto;
  margin: 0;

  background: transparent;
  color: ${props => props.theme.color.primary.alpha};
  border: 0;
  box-shadow: none;
`;

StyledButton.defaultProps = {
  theme
};

StyledButton.displayName = 'StyledButton';

StyledTypoButton.defaultProps = {
  theme
};
