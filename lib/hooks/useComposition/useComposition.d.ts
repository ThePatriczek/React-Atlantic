import { ReactNode } from 'react';
declare type GetFilteredChildren = (children: Readonly<ReactNode>, displayName?: Readonly<string>, negation?: Readonly<boolean>) => Array<Readonly<JSX.Element>>;
interface UseCompositionValue {
    getFilteredChildren: GetFilteredChildren;
}
export declare const useComposition: () => Readonly<UseCompositionValue>;
export {};
