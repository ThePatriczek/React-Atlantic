import React from 'react';
import { Position, Type } from '../../../types';
import {
    StyledBar,
    StyledFill,
    StyledFillContainer,
    StyledProgressBar,
    StyledProgressText,
} from './style';

interface ProgressBarProps {
    percent: Readonly<number>;
    positionText?: Readonly<Position>;
    className?: Readonly<string>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
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
            <StyledProgressText
                positionText={positionText}
                key={percent}
            >{`${percent.toFixed(0)}%`}</StyledProgressText>
            <StyledBar positionText={positionText}>
                <StyledFillContainer progress={percent}>
                    <StyledFill type={fillType} />
                </StyledFillContainer>
            </StyledBar>
        </StyledProgressBar>
    );
};
