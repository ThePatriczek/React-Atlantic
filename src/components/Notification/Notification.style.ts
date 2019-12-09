import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Size, Type } from '../../types';
import { Button } from '../Button';
import { Icon, IconName } from '../Icon';
import { Title } from '../Typography/Title';

interface NotificationStyleProps {
  size?: Size;
  type?: Type;
  titleIcon?: IconName;
  secondaryButton?: string;
  primaryButtonIcon?: IconName;
}

export const StyledNotificationTitleIcon = styled(Icon)<NotificationStyleProps>`
  display: inline-block;
  flex: ${props => props.theme.height.md};
  height: ${props => props.theme.height.md};
  line-height: ${props => parseInt(props.theme.height.md, 0) - 1}px;
  cursor: default;
  &:last-of-type {
    cursor: pointer;
    color: ${props => props.theme.color.text.beta};
    &:hover {
      color: ${props => props.theme.color.error.alpha};
    }
  }
`;

export const StyledNotificationButtonIcon = styled(Icon)<
  NotificationStyleProps
>`
  color: ${props => props.theme.color.text.gamma};
`;

Title.defaultProps = {
  level: 5
};
export const StyledNotificationTitle = styled(Title)<NotificationStyleProps>`
  display: inline-block;
  padding: 0 ${props => props.theme.padding.md} 0 0;
  margin: 0;
  height: ${props => props.theme.height.md};
  line-height: ${props => props.theme.height.md};
  flex: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledNotificationContentContainer = styled.div<
  NotificationStyleProps
>`
  padding: ${props => props.theme.padding.sm};
  ${props =>
    props.type &&
    props.type !== 'default' &&
    css`
      padding: ${props.theme.padding.md} ${props.theme.padding.sm}
        ${props.theme.padding.sm} 34px;
    `}
`;

export const StyledNotificationTitleContainer = styled.div<
  NotificationStyleProps
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.border};
  padding-bottom: ${props => parseInt(props.theme.padding.xs, 0) + 3}px;
  margin-left: ${props => props.theme.margin.sm};
  color: ${props => props.theme.color.text.alpha};

  ${props =>
    props.type &&
    props.type !== 'default' &&
    css`
      margin-left: ${props.theme.height.md};

      & > ${StyledNotificationTitleIcon}:first-of-type {
        margin-left: -${props.theme.height.md};
      }

      & > ${StyledNotificationTitle} {
        padding-left: ${parseInt(props.theme.padding.xs, 0) + 1}px;
      }
    `}
  ${props =>
    props.type === 'primary' &&
    css`
      color: ${props.theme.color.primary.alpha};
      
      i{
        color: ${props.theme.color.primary.alpha};
      }
    `}
    ${props =>
      props.type === 'success' &&
      css`
        color: ${props.theme.color.success.alpha};
        
        i{
          color: ${props.theme.color.success.alpha};
        }
      `}
    ${props =>
      props.type === 'error' &&
      css`
        color: ${props.theme.color.error.alpha};
        
        i{
          color: ${props.theme.color.error.alpha};
        }
      `}
    ${props =>
      props.type === 'warning' &&
      css`
        color: ${props.theme.color.warning.alpha};
        
        i{
          color: ${props.theme.color.warning.alpha};
        }
      `}
`;

export const StyledNotificationFooter = styled.div<NotificationStyleProps>`
  margin-left: ${props => props.theme.margin.sm};
  text-align: right;
  button,
  > p,
  > span {
    margin: 0;
  }

  button + button,
  span + button {
    margin: 0 0 0 ${props => props.theme.margin.sm};
  }
`;
export const StyledNotificationSpan = styled.span<NotificationStyleProps>``;
export const StyledNotificationButton = styled(Button)<NotificationStyleProps>`
  ${props =>
    css`
      &:last-of-type {
        background-color: ${props.theme.color.primary.alpha};
        color: ${props.theme.color.text.gamma};
      }
    `}

  ${props =>
    props.primaryButtonIcon &&
    css`
      &span {
        margin-right: 10px;
      }
    `}
`;

export const StyledNotificationContainer = styled.div<NotificationStyleProps>`
  display: block;
  max-width: 500px;
  color: ${props => props.theme.color.text.alpha};
  background-color: ${props => props.theme.color.background.alpha};
  padding: ${props => props.theme.padding.md};
  margin-bottom: ${props => props.theme.margin.md};
  margin-left: auto;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.boxShadow};

  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  
  ${props =>
    props.size === 'medium' &&
    css`
      max-width: 500px;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      max-width: 300px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      max-width: 700px;
    `}
`;

StyledNotificationContainer.defaultProps = {
  theme
};

StyledNotificationTitleIcon.defaultProps = {
  theme
};

StyledNotificationTitle.defaultProps = {
  theme
};

StyledNotificationButton.defaultProps = {
  theme
};

StyledNotificationButtonIcon.defaultProps = {
  theme
};

StyledNotificationContentContainer.defaultProps = {
  theme
};

StyledNotificationFooter.defaultProps = {
  theme
};

StyledNotificationSpan.defaultProps = {
  theme
};

StyledNotificationTitleContainer.defaultProps = {
  theme
};

StyledNotificationContainer.displayName = 'StyledNotificationContainer';
StyledNotificationTitleIcon.displayName = 'StyledNotificationTitleIcon';
StyledNotificationTitle.displayName = 'StyledNotificationTitle';
StyledNotificationButton.displayName = 'StyledNotificationButton';
StyledNotificationButtonIcon.displayName = 'StyledNotificationButtonIcon';
StyledNotificationContentContainer.displayName =
  'StyledNotificationContentContainer';
StyledNotificationFooter.displayName = 'StyledNotificationFooter';
StyledNotificationSpan.displayName = 'StyledNotificationSpan';
StyledNotificationTitleContainer.displayName =
  'StyledNotificationTitleContainer';
