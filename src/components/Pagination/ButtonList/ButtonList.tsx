import React, { FC } from 'react';
import {
  ButtonPaginationText,
  StyledNormalPaginationButton,
  StyledSimplePaginationButton
} from './ButtonList.style';
import { ArrowButton } from './Parts/ArrowButton';
import { ThreeDots } from './Parts/ThreeDots';
import { Size } from '../../../types';

interface ButtonListProps {
  count: number;
  currentPage: number;
  isDisabled: boolean;
  showArrowJumper: boolean;
  showDoubleArrowJumper: boolean;
  showThreeDots: boolean;
  isSimple: boolean;
  textRight?: string;
  textLeft?: string;
  onChange: (value: number) => void;
  size: Size;
}

export const ButtonList: FC<ButtonListProps> = props => {
  const {
    count,
    isDisabled,
    showDoubleArrowJumper,
    showArrowJumper,
    showThreeDots,
    currentPage,
    isSimple,
    textLeft,
    textRight,
    onChange,
    size,
  } = props;

  const disabledMaxCondition: boolean =
    isDisabled || currentPage === count || count === 0;
  const disabledMinCondition: boolean =
    isDisabled || currentPage === 1 || count === 0;

  const onSingleArrowClick = (right: boolean) => {
    right ? onChange(currentPage + 1) : onChange(currentPage - 1);
  };

  const onDoubleArrowClick = (right: boolean) => {
    right ? onChange(count) : onChange(1);
  };

  const onStepClick = (right: boolean) => {
    const step: number = 5;
    right
      ? currentPage + 5 > count
        ? onChange(count)
        : onChange(currentPage + step)
      : currentPage - 5 < 1
      ? onChange(1)
      : onChange(currentPage - 5);
  };

  const middleScenario = (list: number[]) => {
    if (showThreeDots && Math.abs(currentPage - 1) > 3) {
      list.push(-1);
    }
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      list.push(i);
    }
    if (showThreeDots && Math.abs(currentPage - count) > 3) {
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

  const array = generateArray();

  return (
    <ul>
      <ArrowButton
        onClick={() => onDoubleArrowClick(false)}
        isDisabled={isDisabled || disabledMinCondition}
        isSimple={isSimple}
        unique={-3}
        visible={showDoubleArrowJumper}
        size={size}
      />
      <ArrowButton
        onClick={() => onSingleArrowClick(false)}
        isDisabled={isDisabled || disabledMinCondition}
        isSimple={isSimple}
        unique={-1}
        visible={showArrowJumper}
        size={size}
      />
      {array.map((item: number, key: number) => {
        return item === -1 ? (
          <ThreeDots
            text={key > array.length / 2 ? textRight : textLeft}
            unique={-key - 5}
            onClick={isDisabled ? undefined : onStepClick}
            isRight={key > array.length / 2}
          />
        ) : !isSimple ? (
          <li key={item}>
            <StyledNormalPaginationButton
              onClick={() => onChange(item)}
              isActive={item === currentPage}
              isDisabled={isDisabled || item === 0}
              size={size}
            >
              <ButtonPaginationText>{item.toString()}</ButtonPaginationText>
            </StyledNormalPaginationButton>
          </li>
        ) : (
          <li key={item}>
            <StyledSimplePaginationButton
              onClick={() => onChange(item)}
              isActive={item === currentPage}
              isDisabled={isDisabled || item === 0}
              isSimple
              size={size}
            >
              <ButtonPaginationText>{item.toString()}</ButtonPaginationText>
            </StyledSimplePaginationButton>
          </li>
        );
      })}
      <ArrowButton
        onClick={() => onSingleArrowClick(true)}
        isDisabled={isDisabled || disabledMaxCondition}
        isSimple={isSimple}
        unique={-2}
        visible={showArrowJumper}
        size={size}
      />
      <ArrowButton
        onClick={() => onDoubleArrowClick(true)}
        isDisabled={isDisabled || disabledMaxCondition}
        isSimple={isSimple}
        unique={-4}
        visible={showDoubleArrowJumper}
        size={size}
      />
    </ul>
  );
};
