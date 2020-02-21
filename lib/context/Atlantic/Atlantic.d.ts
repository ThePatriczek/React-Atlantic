import { FC, PropsWithChildren } from 'react';
import { ThemeProviderProps } from '../../theme';
import { DeviceProviderProps } from '../Device';
export interface AtlanticProviderProps extends ThemeProviderProps, DeviceProviderProps {
}
export declare const AtlanticProvider: FC<Readonly<PropsWithChildren<Readonly<AtlanticProviderProps>>>>;
