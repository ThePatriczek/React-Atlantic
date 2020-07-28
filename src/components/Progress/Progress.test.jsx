import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { ProgressBar } from './ProgressBar/ProgressBar';

export const Component = (type, progress) => {
    return <ProgressBar type={type} progress={progress} />;
};

export const tests = (progress = Component()) => {
    describe('Progress', () => {
        let output = shallow(progress);
        it('should render something', () => {
            expect(output).not.toBeFalsy();
        });
    });
};

tests();
