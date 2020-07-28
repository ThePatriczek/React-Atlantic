import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { Progress } from './Progress';

export const Component = (size, type, state, progress) => {
    return (
        <Progress size={size} type={type} state={state} progress={progress} />
    );
};

export const tests = (progress = Component()) => {
    let output = shallow(progress);
};

tests();