import styled, { css } from 'styled-components';
import { theme } from '../../../../../theme';
import { Button } from '../../../../Button';
import { Icon } from '../../../../Icon';
import { StyledTransferProps } from '../../style';

export const StyledDeleteOneIcon = styled(Icon)<StyledTransferProps>`
  svg,
  path {
    color: ${props => props.theme.color.text.beta};
  }
`;

export const StyledDeleteOneButton = styled(Button)<StyledTransferProps>`
  border: none;
  background: none;
  box-shadow: none;
`;

export const StyledChosenHeader = styled.div<StyledTransferProps>`
  border-bottom: 1px solid ${props => props.theme.color.border};
    ${props =>
      props.size === 'small' &&
      css`
        font-size: ${props.theme.font.size.sm};
        height: ${parseInt(props.theme.height.sm, 0)}px;
        line-height: ${parseInt(props.theme.height.sm, 0)}px;
      `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: ${props.theme.font.size.md};
        height: ${parseInt(props.theme.height.md, 0)}px;
        line-height: ${parseInt(props.theme.height.md, 0)}px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: ${props.theme.font.size.lg};
        height: ${parseInt(props.theme.height.lg, 0)}px;
        line-height: ${parseInt(props.theme.height.lg, 0)}px;
      `};
`;

export const StyledTransferDeleteAllButtonIcon = styled(Icon)<
  StyledTransferProps
>`
  padding-right: 5px;
  ${props =>
    props.size === 'small' &&
    css`
      padding-right: 0;
    `}
`;

export const DeleteAllButton = styled(Button)<StyledTransferProps>`
  ${props =>
    props.globalSize === 'small' &&
    css`
      border: none;
    `}
`;

export const StyledTransferSpan = styled.span<StyledTransferProps>`
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: ${props.theme.font.size.md};
      height: ${parseInt(props.theme.height.md, 0)}px;
      line-height: ${parseInt(props.theme.height.md, 0)}px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${props.theme.font.size.lg};
      height: ${parseInt(props.theme.height.lg, 0)}px;
      line-height: ${parseInt(props.theme.height.lg, 0)}px;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.font.size.sm};
      height: ${parseInt(props.theme.height.sm, 0)}px;
      line-height: ${parseInt(props.theme.height.sm, 0)}px;
    `}
    
`;

StyledTransferSpan.defaultProps = {
  theme
};

StyledTransferSpan.displayName = 'StyledTransferSpan';