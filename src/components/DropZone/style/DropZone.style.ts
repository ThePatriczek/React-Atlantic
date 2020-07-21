import styled, { css } from 'styled-components';
import { Text } from '../../Typography/Text';
import { Icon } from '../../Icon';
import { Title } from '../../Typography/Title';
import { Type, Size } from 'src/types';

interface StyledDropZoneProps {
    size: Size;
}

interface StyledDropZoneIconProps {
    type: Type;
    size: Size;
}

interface StyledUploadingTitle {
    size: Size;
}

export const StyledDropZoneText = styled(Text)``;

export const StyledSmallText = styled(Text)`
    font-size: 10px;
`;

export const StyledDropZone = styled.div<StyledDropZoneProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: paddind-box;
    padding: ${(props) => props.theme.padding.lg};
    margin: ${(props) => props.theme.margin.lg};
    border: 1px dashed ${(props) => props.theme.color.border};

    &:hover {
        border: 1px dashed ${(props) => props.theme.color.primary.alpha};
        ${StyledDropZoneText} {
            color: ${(props) => props.theme.color.primary.alpha};
        }
    }

    ${(props) =>
        props.size === 'small' &&
        css`
            width: 120px;
            height: 120px;
        `}

    ${(props) =>
        props.size === 'medium' &&
        css`
            width: 220px;
            height: 200px;
        `}

    ${(props) =>
        props.size === 'large' &&
        css`
            width: 460px;
            height: 200px;
        `}
`;

export const StyledDropZoneIconWrapper = styled.div`
    padding-bottom: ${(props) => props.theme.padding.md};
`;

export const StyledDropZoneIcon = styled(Icon)<StyledDropZoneIconProps>`

    ${(props) =>
        props.size === 'small' &&
        css`
            height: 40px;
            width: 60px;
        `}

    ${(props) =>
        (props.size == 'medium' || props.size == 'large') &&
        css`
            height: 80px;
            width: 80px;
        `}

    ${(props) =>
        props.type === 'primary' &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}

    ${(props) =>
        props.type === 'warning' &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            color: ${props.theme.color.success.alpha};
        `}

    ${(props) =>
        props.type === 'error' &&
        css`
            color: ${props.theme.color.error.alpha};
        `}
`;

export const StyledUploadingTitle = styled(Title)<StyledUploadingTitle>`
    text-align: center;
    ${(props) =>
        props.size === 'small' &&
        css`
            font-size: 13px;
        `}

    ${(props) =>
        (props.size == 'medium' || props.size == 'large') &&
        css`
            width: 70%;
            padding-top: ${(props) => props.theme.padding.md};
        `}
`;

export const StyledProgressCircle = styled.div`
    height: 100px;
    width: 100px;
    position: relative;
`;

export const StyledSVG = styled.svg`
    display: block;
    max-width: 100%;
`;

export const StyledSVGCircle = styled.circle``;

export const StyledSVGCircleText = styled(Text)`
    font-size: 26px;
    text-anchor: middle;
    color: #d9121a;
    font-weight: bold;
    position: absolute;
    top: 25px;
    left: 25px;
`;
