export interface UseClickValue {
    onClick: () => void;
}
export interface UseClickProps {
    deps?: ReadonlyArray<unknown>;
    onClick?: () => void;
}
export declare const useClick: (props: Readonly<UseClickProps>) => Readonly<UseClickValue>;
