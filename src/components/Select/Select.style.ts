import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 220px;
  line-height: 1;

  font-size: 14px;
  font-family: ${props => props.theme.font.family};
  
  *{
    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
  }
`;

export const Control = styled.div<{
  isMenuOpened: boolean;
  isFocused: boolean;
  isMulti: boolean;
  hasValue: boolean;
}>`
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
  
  ${props => props.isFocused &&
    css`
      border-color: ${props => props.theme.color.primary};
      box-shadow: 0 0 0 2px #c3defd;
    `}
  
  ${props => props.isMenuOpened &&
    css`
      border-bottom: 1px solid ${props => darken(0.1, props.theme.color.default)};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  
  ${props => props.isMulti && props.hasValue &&
    css`
      padding-left: 0;
    `}
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 100% 1;
`;

export const SingleValue = styled.div`
    display: block;
    align-items: center;
    padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.sm} ${props => props.theme.padding.sm} 0;
    border-radius:  ${props => props.theme.radius};
    max-width: 165px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 32px;
`;

export const MultiValue = styled.div`
    padding: ${props => props.theme.padding.xs} ${props => props.theme.padding.sm};
    display: flex;
    margin: 2px;
    height: 28px;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: ${props => props.theme.radius};
    background-color: #d1e9fb;
    color: ${props => props.theme.color.black};
    
    span{
      margin: 0;
    }
`;

export const ClearIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    color: #777777;
    
    i:hover{
        color: ${props => props.theme.color.error};
      }
`;

export const MultiValueLabel = styled.div`
    padding: 0 ${props => props.theme.padding.sm};
`;

export const MultiValueRemove = styled.div`
    
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

export const CrossIcon = styled.div`

`;

export const Placeholder = styled.div`
  color: ${props => lighten(0.6, props.theme.color.black)};
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  align-items: center;
  transition: color 150ms ease 0s;
  box-sizing: border-box;
  min-height: 32px;
  
  i{
      font-size: 16px;
  }
`;

export const DropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.width.md};
  color: #777777;
  
  i:hover{
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
