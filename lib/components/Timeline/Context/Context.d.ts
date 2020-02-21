import React, { FC, PropsWithChildren } from 'react';
import { TimelineProps } from '../Timeline';
export interface TimelineContextState {
    onChange: (index?: Readonly<number>) => void;
    activeIndex?: Readonly<number>;
}
export declare const TimelineContext: React.Context<TimelineContextState>;
export declare const useTimeline: () => TimelineContextState;
interface TimelineContextProps extends TimelineProps {
}
export declare const TimelineContextProvider: FC<Readonly<PropsWithChildren<Readonly<TimelineContextProps>>>>;
export {};
