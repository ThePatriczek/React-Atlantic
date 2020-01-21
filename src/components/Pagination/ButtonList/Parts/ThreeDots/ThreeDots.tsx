import React, { FC, useState } from 'react';
import { Icon } from '../../../../Icon';
import { Tooltip } from '../../../../Tooltip';
import {
  StyledPaginationIcon,
  StyledPaginationStepIcon,
  StyledThreeDotsText
} from './ThreeDots.style';

interface ThreeDotsProps {
  onClick?: (value: boolean) => void;
  isRight: boolean;
  unique: number;
  text: string;
}

export const ThreeDots: FC<ThreeDotsProps> = props => {
  const { isRight, unique, text } = props;
  const [hovered, setHovered] = useState<boolean>(false);
  const [isClicked, setClicked] = useState<boolean>(false);

  const onClick = () => {
    props.onClick?.(isRight);
    setClicked(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  const onMouseEnter = () => {
    if (props.onClick) {
      setHovered(true);
    }
  };

  return (
    <li
      data-tip
      data-for={unique.toString()}
      key={unique}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!hovered ? (
        <StyledPaginationIcon>•••</StyledPaginationIcon>
      ) : (
        <StyledPaginationStepIcon onClick={onClick}>
          <Icon name={isRight ? 'arrowDoubleRight' : 'arrowDoubleLeft'} />
        </StyledPaginationStepIcon>
      )}

      {hovered && !isClicked && (
        <Tooltip place={'bottom'} id={unique.toString()}>
          <StyledThreeDotsText>
            {text}
          </StyledThreeDotsText>
        </Tooltip>
      )}
    </li>
  );
};
