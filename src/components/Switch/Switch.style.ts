import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { HorizontalPosition, Size, Type } from '../../types';

interface StyledSwitchProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  textPosition?: HorizontalPosition;
  size?: Size;
  htmlType?: Type;
}

const togglerSizeLarge = '28px';
const togglerSizeNormal = '24px';
const togglerSizeSmall = '16px';

const switchWidthLarge = '80px';
const switchWidthNormal = '70px';
const switchWidthSmall = '50px';

const switchColorOff = theme.color.text.alpha;
const switchBackgroundColorOff = theme.color.border;
const switchColorOn = theme.color.text.gamma;

const paddingMD = parseInt(theme.padding.md, 0);
const marginSM = parseInt(theme.margin.sm, 0);

const switchWidthNormalInt = parseInt(switchWidthNormal, 0);
const togglerSizeNormalInt = parseInt(togglerSizeNormal, 0);

export const StyledSwitchLabel = styled.label<StyledSwitchProps>`
  position: relative;
  display: inline-block;
  width: ${switchWidthNormal};
  height: ${props => props.theme.height.md};
  overflow: hidden;
  cursor: pointer;
  border-radius: ${props => props.theme.height.md};
  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};
  
  ${props =>
    props.size === 'small' &&
    css`
      height: ${props.theme.height.sm};
      width: ${switchWidthSmall};
      font-size: 12px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      height: ${props.theme.height.lg};
      width: ${switchWidthLarge};
      font-size: 16px;
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      height: ${props.theme.height.md};
      width: ${switchWidthNormal};
      font-size: 14px;
    `}
  
   ${props =>
     props.isDisabled &&
     css`
       cursor: not-allowed;
     `}
`;

export const StyledSwitcherWrap = styled.div<StyledSwitchProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 200%;
  transition: right 0.3s;
  
  ${props =>
    props.isChecked &&
    css`
      right: -${switchWidthNormal};
    `}
  
  ${props =>
    props.size === 'small' &&
    props.isChecked &&
    css`
      right: -${switchWidthSmall};
    `}
  
  ${props =>
    props.size === 'large' &&
    props.isChecked &&
    css`
      right: -${switchWidthLarge};
    `}
  ${props =>
    props.size === 'medium' &&
    props.isChecked &&
    css`
      right: -${switchWidthNormal};
    `}
`;

export const StyledSwitcherTrue = styled.div<StyledSwitchProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  height: 100%;
  line-height: 1;
  user-select: none;
  color: ${switchColorOff};
  background-color: ${switchBackgroundColorOff};
  transition: background-color .3s ease, color .3s ease;

  ${props => css`
    padding-left: ${props.theme.padding.md};
    justify-content: flex-start;
  `}
  
  ${props =>
    props.isChecked &&
    css`
      color: ${switchColorOn};
      background-color: ${props.theme.color.primary.alpha};
    `}
  
  ${props =>
    props.htmlType === 'success' &&
    props.isChecked &&
    css`
      color: ${switchColorOn};
      background-color: ${props.theme.color.success.alpha};
    `}
  
  ${props =>
    props.htmlType === 'warning' &&
    props.isChecked &&
    css`
      color: ${switchColorOn};
      background-color: ${props.theme.color.warning.alpha};
    `}
 
  ${props =>
    props.htmlType === 'error' &&
    props.isChecked &&
    css`
      color: ${switchColorOn};
      background-color: ${props.theme.color.error.alpha};
    `}  
  ${props =>
    props.htmlType === 'primary' &&
    props.isChecked &&
    css`
      color: ${switchColorOn};
      background-color: ${props.theme.color.primary.alpha};
    `} 
  
  ${props =>
    props.size === 'small' &&
    css`
      padding-left: ${paddingMD}px;
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      padding-left: ${paddingMD + 3}px;
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      padding-left: ${paddingMD}px;
    `}
  
  ${props => {
    if (props.isDisabled) {
      if (props.isChecked) {
        if (props.htmlType === 'primary') {
          return css`
            background-color: ${theme.color.primary.delta};
          `;
        }

        if (props.htmlType === 'success') {
          return css`
            background-color: ${theme.color.success.delta};
          `;
        }

        if (props.htmlType === 'warning') {
          return css`
            background-color: ${theme.color.warning.delta};
          `;
        }

        if (props.htmlType === 'error') {
          return css`
            background-color: ${theme.color.error.delta};
          `;
        }
      }
    }
    return css``;
  }}
`;

export const StyledSwitcherToggler = styled.div<StyledSwitchProps>`
  position: absolute;
  top: 0;
  right: ${switchWidthNormalInt - togglerSizeNormalInt - 2 * marginSM}px;
  bottom: 0;
  width: ${togglerSizeNormalInt}px;
  margin: ${props => props.theme.margin.sm};

  background-color: ${props => props.theme.color.background.delta};
  border-radius: 50%;
  transition: right 0.3s ease;
  
  ${props =>
    props.isChecked &&
    css`
      right: ${switchWidthNormal};
    `}
  
  ${props =>
    props.isDisabled &&
    css`
      background-color: ${props.theme.color.background.delta};
    `}
 
  ${props =>
    props.size === 'small' &&
    css`
      width: ${togglerSizeSmall};
      right: ${parseInt(switchWidthSmall, 0) -
        parseInt(togglerSizeSmall, 0) -
        2 * parseInt(theme.margin.sm, 0)}px;
      font-size: 12px;
    `}
  
   ${props =>
     props.size === 'small' &&
     props.isChecked &&
     css`
       right: ${switchWidthSmall};
     `}
   
   ${props =>
     props.size === 'large' &&
     css`
       width: ${togglerSizeLarge};
       right: ${parseInt(switchWidthLarge, 0) -
         parseInt(togglerSizeLarge, 0) -
         2 * parseInt(theme.margin.sm, 0)}px;
       font-size: 16px;
     `}
   
   ${props =>
     props.size === 'large' &&
     props.isChecked &&
     css`
       right: ${switchWidthLarge};
     `}
   
   ${props =>
     props.size === 'medium' &&
     css`
       width: ${togglerSizeNormal};
       right: ${switchWidthNormalInt - togglerSizeNormalInt - 2 * marginSM}px;
       font-size: 14px;
     `}
   ${props =>
     props.size === 'medium' &&
     props.isChecked &&
     css`
       right: ${switchWidthNormal};
     `}
    `;

export const StyledSwitcherFalse = styled.div<StyledSwitchProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  height: 100%;
  line-height: 1;

  user-select: none;
  color: ${switchColorOff};
  background-color: ${switchBackgroundColorOff};
  transition: background-color 0.3s ease, color 0.3s ease;
  ${props =>
    props.isChecked &&
    css`
      color: ${switchColorOn};
    `}
  
  ${props =>
    props.isDisabled &&
    css`
      color: ${theme.color.text.gamma};
    `}
   
   ${props =>
     props.isDisabled &&
     props.htmlType &&
     css`
       color: ${theme.color.text.gamma};
     `}
   
 
`;

StyledSwitchLabel.defaultProps = {
  theme
};
StyledSwitcherWrap.defaultProps = {
  theme
};
StyledSwitcherTrue.defaultProps = {
  theme
};
StyledSwitchLabel.defaultProps = {
  theme
};
StyledSwitcherToggler.defaultProps = {
  theme
};
StyledSwitcherFalse.defaultProps = {
  theme
};

StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherWrap.displayName = 'StyledSwitcherWrap';
StyledSwitcherTrue.displayName = 'StyledSwitcherTrue';
StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherToggler.displayName = 'StyledSwitcherToggler';
StyledSwitcherFalse.displayName = 'StyledSwitcherFalse';
