import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Typography } from '../../../../Typography';

const { Text } = Typography;

export const StyledPaginationIcon = styled.span<{ isLight?: boolean }>`
	margin: 0 ${(props) => props.theme.margin.sm};
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	width: 25px;

	${(props) =>
		props.isLight &&
		css`
			color: ${props.theme.color.default};
		`}

	${(props) =>
		!props.isLight &&
		css`
			color: ${props.theme.color.text.beta};
		`}
`;

export const StyledPaginationStepIcon = styled(StyledPaginationIcon)`
	${StyledIcon} {
		margin: 0 ${(props) => props.theme.margin.sm};
		display: inline-block;
		vertical-align: middle;
		color: ${(props) => props.theme.color.primary.alpha};
		cursor: pointer;
	}
`;

export const StyledThreeDotsText = styled(Text)`
	color: white;
`;
