import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { PureButton } from '../../Button/Pure';
import { Icon } from '../../Icon/Icon';
import { StyledTreeView } from '../TreeView.style';

export interface StyledTreeViewItemProps {
  size?: string;
  isOpened?: boolean;
  isAlternative?: boolean;
}

const buttonSizeSm = theme.height.sm;
const buttonSizeMd = theme.height.md;
const buttonSizeLg = theme.height.lg;
const itemOuterGap = theme.margin.xs;

export const StyledTreeViewIcon = styled(Icon)``;

export const StyledTreeViewButton = styled(PureButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  height: auto;
  margin-right: ${props => props.theme.margin.sm};
  margin-left: -${props => props.theme.margin.sm};

  &:hover {
    background-color: ${props => props.theme.color.background.beta};

    ${StyledTreeViewIcon} {
      color: ${props => props.theme.color.primary.alpha};
    }
  }

  ${StyledTreeViewIcon} {
    width: auto;
    height: auto;

    svg {
      height: 14px;
    }
  }
`;

export const StyledTreeViewItemTitle = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.padding.xs} ${props => props.theme.padding.sm};

  border-radius: ${props => props.theme.radius};

  &:hover {
    background-color: ${props => props.theme.color.default};
  }
`;

export const StyledTreeViewItem = styled.li<StyledTreeViewItemProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  margin: ${itemOuterGap} 0;

  font-size: ${props => props.theme.font.size.lg};

  ${props =>
    props.isOpened &&
    !props.isAlternative &&
    css`
      & > ${StyledTreeViewItemTitle} {
        ${StyledTreeViewIcon} {
          transform: rotate(90deg);
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
    css`
      &:after {
        content: '';
        position: absolute;
        left: -${parseFloat(buttonSizeSm) / 2}px;
        height: calc(100% + ${2 * parseFloat(itemOuterGap)}px);

        border-left: 1px solid ${props => props.theme.color.border};
      }

      &:before {
        content: '';
        position: absolute;
        width: ${parseFloat(buttonSizeSm) / 2}px;
        left: -${parseFloat(buttonSizeSm) / 2}px;
        top: ${parseFloat(buttonSizeSm) / 2}px;

        border-bottom: 1px solid ${props => props.theme.color.border};
      }

      &:first-child {
        &:after {
          top: ${parseFloat(buttonSizeSm) / 2}px;
          height: calc(
            100% - ${parseFloat(buttonSizeSm) / 2}px + ${itemOuterGap}
          );
        }
      }

      &:last-child {
        &:after {
          top: -${itemOuterGap};
          height: calc(${parseFloat(buttonSizeSm) / 2}px + ${itemOuterGap});
        }
      }

      ${StyledTreeView} ${StyledTreeView} & {
        &:first-child {
          &:after {
            top: 0;
            height: calc(100% + ${2 * parseFloat(itemOuterGap)}px);
          }
        }

        &:last-child {
          &:after {
            top: -${itemOuterGap};
            height: calc(${parseFloat(buttonSizeSm) / 2}px + ${itemOuterGap});
          }
        }
      }
    `}
  
  ${StyledTreeViewItemTitle} {
    ${props =>
      props.size === 'small' &&
      css`
        min-height: ${buttonSizeSm};
      `}
    
    ${props =>
      props.size === 'medium' &&
      css`
        min-height: ${buttonSizeMd};
      `}
    
    ${props =>
      props.size === 'large' &&
      css`
        min-height: ${buttonSizeLg};
      `}
  }
  
  ${StyledTreeViewButton} {
    ${props =>
      props.size === 'small' &&
      css`
        min-width: ${buttonSizeSm};
        height: ${buttonSizeSm};
      `}
  
    ${props =>
      props.size === 'medium' &&
      css`
        min-width: ${buttonSizeMd};
        height: ${buttonSizeMd};
      `}
    
    ${props =>
      props.size === 'large' &&
      css`
        min-width: ${buttonSizeLg};
        height: ${buttonSizeLg};
      `}
  }
`;
