import { select, text, withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './DropZone.test';
import { Progress } from './Progress';

const stories = storiesOf('DropZone', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        return (
            <>
                <Progress />
            </>
        );
    },
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        );
        const type = select(
            `type:`,
            ['primary', 'success', 'warning', 'error'],
            defaultValues.type
        );
        const state = select(`state:`, ['default', 'uploading'], 'default');
        const progress = number(`progress: `, 0);

        const dropZone = Component(size, type, state, progress);

        specs(() => tests(dropZone));

        return dropZone;
    },
    {
        info: { inline: true },
    }
);
