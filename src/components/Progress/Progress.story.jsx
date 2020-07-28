import { select, text, withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Progress.test';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { ProgressCircle } from './ProgressCircle/ProgressCircle';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        return (
            <>
                <ProgressBar percent={75} positionText={'right'} />
                <ProgressCircle percent={50} />
            </>
        );
    },
    {
        info: { inline: true },
    }
);

// stories.add(
//     'Playground',
//     () => {
//         const size = select(
//             `size:`,
//             ['small', `medium`, 'large'],
//             defaultValues.size
//         );
//         const type = select(
//             `type:`,
//             ['primary', 'success', 'warning', 'error'],
//             defaultValues.type
//         );
//         const state = select(`state:`, ['default', 'uploading'], 'default');
//         const progress = number(`progress: `, 0);

//         const progress = Component(size, type, state, progress);

//         specs(() => tests(progress));

//         return progress;
//     },
//     {
//         info: { inline: true },
//     }
// );
