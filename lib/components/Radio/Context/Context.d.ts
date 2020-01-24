import React, { FC, PropsWithChildren } from 'react';
export interface RadioGroupContextState {
    value: any;
    setValue: (value: any) => void;
}
export declare const RadioGroupContext: React.Context<RadioGroupContextState>;
export declare const useRadioGroup: () => RadioGroupContextState;
interface RadioGroupContextProviderProps {
    onChange?: (value: any) => void;
}
export declare const RadioGroupContextProvider: FC<PropsWithChildren<RadioGroupContextProviderProps>>;
export {};
