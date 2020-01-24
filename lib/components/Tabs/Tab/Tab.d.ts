import { FC } from 'react';
import { OptionType } from '../../Select/Select.utils';
export interface TabProps extends OptionType {
    isDisabled?: boolean;
    className?: string;
}
interface TabComponentProps extends TabProps {
    isActive?: boolean;
    isAlternative: boolean;
}
export declare const Tab: FC<TabComponentProps>;
export {};
