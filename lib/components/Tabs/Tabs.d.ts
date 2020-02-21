import { FC } from 'react';
import { SpringConfig } from 'react-spring/web.cjs';
import { Size } from '../../types';
import { GroupProps } from '../Radio/Group';
import { TabProps } from './Tab';
export interface TabsProps extends GroupProps {
    /** Animation config */
    animationConfig?: SpringConfig;
    /** value of activeTab */
    activeTab?: Readonly<any>;
    /** tabs which render in group */
    tabs: TabProps | TabProps[];
    /** small | medium | large */
    size?: Readonly<Size>;
    /** custom className */
    className?: Readonly<string>;
    isBordered?: Readonly<boolean>;
    isAlternative?: Readonly<boolean>;
}
export declare const Tabs: FC<Readonly<TabsProps>>;
