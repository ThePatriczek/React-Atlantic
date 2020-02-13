import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState
} from 'react';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
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
const { Text, Link } = Typography;

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
      <StyledTimelineItem onClick={onClick} className={className}>
        <StyledTimelineSide>
          {isActive ? (
            <StyledTimelineCircle blue />
          ) : (
            <StyledTimelineCircle/>
          )}
        </StyledTimelineSide>
        <StyledTimelineContainer>
          <StyledTimelineTitle>1.12.2018 - bez omezení</StyledTimelineTitle>
          <StyledTimelineCaption>113/2018 Sb.</StyledTimelineCaption>
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
