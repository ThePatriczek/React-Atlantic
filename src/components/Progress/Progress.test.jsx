import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { ProgressCircle } from './ProgressCircle/ProgressCircle';

export const BarComponent = (percent, positionText) => {
    return <ProgressBar percent={percent} positionText={positionText} />;
};

export const CircleComponent = (percent) => {
    return <ProgressCircle percent={percent} />;
};

export const tests = () => {
    describe('Bar', () => {
        let output = shallow(<BarComponent />);
        it('should render something', () => {
            expect(output).not.toBeFalsy();
        });
    });

    describe('Circle', () => {
        let output = shallow(<CircleComponent />);
        it('should render something', () => {
            expect(output).not.toBeFalsy();
        });
    });
};

tests();
