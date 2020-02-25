import styled, { css } from 'styled-components';
import { Size } from '../../types';
import { TabsProps } from './Tabs';

interface StyledTabsContainerProps extends TabsProps {}

export const StyledTabsContainer = styled.div<StyledTabsContainerProps>``;

interface StyledTabsBarProps {
  isAlternative: boolean;
  size: Size;
}

export const StyledTabsBar = styled.div<StyledTabsBarProps>`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.color.border};
  outline: none;

  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  font-family: ${props => props.theme.font.family};

  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          * {
            font-size: ${props.theme.font.size.sm};
            line-height: ${props.theme.font.size.sm};
          }
        `;

      default:
      case 'medium':
        return css`
          * {
            font-size: ${props.theme.font.size.md};
            line-height: ${props.theme.font.size.md};
          }
        `;

      case 'large':
        return css`
          * {
            font-size: ${props.theme.font.size.lg};
            line-height: ${props.theme.font.size.lg};
          }
        `;
    }
  }};
`;

interface StyledTabsContentProps {
  isBordered: boolean;
  hasBackground?: boolean;
  size: Size;
}

export const StyledTabsContent = styled.div<StyledTabsContentProps>`
  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};
  padding: ${props => props.theme.padding.md} ${props => props.theme.padding.lg}
    ${props => props.theme.padding.md} ${props => props.theme.padding.lg};

  ${props =>
    props.hasBackground &&
    css`
      background: ${props.theme.color.background.alpha};
    `}

  ${props =>
    props.isBordered &&
    css`
      border-style: solid;
      border-color: ${props.theme.color.border};
      border-width: 0 1px 1px 1px;
      border-radius: 0 0 ${props.theme.radius} ${props.theme.radius};
    `}
`;

StyledTabsContent.displayName = `StyledTabsContent`;
