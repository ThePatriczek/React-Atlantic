import React, { FC } from 'react';
import { Typography } from '../../Typography';
import { Icon } from '../../Icon';
import {
  ButtonPaginationText,
  StyledNormalPaginationButton,
  StyledPaginationButton,
  StyledPaginationIcon,
  StyledSimplePaginationButton
} from './ButtonList.style';

interface ButtonListProps {
  count: number;
  currentPage: number;
  isDisabled: boolean;
  showArrowJumper: boolean;
  showDoubleArrowJumper: boolean;
  showThreeDots: boolean;
  setPage: (value: number) => void;
  isSimple: boolean;
}

export const ButtonList: FC<ButtonListProps> = props => {
  const {
    count,
    isDisabled,
    showDoubleArrowJumper,
    showArrowJumper,
    showThreeDots,
    setPage,
    currentPage,
    isSimple
  } = props;

  const disabledMaxCondition: boolean =
    isDisabled || currentPage === count || count === 0;
  const disabledMinCondition: boolean =
    isDisabled || currentPage === 1 || count === 0;

  const onSingleArrowClick = (right: boolean) => {
    right ? setPage(currentPage + 1) : setPage(currentPage - 1);
  };

  const onDoubleArrowClick = (right: boolean) => {
    right ? setPage(count) : setPage(1);
  };

  const leftArrow = (
    <li key={-1}>
      <StyledPaginationButton
        onClick={() => onSingleArrowClick(false)}
        isDisabled={isDisabled || disabledMinCondition}
        isSimple={isSimple}
      >
        <Icon name={'arrowLeft'}/>
      </StyledPaginationButton>
    </li>
  );

  const rightArrow = (
    <li key={-2}>
      <StyledPaginationButton
        onClick={() => onSingleArrowClick(true)}
        isDisabled={isDisabled || disabledMaxCondition}
        isSimple={isSimple}
      >
        <Icon name={'arrowRight'}/>
      </StyledPaginationButton>
    </li>
  );

  const doubleLeftArrow = (
    <li key={-3}>
      <StyledPaginationButton
        onClick={() => onDoubleArrowClick(false)}
        isDisabled={disabledMinCondition}
        isSimple={isSimple}
      >
        <Icon name={'arrowDoubleLeft'}/>
      </StyledPaginationButton>
    </li>
  );

  const doubleRightArrow = (
    <li key={-4}>
      <StyledPaginationButton
        onClick={() => onDoubleArrowClick(true)}
        isDisabled={disabledMaxCondition}
        isSimple={isSimple}
      >
        <Icon name={'arrowDoubleRight'}/>
      </StyledPaginationButton>
    </li>
  );

  const threeDots = <StyledPaginationIcon>•••</StyledPaginationIcon>;

  const middleScenario = (list: number[]) => {
    if (showThreeDots) {
      list.push(-1);
    }
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      list.push(i);
    }
    if (showThreeDots) {
      list.push(-1);
    }
  };

  const noMiddleScenario = (list: number[], right: boolean) => {
    if (count > 6) {
      if (right && showThreeDots) {
        list.push(-1);
      }
      for (
        let i: number = right ? count - 4 : 2;
        i < (right ? count : 1 + 5);
        i++
      ) {
        list.push(i);
      }
      if (!right && showThreeDots) {
        list.push(-1);
      }
    } else {
      for (let i = 2; i < count; i++) {
        list.push(i);
      }
    }
  };

  const generateArray = (): number[] => {
    const result: number[] = [];
    count === 0 ? result.push(0) : result.push(1);

    if (Math.abs(currentPage - 1) >= 3 && Math.abs(currentPage - count) >= 3) {
      middleScenario(result);
    } else {
      noMiddleScenario(
        result,
        Math.abs(currentPage - 1) > Math.abs(currentPage - count)
      );
    }
    if (count !== 1 && count !== 0) {
      result.push(count);
    }
    return result;
  };

  return (
    <ul>
      {showDoubleArrowJumper && doubleLeftArrow}
      {showArrowJumper && leftArrow}
      {generateArray().map((item: number, key: number) => {
        return item === -1 ? (
          <li key={-key - 5}>{threeDots}</li>
        ) : !isSimple ? (
          <li key={item}>
            <StyledNormalPaginationButton
              onClick={() => setPage(item)}
              isActive={item === currentPage}
              isDisabled={isDisabled || item === 0}
            >
              <ButtonPaginationText>{item.toString()}</ButtonPaginationText>
            </StyledNormalPaginationButton>
          </li>
        ) : (
          <li key={item}>
            <StyledSimplePaginationButton
              onClick={() => setPage(item)}
              isActive={item === currentPage}
              isDisabled={isDisabled || item === 0}
              isSimple={true}
            >
              <ButtonPaginationText>{item.toString()}</ButtonPaginationText>
            </StyledSimplePaginationButton>
          </li>
        );
      })}
      {showArrowJumper && rightArrow}
      {showDoubleArrowJumper && doubleRightArrow}
    </ul>
  );
};
