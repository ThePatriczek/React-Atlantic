import React, { FC, ReactElement, memo } from 'react';
import {
    StyledProgress,
    StyledBar,
    StyledFill,
    StyledProgressText,
} from './style/ProgressBar.style';
import { Position, Type } from '../../../../lib'; //TODO: change to 'react-spring/web.cjs' => IE

interface ProgressProps {
    percent: Readonly<number>;
    type?: Readonly<Type>;
    positionText?: Readonly<Position>;
    className?: string;
}

export type ProgressTypeComponent = FC<Readonly<ProgressProps>>;

export const ProgressBar: ProgressTypeComponent = memo(
    (props: Readonly<ProgressProps>): Readonly<ReactElement> => {
        const { percent, type, positionText, className } = props;

        return (
            <StyledProgress positionText={positionText} className={className}>
                {positionText && (
                    <StyledProgressText
                        positionText={positionText}
                    >{`${percent.toFixed(0)}%`}</StyledProgressText>
                )}
                <StyledBar positionText={positionText}>
                    <StyledFill type={type} width={percent} />
                </StyledBar>
            </StyledProgress>
        );
    }
);

ProgressBar.defaultProps = {
    type: 'primary',
};
