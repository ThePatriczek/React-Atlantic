import styled, { css } from 'styled-components';
import { Typography } from '../../Typography';
import { Position, Size, Type } from '../../../../lib'; //TODO: change to 'react-spring/web.cjs' => IE

const { Text } = Typography;

export const StyledProgress = styled.div<{ positionText?: Position }>`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0;
	box-sizing: border-box;
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

export const StyledBar = styled(`div`)<{ size?: Size; positionText?: Position; isRounded?: Readonly<boolean> }>`

	width: 100%;
	position: relative;
	background: ${(props) => props.theme.color.background.gamma};
	
	${(props) =>
		(props.positionText === 'right' || props.positionText === 'bottom') &&
		css`
			order: 1;
		`}


	${(props) =>
		(props.positionText === 'left' || props.positionText === 'right') &&
		css`
			margin: 0 ${(props) => props.theme.margin.sm};
		`}
	
	height: ${(props) =>
		props.size === 'medium' &&
		css`
			${props.theme.height.md};
		`};
	height: ${(props) =>
		props.size === 'small' &&
		css`
			${props.theme.height.sm};
		`};
	height: ${(props) =>
		props.size === 'large' &&
		css`
			${props.theme.height.lg};
		`};

	
	
	${(props) =>
		props.isRounded &&
		css`
			border-radius: 20px;
		`}
	

	${(props) =>
		!props.isRounded &&
		css`
			border-radius: ${(props) => props.theme.radius};
		`}
`;
export const StyledFill = styled(`span`)<{ type?: Type; width: Readonly<number>; isRounded?: Readonly<boolean> }>`
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
	
	
		
	${(props) =>
		props.isRounded &&
		css`
			border-radius: 20px;
		`}
	

	${(props) =>
		!props.isRounded &&
		css`
			border-radius: ${(props) => props.theme.radius};
		`}


	width: ${(props) => props.width}%;
	display: block;
	height: 100%;
	position: relative;
	overflow: hidden;
	margin: 0;
	padding: 0 ${(props) => props.theme.padding.md};
	box-sizing: border-box;
 	transition: width 0.3s ease;
`;
export const StyledProgressText = styled(Text)<{ type?: Type; positionText?: Position }>`
  && {
  	font-weight: bold;
	margin: ${(props) => props.theme.margin.sm} 0;
  
  ${(props) =>
		(props.positionText === 'right' || props.positionText === 'bottom') &&
		css`
			order: 2;
		`}

  
	${(props) =>
		props.type === 'primary' &&
		css`
			color: ${(props) => props.theme.color.primary.alpha};
		`}
	${(props) =>
		props.type === 'success' &&
		css`
			color: ${(props) => props.theme.color.success.alpha};
		`}
	${(props) =>
		props.type === 'warning' &&
		css`
			color: ${(props) => props.theme.color.warning.alpha};
		`}
	${(props) =>
		props.type === 'error' &&
		css`
			color: ${(props) => props.theme.color.error.alpha};
		`}
	}
`;
