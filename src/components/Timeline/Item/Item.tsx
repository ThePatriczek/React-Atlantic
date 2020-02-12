import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState
} from 'react';
import { useTimeline } from '../Context';
import { StyledTimelineItem } from './Item.style';

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

  return (
    <StyledTimelineItem onClick={onClick} className={className}>
      {children}
    </StyledTimelineItem>
  );
};

Item.displayName = `Item`;
