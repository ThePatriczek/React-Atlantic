import { select, withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { BarComponent, CircleComponent, tests } from './Progress.test';
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
                <ProgressCircle percent={50} circleSize={100} />
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
        const type = select('type: ', ['circle', 'bar'], 'bar');
        const percent = number(`percent: `, 75);
        let positionText = '';
        if (type === 'bar') {
            positionText = select(
                `positionText:`,
                ['top', 'left', 'right', 'bottom'],
                defaultValues.position
            );
        }

        let Component = BarComponent(percent, positionText);

        let circleSize = 0;
        if (type === 'circle') {
            circleSize = number(`circleSize: `, 100);
            Component = CircleComponent(percent, circleSize);
        }

        specs(() => tests(Component));

        return Component;
    },
    {
        info: { inline: true },
    }
);
