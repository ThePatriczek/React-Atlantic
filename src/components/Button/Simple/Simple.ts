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
