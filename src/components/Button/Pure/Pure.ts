import styled from 'styled-components';
import { Button } from '../Button';

export const PureButton = styled(Button)`
   svg{
      height: 20px;
   }
   
   && {
      background: none;
      border: none;
      box-shadow: none;
      :hover {
         background: none;
      }
      :after {
         display: none;
      }
   }
 `;