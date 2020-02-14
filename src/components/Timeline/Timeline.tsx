import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { TimelineContextProvider } from './Context';
import { Item, ItemProps } from './Item';
import { StyledTimelineContainer } from './Timeline.style';

export interface TimelineProps {
  onChange?: (index: Readonly<number>) => void;
  index?: Readonly<number>;
}

export const Timeline: FC<PropsWithChildren<TimelineProps>> & {
  Item: FC<Readonly<ItemProps>>;
} = (props): Readonly<ReactElement> => {
  const { children, onChange, index } = props;
  const { getFilteredChildren } = useComposition();

  const timelineItems: JSX.Element[] = getFilteredChildren(
    children,
    Timeline.Item.displayName
  );

  return (
    <TimelineContextProvider onChange={onChange} index={index}>
      <StyledTimelineContainer>
        {timelineItems.map(
          (item: Readonly<JSX.Element>, index: Readonly<number>) => (
            <Timeline.Item index={index} key={index}>
              {item.props?.children}
            </Timeline.Item>
          )
        )}
      </StyledTimelineContainer>
    </TimelineContextProvider>
  );
};

Timeline.Item = Item;
Timeline.displayName = `Timeline`;
