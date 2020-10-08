import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button';

export type SimpleButtonProps = {
    isAlternative?: boolean;
} & ButtonProps;

export const SimpleButton = styled(Button)<SimpleButtonProps>`
    && {
        background: ${(props) => props.theme.color.background.alpha};
        box-shadow: none;
        border: none;

        ${(props) =>
            props.isAlternative &&
            css`
                background: ${props.theme.color.background.beta};
            `}

        ${(props) =>
            !props.isDisabled &&
            css`
                &:hover {
                    background: ${props.theme.color.background.beta};
                }

                ${props.isAlternative &&
                    css`
                        &:hover {
                            background: ${props.theme.color.background.alpha};
                        }
                    `}
            `}
    }
`;
