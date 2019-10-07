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
      background: #f2f2f2;
    }
    
    &:hover{
      background: ${props => darken(0.1, props.theme.color.default)};
    }
`;
