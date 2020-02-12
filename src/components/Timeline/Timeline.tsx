import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { TimelineContextProvider } from './Context';
import { Item, ItemProps } from './Item';
import { StyledTimelineContainer } from './Timeline.style';

export interface TimelineProps {
  onChange?: (index: Readonly<number>) => void;
}

export const Timeline: FC<PropsWithChildren<TimelineProps>> & {
  Item: FC<Readonly<ItemProps>>;
} = (props): Readonly<ReactElement> => {
  const { children, onChange } = props;

  const { getFilteredChildren } = useComposition();
  const timelineItem = getFilteredChildren(children, Timeline.Item.displayName);
  const items: JSX.Element[] = [...timelineItem];

  return (
    <TimelineContextProvider onChange={onChange}>
      <StyledTimelineContainer>{items}</StyledTimelineContainer>
    </TimelineContextProvider>
  );
};

Timeline.Item = Item;
Timeline.displayName = `Timeline`;
