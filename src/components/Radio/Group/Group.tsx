import * as React from 'react';
import { RadioGroupContextProvider } from '../Context';
import { StyledRadioGroup } from './Group.style';

export interface GroupProps {
	onChange?: (value: any) => void;
}

export const Group: React.FC<React.PropsWithChildren<GroupProps>> = (
	props: React.PropsWithChildren<GroupProps>
): React.ReactElement => {
	const { children, onChange } = props;

	return (
		<StyledRadioGroup>
			<RadioGroupContextProvider onChange={onChange}>{children}</RadioGroupContextProvider>
		</StyledRadioGroup>
	);
};
