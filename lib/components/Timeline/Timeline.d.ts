import { FC, PropsWithChildren } from 'react';
import { ItemProps } from './Item/Item';
export interface TimelineProps {
    onChange?: (index: Readonly<number>) => void;
    activeIndex?: Readonly<number>;
    defaultActiveIndex?: Readonly<number>;
}
export declare const Timeline: FC<Readonly<PropsWithChildren<Readonly<TimelineProps>>>> & {
    Item: FC<Readonly<ItemProps>>;
};
