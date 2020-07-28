import React, { FC, ReactElement, memo } from 'react';
import { StyledProgress, StyledBar, StyledFill, StyledProgressText } from './style/Progress.style';
import { Position, Size, Type } from '../../../lib'; //TODO: change to 'react-spring/web.cjs' => IE

interface ProgressProps {
	percent: Readonly<number>;
	size?: Readonly<Size>;
	type?: Readonly<Type>;
	positionText?: Readonly<Position>;
	isRounded?: Readonly<boolean>;
	className?: string;
}

export type ProgressTypeComponent = FC<Readonly<ProgressProps>>;

export const Progress: ProgressTypeComponent = memo(
	(props: Readonly<ProgressProps>): Readonly<ReactElement> => {
		const { percent, size, type, positionText, isRounded, className } = props;

		return (
			<StyledProgress
				data-id={`reactAtlantic-progressBar-component`}
				positionText={positionText}
				className={className}
			>
				{positionText && (
					<StyledProgressText positionText={positionText} type={type}>{`${percent.toFixed(
						0
					)}%`}</StyledProgressText>
				)}
				<StyledBar positionText={positionText} size={size} isRounded={isRounded}>
					<StyledFill type={type} width={percent} isRounded={isRounded} />
				</StyledBar>
			</StyledProgress>
		);
	}
);

Progress.defaultProps = {
	size: 'medium',
	type: 'primary',
};
