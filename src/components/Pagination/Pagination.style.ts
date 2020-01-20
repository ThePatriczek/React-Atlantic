import styled from 'styled-components';
import { Input } from '../Input';
import { StyledInput } from '../Input/Input.style';
import { PaginationProps } from './Pagination';

interface StyledPaginationProps extends PaginationProps{

}

export const StyledPagination = styled.div<StyledPaginationProps>`
  user-select: none;

  ul {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      list-style: none;
      margin: 0 ${props => props.theme.margin.xs};
    }
  }

  && {
    > div,
    > span {
      display: inline-block;
      margin: 0 0 0 ${props => props.theme.margin.md};
    }

    span + span {
      margin-left: ${props => props.theme.margin.sm};
    }
  }
`;

export const StyledPaginationInput = styled(Input)`
  ${StyledInput} {
    width: 120px;
  }
`;
