import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';
import { DropZone } from './DropZone';

export const Component = (size, type, state, progress) => {
    return (
        <DropZone size={size} type={type} state={state} progress={progress} />
    );
};

export const tests = (dropZone = Component()) => {
    let output = shallow(dropZone);
};

tests();
