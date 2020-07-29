import styled, { css } from 'styled-components';
import { Type } from '../../../../../src/types';
import { Text } from '../../../Typography/Text';

interface StyledSVGCircleTwoProps {
    type: Type;
    dashOffset?: number;
    strokeWidth: number;
    dashArray: number;
}

interface StyledSVGCircleOneProps {
    strokeWidth: number;
}

interface StyledCircleText {
    key: number;
}

interface StyledCircleTextContainerProps {
    type: Type;
}

export const StyledProgressCircle = styled.div`
    height: 100px;
    width: 100px;
    position: relative;
`;

export const StyledSVG = styled.svg`
    height: 100%;
    width: 100%;
    display: block;
    max-width: 100%;
`;

export const StyledSVGCircleOne = styled.circle<StyledSVGCircleOneProps>`
    stroke: ${(props) => props.theme.color.border};
    stroke-width: ${(props) => props.strokeWidth};
`;

export const StyledSVGCircleTwo = styled.circle<StyledSVGCircleTwoProps>`
    stroke-width: ${(props) => props.strokeWidth};
    stroke-dasharray: ${(props) => props.dashArray};
    stroke-dashoffset: ${(props) => props.dashOffset};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke 2s ease, stroke-dashoffset 2s ease;
    
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

export const StyledCircleText = styled.span<StyledCircleText>`
    font-family: ${(props) => props.theme.font.family};
    font-size: 26px;
    text-anchor: middle;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export const StyledCircleTextContainer = styled.div<
    StyledCircleTextContainerProps
>`
    transition: color 3s ease;

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
