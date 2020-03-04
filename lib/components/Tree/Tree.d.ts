import React, { FC, PropsWithChildren } from 'react';
import { Size } from '../../types';
import { NodeProps } from './Node';
export interface TreeProps {
    readonly isAlternative?: Readonly<boolean>;
    readonly size?: Readonly<Size>;
    readonly nodes?: ReadonlyArray<Readonly<JSX.Element>>;
}
export declare const Tree: React.FC<PropsWithChildren<TreeProps>> & {
    Node: FC<Readonly<NodeProps>>;
};
