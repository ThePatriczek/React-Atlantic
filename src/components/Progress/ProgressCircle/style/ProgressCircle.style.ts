import styled, { css } from 'styled-components';
import { Type } from '../../../../../src/types';

interface StyledSVGCircleProps {
    type?: Type;
    dashOffset?: number;
    strokeWidth?: number;
    dashArray?: number;
}

interface StyledProgressCircleProps {
    circleSize?: number;
    type?: Type;
    key?: number;
}

export const StyledProgressCircle = styled.div<StyledProgressCircleProps>`
    height: ${(props) => props.circleSize}px;
    width: ${(props) => props.circleSize}px;
    position: relative;
`;

export const StyledSVG = styled.svg<StyledSVGCircleProps>`
    height: 100%;
    width: 100%;
    display: block;
    max-width: 100%;
`;

export const StyledSVGCircleOne = styled.circle<StyledSVGCircleProps>`
    stroke: ${(props) => props.theme.color.border};
    stroke-width: ${(props) => props.strokeWidth};
`;

export const StyledSVGCircleTwo = styled.circle<StyledSVGCircleProps>`
    stroke-width: ${(props) => props.strokeWidth};
    stroke-dasharray: ${(props) => props.dashArray};
    stroke-dashoffset: ${(props) => props.dashOffset};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke 1s ease, stroke-dashoffset 1s ease;
    
    ${(props) =>
        props.type === 'error' &&
        css`
            stroke: ${props.theme.color.error.alpha};
        `}

    ${(props) =>
        props.type === 'warning' &&
        css`
            stroke: ${props.theme.color.warning.alpha};
        `}

    ${(props) =>
        props.type === 'primary' &&
        css`
            stroke: ${props.theme.color.primary.alpha};
        `}
        
    ${(props) =>
        props.type === 'success' &&
        css`
            stroke: ${props.theme.color.success.alpha};
        `}
`;

export const StyledCircleText = styled.span<StyledProgressCircleProps>`
    font-family: ${(props) => props.theme.font.family};
    font-size: 26px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export const StyledCircleTextContainer = styled.div<StyledProgressCircleProps>`
    transition: color 1s ease;

    ${(props) =>
        props.type === 'error' &&
        css`
            color: ${props.theme.color.error.alpha};
        `}

    ${(props) =>
        props.type === 'warning' &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}

    ${(props) =>
        props.type === 'primary' &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            color: ${props.theme.color.success.alpha};
        `}   
    
`;
