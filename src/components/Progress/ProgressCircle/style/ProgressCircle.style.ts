import styled, { css } from 'styled-components';
import { Type } from '../../../../../src/types';
import { Text } from '../../../Typography/Text';

interface StyledSVGCircleTwoProps {
    type: Type;
    dashOffset: number;
}

interface StyledSVGCircleText {
    type: Type;
    key: number;
}

export const StyledLoadingCircle = styled.div`
    height: 100px;
    width: 100px;
    position: relative;
`;

export const StyledSVG = styled.svg`
    display: block;
    max-width: 100%;
`;

export const StyledSVGCircleOne = styled.circle`
    stroke: ${(props) => props.theme.color.border};
    stroke-width: 3px;
`;

export const StyledSVGCircleTwo = styled.circle<StyledSVGCircleTwoProps>`
    stroke-width: 3px;
    stroke-dasharray: 251;
    stroke-dashoffset: ${(props) => props.dashOffset};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke 1s ease;
    
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

export const StyledLoadingCircleText = styled(Text)<StyledSVGCircleText>`
    font-size: 26px;
    text-anchor: middle;
    font-weight: bold;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
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
