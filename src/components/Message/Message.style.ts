import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Type } from '../../types';
import { Icon } from '../Icon';

interface MessageStyleProps {
  isAlternative?: boolean;
  type?: Type;
}

export const StyledMessageContainer = styled.div<MessageStyleProps>`
  margin: 0 auto ${props => props.theme.margin.md} auto;
  position: relative;
  display: table;
  max-width: 100%;
  padding: ${props => props.theme.padding.md} ${props => props.theme.padding.md}
    ${props => props.theme.padding.md} 34px;
  margin-bottom: ${props => props.theme.padding.sm};

  color: ${props => props.theme.color.text.alpha};
  background-color: ${props => props.theme.color.background.alpha};
  font-variant: tabular-nums;
  line-height: 1.5;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  border-radius: ${props => props.theme.radius};
  text-align: left;
  word-break: break-word;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ${props =>
    props.type === 'primary' &&
    css`
      background-color: ${props.theme.color.background.alpha};
    `}
  ${props =>
    props.type === 'primary' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.primary.alpha};
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      background-color: ${props.theme.color.background.alpha};
    `}
  ${props =>
    props.type === 'success' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.success.alpha};
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      background-color: ${props.theme.color.background.alpha};
    `}
  ${props =>
    props.type === 'warning' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.warning.alpha};
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      background-color: ${props.theme.color.background.alpha};
    `}
  ${props =>
    props.type === 'error' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.error.alpha};
      color: ${props.theme.color.text.gamma};
    `}
`;
export const StyledMessageIconSpan = styled.span<MessageStyleProps>``;
export const StyledMessageIcon = styled(Icon)<MessageStyleProps>`
  cursor: default;
  position: absolute;
  top: 13px;
  left: 10px;
  width: 14px;
  
  ${props =>
    props.name === 'loading' &&
    css`
      width: 14px;
      height: 14px;
      margin: 0;
    `}

  ${props =>
    props.type === 'primary' &&
    css`
      color: ${props.theme.color.primary.alpha};
    `}
  ${props =>
    props.type === 'primary' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      color: ${props.theme.color.success.alpha};
    `}
  ${props =>
    props.type === 'success' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      color: ${props.theme.color.warning.alpha};
    `}
  ${props =>
    props.type === 'warning' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      color: ${props.theme.color.error.alpha};
    `}
  ${props =>
    props.type === 'error' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
`;

export const StyledMessageIconLoading = styled(Icon)<MessageStyleProps>`
  cursor: default;
  position: absolute;
  top: 13px;
  left: 10px;
  
  ${props =>
    props.name === 'loading' &&
    css`
      width: 14px;
      height: 14px;
      margin: 0;
    `}

  ${props =>
    props.type === 'primary' &&
    css`
      color: ${props.theme.color.primary.alpha};
    `}
  ${props =>
    props.type === 'primary' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      color: ${props.theme.color.success.alpha};
    `}
  ${props =>
    props.type === 'success' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      color: ${props.theme.color.warning.alpha};
    `}
  ${props =>
    props.type === 'warning' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      color: ${props.theme.color.error.alpha};
    `}
  ${props =>
    props.type === 'error' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.text.gamma};
    `}
`;
export const StyledMessageContentSpan = styled.span<MessageStyleProps>``;

StyledMessageContainer.defaultProps = {
  theme
};

StyledMessageIconSpan.defaultProps = {
  theme
};

StyledMessageIcon.defaultProps = {
  theme
};

StyledMessageIconLoading.defaultProps = {
  theme
};

StyledMessageContentSpan.defaultProps = {
  theme
};

StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIconSpan.displayName = 'StyledMessageIconSpan';
StyledMessageIcon.displayName = 'StyledMessageIcon';
StyledMessageIconLoading.displayName = 'StyledMessageIconLoading';
StyledMessageContentSpan.displayName = 'StyledMessageContentSpan';
