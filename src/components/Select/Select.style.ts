import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Size } from '../../types';

interface SelectProps {
  isMenuOpened?: boolean;
  isFocused?: boolean;
  isMulti?: boolean;
  hasValue?: boolean;
  isFullWidth?: boolean;
  size: Size;
}

export const SelectContainer = styled.div<SelectProps>`
  position: relative;
  width: 220px;
  line-height: 1;

  font-size: 14px;
  font-family: ${props => props.theme.font.family};

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
 
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}
`;

export const Control = styled.div<SelectProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
  z-index: 1;
  cursor: pointer;
  padding-left: ${props => props.theme.padding.md};
  border: 1px solid ${props => darken(0.1, props.theme.color.default)};
  border-radius: ${props => props.theme.radius};
  background: ${props => props.theme.color.white};
  
  &:hover{
    border: 1px solid ${props => props.theme.color.primary};
  }
  
  ${props =>
    props.isFocused &&
    css`
      border-color: ${props => props.theme.color.primary};
      box-shadow: 0 0 0 2px #c3defd;
    `}
  
  ${props =>
    props.isMenuOpened &&
    css`
      border-bottom: 1px solid
        ${props => darken(0.1, props.theme.color.default)};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  
  ${props =>
    props.isMulti &&
    props.hasValue &&
    css`
      padding-left: 0;
    `}
  
  ${props =>
  props.isFullWidth &&
    css`
      min-width: 100%;
    `}
`;

export const ValueContainer = styled.div<SelectProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 100% 1;
    
    ${props =>
      props.isMulti &&
        css`
          max-width: calc(100% - 72px);
        `}
`;

export const SingleValue = styled.div`
  display: block;
  align-items: center;
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.sm}
    ${props => props.theme.padding.sm} 0;
  border-radius: ${props => props.theme.radius};
  max-width: 165px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 32px;
`;

export const MultiValue = styled.div`
  padding: ${props => props.theme.padding.xs} 0;
  display: flex;
  margin: 2px;
  height: 28px;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.radius};
  background-color: #d1e9fb;
  color: ${props => props.theme.color.black};
  max-width: calc(100% - 6px);

  span {
    margin: 0;
    padding: 0 ${props => props.theme.padding.sm}
    
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ClearIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  color: #777777;

  i:hover {
    color: ${props => props.theme.color.error};
  }
`;

export const MultiValueLabel = styled.div`
  padding: 0 ${props => props.theme.padding.sm};
`;

export const MultiValueRemove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 26px;
    border-left: 1px solid ${props => props.theme.color.primary};
    
    i{
      font-size: 10px;
      
      &:hover{
        color: ${props => props.theme.color.error};
      }
    }
`;

export const NoOptionsMessage = styled.div`
  display: block;
  padding: 0 ${props => props.theme.padding.md};
  height: ${props => props.theme.height.md};
  line-height: 34px;

  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const CrossIcon = styled.button`
    
`;

export const Placeholder = styled.div`
  color: ${props => lighten(0.6, props.theme.color.black)};
`;

export const IndicatorsContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 32px;

  i {
    font-size: 16px;
  }
`;

export const DropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.width.md};
  color: #777777;

  i:hover {
    color: ${props => props.theme.color.primary};
  }
`;

export const IndicatorSeparator = styled.div`
  align-self: stretch;
  background-color: ${props => darken(0.1, props.theme.color.default)};
  margin: ${props => props.theme.margin.sm} 0;
  width: 1px;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const MenuList = styled.div`
  border: 1px solid ${props => props.theme.color.primary};
  border-top: 0;
  border-radius: 0 0 ${props => props.theme.radius}
    ${props => props.theme.radius};
  background: ${props => props.theme.color.white};
  overflow: hidden;
  outline-offset: -2px;
  box-shadow: 0 0 0 2px #c3defd;
`;

export const Input = styled.input`
    position: absolute;
    box-sizing: content-box;
    width: 2px;
    background: 0px center;
    border: 0px;
    font-size: inherit;
    opacity: 1;
    outline: 0px;
    padding: 0px;
    color: inherit;
`;