import { FC, PropsWithChildren } from 'react';
export interface NotFoundProps {
    /** title */
    title?: string;
    /** custom className */
    className?: string;
}
export declare const NotFound: FC<PropsWithChildren<NotFoundProps>>;
