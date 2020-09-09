import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { Progress } from './index';

export const BarComponent = (percent, positionText) => {
    return <Progress.Bar percent={percent} positionText={positionText} />;
};

export const CircleComponent = (percent, circleSize) => {
    return <Progress.Circle percent={percent} circleSize={circleSize} />;
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
