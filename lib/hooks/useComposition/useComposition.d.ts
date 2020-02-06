import { ReactNode } from 'react';
interface UseCompositionValue {
    getFilteredChildren: (children: Readonly<ReactNode>, displayName?: Readonly<string>) => Array<Readonly<JSX.Element>>;
}
export declare const useComposition: () => Readonly<UseCompositionValue>;
export {};
