import React from 'react';
import {
    StyledLoadingCircle,
    StyledSVG,
    StyledSVGCircleOne,
    StyledSVGCircleTwo,
    StyledLoadingCircleText,
} from './style/ProgressCircle.style';
import { Type } from '../../../../src/types';

interface ProgressCircleProps {
    percent: number;
    circleSize?: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
    percent,
    circleSize = 100,
}) => {
    const strokeWidth = 3;
    const center = circleSize / 2;
    const radius = center - strokeWidth;
    const totalDashOffset = 2 * Math.PI * radius;
    const currentDashOffset =
        totalDashOffset - percent * (totalDashOffset / 100);

    let circleTwoType: Type = 'error';

    if (percent > 25) {
        circleTwoType = 'warning';
    }
    if (percent > 50) {
        circleTwoType = 'primary';
    }
    if (percent > 75) {
        circleTwoType = 'success';
    }

    return (
        <StyledLoadingCircle>
            <StyledSVG>
                <StyledSVGCircleOne
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />
                <StyledSVGCircleTwo
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    type={circleTwoType}
                    strokeWidth={strokeWidth}
                    dashOffset={currentDashOffset}
                    dashArray={totalDashOffset}
                />
            </StyledSVG>
            <StyledLoadingCircleText key={percent} type={circleTwoType}>
                {`${percent}%`}
            </StyledLoadingCircleText>
        </StyledLoadingCircle>
    );
};
