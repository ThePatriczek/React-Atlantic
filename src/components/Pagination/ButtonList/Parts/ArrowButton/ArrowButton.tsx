import React, { FC } from 'react';
import { Icon, IconName } from '../../../../Icon';
import { StyledPaginationButton } from '../../ButtonList.style';

interface ArrowButtonProps {
  visible: boolean;
  onClick: () => void;
  isDisabled: boolean;
  isSimple: boolean;
  unique: number;
}

export const ArrowButton: FC<ArrowButtonProps> = props => {
  const { isDisabled, isSimple, onClick, unique, visible } = props;

  const map = (key: string): IconName => {
    switch (key) {
      case '-1':
        return 'arrowLeft';
      case '-2':
        return 'arrowRight';
      case '-3':
        return 'arrowDoubleLeft';
      case '-4':
        return 'arrowDoubleRight';
    }
    return 'arrowDoubleRight';
  };

  return visible ? (
    <li key={unique}>
      <StyledPaginationButton
        onClick={onClick}
        isDisabled={isDisabled}
        isSimple={isSimple}
      >
        <Icon name={map(unique.toString())} />
      </StyledPaginationButton>
    </li>
  ) : null;
};
