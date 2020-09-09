import styled, { css, keyframes } from 'styled-components';
import { Position, Type } from '../../../../../lib';
import { Text } from '../../../Typography';

interface StyledProgressBarProps {
    positionText?: Position;
    type?: Type;
    progress?: Readonly<number>;
}

const animationFill = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
`;

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    ${(props) =>
        (props.positionText === 'left' || props.positionText === 'right') &&
        css`
            align-items: center;
        `}

    ${(props) =>
        (props.positionText === 'top' || props.positionText === 'bottom') &&
        css`
            flex-direction: column;
        `}
`;

export const StyledBar = styled.div<StyledProgressBarProps>`
    width: 100%;
    height: 10px;
    position: relative;
    background: ${(props) => props.theme.color.background.gamma};
    border-radius: ${(props) => props.theme.radius};

    ${(props) =>
        (props.positionText === 'right' || props.positionText === 'bottom') &&
        css`
            order: 1;
        `}

    ${(props) =>
        (props.positionText === 'left' || props.positionText === 'right') &&
        css`
            margin: 0 ${props.theme.margin.sm};
        `};
`;

export const StyledFillContainer = styled.div<StyledProgressBarProps>`
    width: ${(props) => props.progress}%;
    height: 100%;
    transition: width 0.5s cubic-bezier(.79,.14,.15,.86);
`;

export const StyledFill = styled.span<StyledProgressBarProps>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
	margin: 0;
	border-radius: ${(props) => props.theme.radius};
	will-change: width;
	contain: strict;
	transition: background-color 0.5s;
  animation: ${animationFill} 0.5s cubic-bezier(.79,.14,.15,.86);

	${(props) =>
        props.type === 'primary' &&
        css`
            background-color: ${props.theme.color.primary.alpha};
        `}
		
	${(props) =>
        props.type === 'success' &&
        css`
            background-color: ${props.theme.color.success.alpha};
        `}
		
	${(props) =>
        props.type === 'warning' &&
        css`
            background-color: ${props.theme.color.warning.alpha};
        `}
		
	${(props) =>
        props.type === 'error' &&
        css`
            background-color: ${props.theme.color.error.alpha};
        `}
`;

export const StyledProgressText = styled(Text)<StyledProgressBarProps>`
    && {
        font-weight: 700;
        color: ${(props) => props.theme.color.text.alpha};
        margin: ${(props) => props.theme.margin.sm} 0;

        ${(props) =>
            (props.positionText === 'right' ||
                props.positionText === 'bottom') &&
            css`
                order: 2;
            `}
    }
`;
