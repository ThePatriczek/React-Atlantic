import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

export const SelectContainer = styled.div`
    position: relative;
    width: 100%;
    min-width: 130px;
    
    font-size: 14px;
    font-family: ${props => props.theme.font.family};
`;

export const Control = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 170px;
    height: 100%;
    min-height: 32px;
    z-index: 1;
    cursor: pointer;
    padding-left: ${props => props.theme.padding.md};
    border: 1px solid ${props => darken(0.1, props.theme.color.default)};
    border-radius: ${props => props.theme.radius};
    background: ${props => props.theme.color.white};

    
`;

export const ValueContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 100% 1;
`;

export const Placeholder = styled.div`
    color: ${props => lighten(0.6, props.theme.color.black)};
`;

export const IndicatorsContainer = styled.div`
    display: flex;
    align-items: center;
    transition: color 150ms ease 0s;
    box-sizing: border-box;
    min-height: 34px;
`;

export const DropdownIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.theme.width.md};
    color: #777777;
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
    box-shadow: ${props => props.theme.boxShadow};
`;

export const MenuList = styled.div`
    border: 1px solid ${props => props.theme.color.primary};
    border-top: 0;
    border-radius: 0 0 ${props => props.theme.radius} ${props => props.theme.radius};
    background: ${props => props.theme.color.white};
    overflow: hidden;
`;