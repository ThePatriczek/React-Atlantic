import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button';

export type PureButtonProps = {
    isAlternative?: boolean;
} & ButtonProps;

export const PureButton = styled(Button)<PureButtonProps>`
    && {
        background: ${(props) => props.theme.color.background.alpha};
        border: none;
        box-shadow: none;

        :after {
            display: none;
        }

        &:hover {
            background: ${(props) => props.theme.color.background.beta};
        }

        ${(props) =>
            props.isAlternative &&
            css`
                background: ${props.theme.color.background.beta};

                &:hover {
                    background: ${props.theme.color.background.alpha};
                }
            `}
    }
`;
