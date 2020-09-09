import React, { FC } from 'react';
import { Position, Type } from '../../../types';
import {
    StyledProgressBar,
    StyledProgressBarFill,
    StyledProgressBarFillContainer,
    StyledProgressBarLine,
    StyledProgressBarText,
} from './style';

interface ProgressBarProps {
    percent: Readonly<number>;
    positionText?: Readonly<Position>;
    className?: Readonly<string>;
}

export type ProgressBarType = FC<ProgressBarProps>;

export const ProgressBar: ProgressBarType = ({
    percent,
    positionText = 'right',
    className,
}) => {
    let fillType: Type = 'error';

    if (percent > 25) {
        fillType = 'warning';
    }
    if (percent > 50) {
        fillType = 'primary';
    }
    if (percent > 75) {
        fillType = 'success';
    }

    return (
        <StyledProgressBar positionText={positionText} className={className}>
            <StyledProgressBarText
                positionText={positionText}
                key={percent}
            >{`${percent.toFixed(0)}%`}</StyledProgressBarText>
            <StyledProgressBarLine positionText={positionText}>
                <StyledProgressBarFillContainer progress={percent}>
                    <StyledProgressBarFill type={fillType} />
                </StyledProgressBarFillContainer>
            </StyledProgressBarLine>
        </StyledProgressBar>
    );
};
