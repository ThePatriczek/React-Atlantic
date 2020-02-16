import { FC, PropsWithChildren } from 'react';
import { DeviceType } from '../../context/Device';
interface DeviceProps {
    devices: ReadonlyArray<Readonly<DeviceType>>;
}
export declare const Device: FC<Readonly<PropsWithChildren<Readonly<DeviceProps>>>>;
export {};
