import { FC } from 'react';
import { Size } from '../../types';
import { GroupProps } from '../Radio/Group';
import { TabProps } from './Tab';
export interface TabsProps extends GroupProps {
    activeTab?: any;
    tabs: TabProps | TabProps[];
    /** small | medium | large */
    size?: Size;
    /** custom className */
    className?: string;
    isBordered?: boolean;
    isAlternative?: boolean;
}
export declare const Tabs: FC<TabsProps>;
