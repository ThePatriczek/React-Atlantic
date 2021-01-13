import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Typography } from '../../../../Typography';

interface StyledPaginationIconProps {
	isLight?: boolean;
	isDisabled?: boolean;
}

const { Text } = Typography;

export const StyledPaginationIcon = styled.span<StyledPaginationIconProps>`
	margin: 0 ${(props) => props.theme.margin.sm};
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	width: 25px;
	color: ${props => props.theme.color.text.alpha};
	
	${props => props.isDisabled && css`
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
