import styled, { css } from 'styled-components';
import { Text } from '../../../Typography';
import { Position, Type } from '../../../../../lib';

interface StyledProgressProps {
    positionText?: Position;
}

interface StyledBarProps {
    positionText?: Position;
}

interface StyledFillProps {
    type?: Type;
    width: Readonly<number>;
}

interface StyledProgressTextProps {
    positionText?: Position;
}

export const StyledProgressBar = styled.div<StyledProgressProps>`
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

export const StyledBar = styled.div<StyledBarProps>`
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
            margin: 0 ${(props) => props.theme.margin.sm};
        `};
`;

export const StyledFill = styled.span<StyledFillProps>`
	width: ${(props) => props.width}%;
	display: block;
	height: 100%;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	margin: 0;
	padding: 0 ${(props) => props.theme.padding.md};
	border-radius: ${(props) => props.theme.radius};
	transition: width 0.3s ease;

	${(props) =>
        props.type === 'primary' &&
        css`
            background-color: ${(props) => props.theme.color.primary.alpha};
        `}
		
	${(props) =>
        props.type === 'success' &&
        css`
            background-color: ${(props) => props.theme.color.success.alpha};
        `}
		
	${(props) =>
        props.type === 'warning' &&
        css`
            background-color: ${(props) => props.theme.color.warning.alpha};
        `}
		
	${(props) =>
        props.type === 'error' &&
        css`
            background-color: ${(props) => props.theme.color.error.alpha};
        `}
`;

export const StyledProgressText = styled(Text)<StyledProgressTextProps>`
  && {
		font-weight: bold;
		color: ${(props) => props.theme.color.text.alpha}
		margin: ${(props) => props.theme.margin.sm} 0;
  
	${(props) =>
        (props.positionText === 'right' || props.positionText === 'bottom') &&
        css`
            order: 2;
        `}
	}
`;
