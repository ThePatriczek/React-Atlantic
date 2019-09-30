import { lighten } from 'polished';
import styled from 'styled-components';
import { theme } from '../../../theme';

export const StyledLink = styled.a`
  font-size: ${props => props.theme.font.size.md};
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  vertical-align: baseline;

  &:hover {
    text-decoration: underline;
  }

  ::selection,
  ::-moz-selection {
    background: ${props => lighten(0.4, props.theme.color.primary)};
  }
`;

StyledLink.defaultProps = {
  theme
};
