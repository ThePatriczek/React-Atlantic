import React, { ReactElement } from 'react';
import {
    StyledLoadingCircle,
    StyledSVG,
    StyledSVGCircleOne,
    StyledSVGCircleTwo,
    StyledLoadingCircleText,
} from './style/ProgressCircle.style';

export const ProgressCircle: React.FC<ProgressCircleProps> = (props) => {
    const { progress } = props;
    const totalDashOffset = 251;
    const currentDashOffset =
        totalDashOffset - progress * (totalDashOffset / 100);
    let circleTwoType: Type = 'error';

    if (progress > 25) {
        circleTwoType = 'warning';
    }
    if (progress > 50) {
        circleTwoType = 'primary';
    }
    if (progress > 75) {
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
            <StyledLoadingCircleText key={progress} type={circleTwoType}>
                {`${progress}%`}
            </StyledLoadingCircleText>
        </StyledLoadingCircle>
    );
};
