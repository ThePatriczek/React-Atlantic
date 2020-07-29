import React from 'react';
import {
    StyledProgressBar,
    StyledBar,
    StyledFill,
    StyledProgressText,
    StyledFillContainer,
} from './style/ProgressBar.style';
import { Position, Type } from '../../../../lib';

interface ProgressBarProps {
    percent: Readonly<number>;
    positionText?: Readonly<Position>;
    className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    const { percent, positionText, className } = props;

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
            {positionText && (
                <StyledProgressText
                    positionText={positionText}
                    key={percent}
                >{`${percent.toFixed(0)}%`}</StyledProgressText>
            )}
            <StyledBar positionText={positionText}>
                <StyledFillContainer progress={percent}>
                    <StyledFill type={fillType} />
                </StyledFillContainer>
            </StyledBar>
        </StyledProgressBar>
    );
};
