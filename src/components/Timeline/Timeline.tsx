import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { TimelineContextProvider } from './Context';
import { Item, ItemProps } from './Item';
import { StyledTimelineContainer } from './Timeline.style';

export interface TimelineProps {
  onChange?: (index: Readonly<number>) => void;
  activeIndex?: Readonly<number>;
  defaultActiveIndex?: Readonly<number>;
}

export const Timeline: FC<
  Readonly<PropsWithChildren<Readonly<TimelineProps>>>
> & {
  Item: FC<Readonly<ItemProps>>;
} = (props): Readonly<ReactElement> => {
  const { children, onChange, activeIndex, defaultActiveIndex } = props;
  const { getFilteredChildren } = useComposition();

  const items = getFilteredChildren(children, Timeline.Item.displayName);

  return (
    <TimelineContextProvider
      onChange={onChange}
      activeIndex={activeIndex}
      defaultActiveIndex={defaultActiveIndex}
    >
      <StyledTimelineContainer>
        {items.map((item, index: Readonly<number>) => (
          <Timeline.Item key={index} {...item.props} index={index}>
            {item.props?.children}
          </Timeline.Item>
        ))}
      </StyledTimelineContainer>
    </TimelineContextProvider>
  );
};

Timeline.Item = Item;
Timeline.displayName = `Timeline`;
