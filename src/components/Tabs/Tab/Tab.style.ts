import styled, { css } from 'styled-components';
import { StyledIcon } from '../../Icon/Icon.style';
import { StyledText } from '../../Typography/Text/Text.style';

interface StyledTabProps {
  isDisabled: boolean;
  isActive: boolean;
  isAlternative: boolean;
}

export const StyledTab = styled.label<StyledTabProps>`
  color: ${props => props.theme.color.text.beta};
  user-select: none;
  position: relative;
  display: inline-block;
  height: 100%;
  margin: 0;
  padding: ${props => props.theme.padding.md} ${props =>
  props.theme.padding.lg};
  border-radius: ${props => props.theme.radius} ${props =>
  props.theme.radius} 0 0;
  box-sizing: border-box;

  cursor: pointer;
  text-decoration: none;
  
   -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  
    ${StyledText},${StyledIcon} {
        color: ${props => props.theme.color.text.beta};
        font-size: ${props => props.theme.font.size.md};
        
        -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

  ${StyledIcon} {
    padding-right: ${props => props.theme.padding.sm};
  }

  ${props =>
    props.isActive &&
    css`
      :before {
        content: '';
        position: absolute;
        width: 100%;
        top: -1px;
        left: 0;
        right: 0;

        border-top: 2px solid transparent;
        border-radius: ${props => props.theme.radius} ${props =>
      props.theme.radius} 0 0;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        pointer-events: none;
      }
      
      color: ${props.theme.color.primary.alpha};
      
      ${StyledText},${StyledIcon} {
        color: ${props.theme.color.primary.alpha};
      }

      :after {
        content: '';
        position: absolute;
        height: 3px;
        bottom: -2px;
        left: 0;
        right: 0;
      }
    `}
  
  ${props =>
    !props.isAlternative &&
    props.isActive &&
    css`
      :after {
        background: ${props.theme.color.primary.alpha};
        border-radius: ${props => props.theme.radius};
      }
    `}

  ${props =>
    props.isAlternative &&
    props.isActive &&
    css`
      border-color: ${props.theme.color.border};
      border-style: solid;
      border-width: 1px 1px 0 1px;
      background: ${props.theme.color.background.alpha};
      :after {
        background: ${props => props.theme.color.background.alpha};
        border-radius: 0;
      }
    `}

  ${props =>
    props.isDisabled
      ? css`
          color: ${props.theme.color.text.beta};
          opacity: .5;
          transition: none;
          cursor: not-allowed;
          
          ${StyledText},${StyledIcon} {
            color: ${props.theme.color.text.beta};
            opacity: .5;
          }
        `
      : css`
          :hover {
            color: ${props => props.theme.color.primary.alpha};
            
            ${StyledText},${StyledIcon} {
              color: ${props => props.theme.color.primary.alpha};
            }
          }
        `}
`;
