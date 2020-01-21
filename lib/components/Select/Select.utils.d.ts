import * as React from 'react';
export interface OptionType {
    value: any;
    label: React.ReactNode;
}
export declare const checkChildrenAndOptions: (children?: any, options?: OptionType[] | undefined) => OptionType[];
export declare const isElementInViewport: (el: Element) => boolean;
export declare const getPositionOfElementInViewport: (el: Element) => "left" | "right" | "top" | "bottom" | null;
