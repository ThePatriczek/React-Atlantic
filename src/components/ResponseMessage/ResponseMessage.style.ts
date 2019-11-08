import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Type } from '../../types';
import { Icon } from '../Icon';

interface ResponseMessageStyleProps {
  isAlternative?: boolean;
  type?: Type;
}

export const StyledResponseMessageContainer = styled.div<
  ResponseMessageStyleProps
>`
  margin: 0 auto ${props => props.theme.margin.md} auto;
  position: relative;
  display: table;
  max-width: 100%;
  padding: ${props => props.theme.padding.md} ${props => props.theme.padding.lg}
    ${props => props.theme.padding.md} 34px;
  margin-bottom: ${props => props.theme.padding.sm};

  color: ${props => props.theme.color.black};
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
      background-color: ${props.theme.color.white};
    `}
  ${props =>
    props.type === 'primary' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.primary};
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      background-color: ${props.theme.color.white};
    `}
  ${props =>
    props.type === 'success' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.success};
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      background-color: ${props.theme.color.white};
    `}
  ${props =>
    props.type === 'warning' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.warning};
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      background-color: ${props.theme.color.white};
    `}
  ${props =>
    props.type === 'error' &&
    props.isAlternative &&
    css`
      background-color: ${props.theme.color.error};
      color: ${props.theme.color.white};
    `}
`;
export const StyledResponseMessageIconSpan = styled.span<
  ResponseMessageStyleProps
>``;
export const StyledResponseMessageIcon = styled(Icon)<
  ResponseMessageStyleProps
>`
  cursor: default;
  position: absolute;
  top: 14px;
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
      color: ${props.theme.color.primary};
    `}
  ${props =>
    props.type === 'primary' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'success' &&
    css`
      color: ${props.theme.color.success};
    `}
  ${props =>
    props.type === 'success' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'warning' &&
    css`
      color: ${props.theme.color.warning};
    `}
  ${props =>
    props.type === 'warning' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.white};
    `}
  
  ${props =>
    props.type === 'error' &&
    css`
      color: ${props.theme.color.error};
    `}
  ${props =>
    props.type === 'error' &&
    props.isAlternative &&
    css`
      color: ${props.theme.color.white};
    `}
`;
export const StyledReponseMessageContentSpan = styled.span<
  ResponseMessageStyleProps
>``;

StyledResponseMessageContainer.defaultProps = {
  theme
};

StyledResponseMessageIconSpan.defaultProps = {
  theme
};

StyledResponseMessageIcon.defaultProps = {
  theme
};

StyledReponseMessageContentSpan.defaultProps = {
  theme
};

StyledResponseMessageContainer.displayName = 'StyledResponseMessageContainer';
StyledResponseMessageIconSpan.displayName = 'StyledResponseMessageIconSpan';
StyledResponseMessageIcon.displayName = 'StyledResponseMessageIcon';
StyledReponseMessageContentSpan.displayName = 'StyledReponseMessageContentSpan';
