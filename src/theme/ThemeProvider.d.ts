import { FC, PropsWithChildren } from 'react';
import { Theme } from './theme';
export interface ThemeProviderProps {
    theme: Readonly<Theme>;
}
export declare const ThemeProvider: FC<Readonly<PropsWithChildren<Readonly<ThemeProviderProps>>>>;
