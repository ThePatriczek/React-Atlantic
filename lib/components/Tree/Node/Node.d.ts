import { FC, PropsWithChildren, ReactText } from 'react';
import { Size } from '../../../types';
import { IconName } from '../../Icon';
export interface INode<T = unknown> {
    readonly isOpen?: Readonly<boolean>;
    readonly id?: Readonly<ReactText>;
    readonly data?: Readonly<T>;
}
export interface NodeProps extends INode {
    readonly isDefaultOpen?: Readonly<boolean>;
    readonly onChange?: (node: Readonly<INode>) => void;
    readonly iconOpen?: Readonly<IconName>;
    readonly iconClose?: Readonly<IconName>;
}
export interface NodePropsIntern extends NodeProps {
    readonly size?: Readonly<Size>;
    readonly isAlternative?: Readonly<boolean>;
}
export declare const Node: FC<Readonly<PropsWithChildren<Readonly<NodePropsIntern>>>>;
