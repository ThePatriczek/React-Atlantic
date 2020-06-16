import styled from 'styled-components';
import { StyledIcon } from './Icon.style';

export const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 25px;
`;

export const StyledItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  margin: 15px;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.radius};
  
  ${StyledIcon} {
    margin: ${props => props.theme.margin.xl} 0;
    height: 40px;
    width: auto;
  }
`;

export const StyledItemLabel = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  width: 100%;
  font-size: ${props => props.theme.font.size.sm};
  color: ${props => props.theme.color.text.beta};
  border-top: 1px solid ${props => props.theme.color.border};
  word-break: break-all;
`;