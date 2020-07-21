import React from 'react';
import { Text } from '../../Typography/Text';
import {
    StyledLoadingCircle,
    StyledSVG,
    StyledSVGCircleOne,
    StyledSVGCircleTwo,
    StyledSVGCircleText,
} from './style/Circle.style';
import { ColorResult } from 'react-color';
import { Type } from 'src/types';

interface LoadingCircleProps {
    progress: number;
}

export const LoadingCircle: React.FC<LoadingCircleProps> = (props) => {
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
            <StyledSVGCircleText key={progress} type={circleTwoType}>
                {`${progress}%`}
            </StyledSVGCircleText>
        </StyledLoadingCircle>
    );
};
