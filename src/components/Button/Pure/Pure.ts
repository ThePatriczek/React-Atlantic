import styled from 'styled-components';
import { Button } from '../Button';

export const PureButton = styled(Button)`
  background: none;
  border: none;
  box-shadow: none;

  :hover {
    background: none;
  }
  :after {
    display: none;
  }

  svg {
    height: 20px;
  }
`;
