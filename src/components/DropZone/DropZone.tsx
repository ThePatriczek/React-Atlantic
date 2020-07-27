import React, { ReactElement } from 'react';
import { Icon } from '../Icon';
import { Text, Title } from '../Typography';
import {
    StyledDropZone,
    StyledDropZoneIcon,
    StyledDropZoneIconWrapper,
    StyledSmallText,
    StyledUploadingTitle,
    StyledDropZoneText,
} from './style/DropZone.style';
import { Size, Type } from 'src/types';
import { LoadingCircle } from './Circle';

type DropZoneState = 'default' | 'uploading';

interface DropZoneProps {
    size: Size;
    type: Type;
    state: DropZoneState;
    progress: number;
}

export const DropZone: React.FC<DropZoneProps> = (props) => {
    const { size, type, state, progress } = props;
    console.log('progress ' + progress);

    const defaultText = {
        small: {
            upload: (
                <Text element="span" type="default">
                    Nahrát soubory
                </Text>
            ),
            importSuccees: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl úspěšně
                </StyledUploadingTitle>
            ),
            importFailed: (
                <StyledUploadingTitle level={5} size={size}>
                    Import se bohužel nezdařil
                </StyledUploadingTitle>
            ),
            importWarning: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl částečně
                </StyledUploadingTitle>
            ),
            progressText: (
                <>
                    <Text type="default">Probíhá nahrávání</Text>
                </>
            ),
        },
        medium: {
            upload: (
                <>
                    <Title level={5}>Přetáhněte soubory zde</Title>
                    <StyledSmallText element="span" type="default">
                        - nebo -
                    </StyledSmallText>
                    <StyledDropZoneText element="strong">
                        klikněte a vyberte soubory
                    </StyledDropZoneText>
                </>
            ),
            importSuccees: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl úspěšně
                </StyledUploadingTitle>
            ),
            importFailed: (
                <StyledUploadingTitle level={5} size={size}>
                    Import se bohužel nezdařil
                </StyledUploadingTitle>
            ),
            importWarning: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl částečně
                </StyledUploadingTitle>
            ),
            progressText: (
                <>
                    <Title level={5}>Probíhá nahrávání souboru</Title>
                    <Text element="span" type="default">
                        Nezavírejte prosím okno prohlížeče
                    </Text>
                </>
            ),
        },
        large: {
            upload: (
                <>
                    <Title level={5}>Přetáhněte soubory zde</Title>
                    <StyledSmallText element="span" type="default">
                        - nebo -
                    </StyledSmallText>
                    <StyledDropZoneText element="strong">
                        klikněte zde a vyberte soubory z místního úložiště
                    </StyledDropZoneText>
                </>
            ),
            importSuccees: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl úspěšně
                </StyledUploadingTitle>
            ),
            importFailed: (
                <StyledUploadingTitle level={5} size={size}>
                    Import se bohužel nezdařil
                </StyledUploadingTitle>
            ),
            importWarning: (
                <StyledUploadingTitle level={5} size={size}>
                    Import proběhl částečně
                </StyledUploadingTitle>
            ),
            progressText: (
                <>
                    <Title level={5}>Probíhá nahrávání souboru</Title>
                    <Text element="span" type="default">
                        Nezavírejte prosím okno prohlížeče
                    </Text>
                </>
            ),
        },
    };

    let uploadText = defaultText.small.upload;
    let importWarning = defaultText.small.importWarning;
    let importSuccess = defaultText.small.importSuccees;
    let importFailed = defaultText.small.importFailed;

    if (size === 'medium') {
        uploadText = defaultText.medium.upload;
        importWarning = defaultText.medium.importWarning;
        importSuccess = defaultText.medium.importSuccees;
        importFailed = defaultText.medium.importFailed;
    }

    if (size === 'large') {
        uploadText = defaultText.large.upload;
        importWarning = defaultText.large.importWarning;
        importSuccess = defaultText.large.importSuccees;
        importFailed = defaultText.large.importFailed;
    }

    let Content = (
        <>
            <StyledDropZone size={size}>
                <StyledDropZoneIconWrapper>
                    {type == 'primary' && (
                        <StyledDropZoneIcon
                            name="upload"
                            type={type}
                            size={size}
                        />
                    )}
                    {type == 'warning' && (
                        <StyledDropZoneIcon
                            name="warning"
                            type={type}
                            size={size}
                        />
                    )}
                    {type == 'success' && (
                        <StyledDropZoneIcon
                            name="checkCircle"
                            type={type}
                            size={size}
                        />
                    )}
                    {type == 'error' && (
                        <StyledDropZoneIcon
                            name="checkCircle"
                            type={type}
                            size={size}
                        />
                    )}
                </StyledDropZoneIconWrapper>
                {type == 'primary' && uploadText}
                {type == 'warning' && importWarning}
                {type == 'success' && importSuccess}
                {type == 'error' && importFailed}
            </StyledDropZone>
        </>
    );

    if (state === 'uploading') {
        Content = (
            <>
                <StyledDropZone size={size}>
                    <LoadingCircle progress={progress} />
                    {size === 'small' && defaultText.small.progressText}
                    {size === 'medium' && defaultText.medium.progressText}
                    {size === 'large' && defaultText.large.progressText}
                </StyledDropZone>
            </>
        );
    }

    return <div>{Content}</div>;
};

DropZone.defaultProps = {
    size: 'medium',
};
