import { darken } from 'polished';
import styled from 'styled-components';

export const StyledOption = styled.div`
    display: block;
    padding: 0 ${props => props.theme.padding.md};
    height: ${props => props.theme.height.md};
    line-height: 34px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    
    &:nth-child(odd){
      background-color: ${props => props.theme.color.default};
    }
    
    &:hover{
      background-color: ${props => darken(0.05, props.theme.color.default)};
    }
`;
