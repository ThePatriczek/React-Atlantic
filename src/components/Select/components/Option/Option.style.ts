import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import { SelectProps } from '../../Select';

export const StyledOption = styled.div<SelectProps>`
  display: block;
  padding: 0 ${props => props.theme.padding.md};
  height: ${props => props.theme.height.md};
  line-height: ${props => props.theme.height.md};

  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:nth-child(odd) {
    background-color: ${props => props.theme.color.background.gamma};
  }

  &:hover {
    background-color: ${props => props.theme.color.background.beta};
  }

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  ${props =>
    props.size === 'small' &&
    css`
      height: ${props => props.theme.height.sm};
      line-height: ${props => props.theme.height.sm};

      span {
        font-size: ${props => props.theme.font.size.sm};
      }
    `}

  ${props =>
    props.size === 'large' &&
    css`
      height: ${props => props.theme.height.lg};
      line-height: ${props => props.theme.height.lg};

      span {
        font-size: ${props => props.theme.font.size.lg};
      }
    `}
`;

StyledOption.defaultProps = {
  theme
};
