import React, { FC, ReactElement } from 'react';
import { Icon } from '../../../Icon';
import { SortOrder } from '../../Context';
import { StyledSorting } from './Sorting.style';

interface SortingProps {
  order?: SortOrder;
}

export const Sorting: FC<Readonly<SortingProps>> = (
  props
): Readonly<ReactElement> => {
  const { order } = props;

  if (order === 'asc') {
    return (
      <StyledSorting>
        <Icon name={'arrowUp'} />
      </StyledSorting>
    );
  } else if (order === 'desc') {
    return (
      <StyledSorting>
        <Icon name={'arrowDown'} />
      </StyledSorting>
    );
  }

  return (
    <StyledSorting>
      <Icon name={'arrowsVertical'} />
    </StyledSorting>
  );
};
