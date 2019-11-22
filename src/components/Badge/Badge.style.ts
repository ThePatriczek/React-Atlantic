import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Size, Type } from '../../types';

interface StyledBadgeProps {
  type: Type;
  size: Size;
}

export const StyledIndicator = styled.sup<StyledBadgeProps>`
  display: block;
  ${props =>
    props.size === 'small' &&
    css`
      width: ${props.theme.padding.sm};
      height: ${props.theme.padding.sm};
      border-radius: ${props.theme.padding.sm};
    `}
    ${props =>
      props.size === 'medium' &&
      css`
        width: ${props.theme.padding.md};
        height: ${props.theme.padding.md};
        border-radius: ${props.theme.padding.md};
      `}
    
      ${props =>
        props.size === 'large' &&
        css`
          width: ${props.theme.padding.lg};
          height: ${props.theme.padding.lg};
          border-radius: ${props.theme.padding.lg};
        `}
  
  
  background: ${props =>
    props.type === 'default'
      ? props.theme.color.primary
      : props.theme.color[props.type]};
`;

export const StyledBadge = styled.sup<StyledBadgeProps>`
  display: inline-block;
  text-align: center;
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.family};
  font-weight: 400;
  background: ${props =>
    props.type === 'default'
      ? props.theme.color.primary
      : props.theme.color[props.type]};
  border-radius: ${props => props.theme.radius};

  ${props =>
    props.size === 'small' &&
    css`
      padding: 2px ${props.theme.padding.sm};

      font-size: ${props.theme.font.size.sm};
    `}
  
    ${props =>
      props.size === 'medium' &&
      css`
        padding: ${props.theme.padding.sm}
          ${parseInt(props.theme.padding.md, 0) - 2}px;
        font-size: ${props.theme.font.size.md};
      `}
    
      ${props =>
        props.size === 'large' &&
        css`
          padding: ${props.theme.padding.md}
            ${parseInt(props.theme.padding.lg, 0) - 2}px;
          font-size: ${props.theme.font.size.lg};
        `}
`;

StyledIndicator.defaultProps = {
  theme
};

StyledBadge.defaultProps = {
  theme
};
