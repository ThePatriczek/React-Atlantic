import { FC, PropsWithChildren } from 'react';
import { Type } from '../../types';
export interface MessageProps {
    type?: Type;
    isLoading?: boolean;
    isAlternative?: boolean;
    onClick?: () => void;
}
export declare const Message: FC<PropsWithChildren<MessageProps>>;
