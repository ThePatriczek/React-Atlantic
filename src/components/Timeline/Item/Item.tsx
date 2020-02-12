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
  const { children, index: contextIndex, className } = props;
  const { onChange } = useTimeline();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setIndex(prevIndex => prevIndex++);
  }, []);

  const onClick = () => {
    props.onClick?.();

    if (typeof contextIndex !== 'undefined') {
      onChange(contextIndex);
    }
  };

  return (
    <StyledTimelineItem onClick={onClick} className={className} index={index}>
      {children}
    </StyledTimelineItem>
  );
};

Item.displayName = `Item`;
