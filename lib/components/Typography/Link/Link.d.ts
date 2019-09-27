import * as React from 'react';
export interface LinkProps {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    onClick?: () => void;
    /** custom className */
    className?: string;
}
export declare const Link: React.FC<React.PropsWithChildren<LinkProps>>;
