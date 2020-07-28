import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { ProgressBar } from './ProgressBar/ProgressBar';

export const Component = (type, state, progress) => {
    return <ProgressBar type={type} progress={progress} />;
};

export const tests = (progress = Component()) => {
    let output = shallow(progress);
};

tests();
