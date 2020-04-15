import * as React from 'react';
import { FC, PropsWithChildren } from 'react';
export declare type DeviceType = 'mobile' | 'tabletVertical' | 'tabletHorizontal' | 'laptop' | 'desktop';
export interface DeviceObject {
    min?: Readonly<number>;
    max?: Readonly<number>;
}
export declare type Devices = ReadonlyMap<DeviceType, DeviceObject>;
export interface DeviceContextState {
    devices: Readonly<Devices>;
    currentDevice: Readonly<DeviceType>;
}
interface ContextProps {
    currentDevice: Readonly<DeviceType>;
    isTouchable: Readonly<boolean>;
}
export declare const DeviceContext: React.Context<Readonly<ContextProps>>;
export declare const useDevice: () => Readonly<ContextProps>;
export interface DeviceProviderProps {
    devices?: Readonly<Devices>;
    currentDevice?: Readonly<DeviceType>;
}
export declare const DeviceProvider: FC<Readonly<PropsWithChildren<Readonly<DeviceProviderProps>>>>;
export declare const debounce: (cb: () => void, interval: number) => (...args: readonly Event[]) => void;
export {};
