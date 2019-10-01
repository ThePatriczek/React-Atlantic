import * as React from 'react';
import ReactTooltip from 'react-tooltip';
export declare const Tooltip: React.FC<ReactTooltip.Props> & {
    show: (target: Element) => void;
    hide: (target: Element) => void;
    rebuild: () => void;
};
