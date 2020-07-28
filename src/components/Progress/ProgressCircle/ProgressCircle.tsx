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
}

export const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {
    const { percent } = props;
    const totalDashOffset = 251;
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
            <StyledSVG height="100" width="100" className="svg">
                <StyledSVGCircleOne cx="50" cy="50" r="40" fill="none" />
                <StyledSVGCircleTwo
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    type={circleTwoType}
                    dashOffset={currentDashOffset}
                />
            </StyledSVG>
            <StyledLoadingCircleText key={percent} type={circleTwoType}>
                {`${percent}%`}
            </StyledLoadingCircleText>
        </StyledLoadingCircle>
    );
};
