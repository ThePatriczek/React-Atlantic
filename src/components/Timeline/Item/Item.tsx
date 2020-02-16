import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Icon } from '../../Icon';
import { useTimeline } from '../Context';
import {
  StyledTimelineButton,
  StyledTimelineCaption,
  StyledTimelineCircle,
  StyledTimelineContainer,
  StyledTimelineItem,
  StyledTimelineSide,
  StyledTimelineTitle
} from './Item.style';

export interface ItemProps {
  onClick?: () => void;
  index?: Readonly<number>;
  className?: Readonly<string>;
}

export const Item: FC<PropsWithChildren<ItemProps>> = (props): ReactElement => {
  const { children, index, className } = props;
  const { onChange } = useTimeline();

  const onClick = () => {
    props.onClick?.();

    if (typeof index !== 'undefined') {
      onChange(index);
    }
  };

  const isActive: Readonly<boolean> = true;

  return (
    <StyledTimelineItem onClick={onClick} className={className} {...(isActive ? { highlight: true } : {})}>
      <StyledTimelineSide>
        <StyledTimelineCircle {...(isActive ? { blue: true } : {})}/>
      </StyledTimelineSide>
      <StyledTimelineContainer isMain>
        <StyledTimelineTitle href={"#"} {...(isActive ? { blue: true } : {})}>1.12.2018 - bez omezení</StyledTimelineTitle>
        <StyledTimelineCaption href={"#"}>113/2018 Sb.</StyledTimelineCaption>
      </StyledTimelineContainer>
      <StyledTimelineContainer>
        <StyledTimelineButton size={'small'}>
          <Icon name={'hamburger'} />
        </StyledTimelineButton>
      </StyledTimelineContainer>
    </StyledTimelineItem>
  );
};

Item.displayName = `Item`;
