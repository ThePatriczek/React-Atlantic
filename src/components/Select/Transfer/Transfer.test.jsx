import { shallow } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { defaultValues } from '../../../constants/defaultValues';
import { NotFound } from '../../NotFound';
import { Select } from '../Select';
import { Text } from '../../Typography/Text';
import {
  distinguishTypeAndReturnLabel,
  transferItemsRender
} from './Transfer.utils';
const { Option } = Select;
const assert = require('assert');

const notFoundComponent = (
  <NotFound
    title={`Zadaný výraz nebyl nalezen...`}
  >{`Zadaný výraz nebyl nalezen...`}</NotFound>
);

export const Component = (
  placeholder,
  isDisabled,
  closeText,
  submitText,
  deleteAllText,
  options,
  size,
  isFullWidth,
  direction,
  isAlternative,
  visibleRows,
  onChange,
  onCancel,
  onSubmit
) => {
  return (
    <div
      direction={direction}
      placeholder={placeholder}
      isDisabled={isDisabled}
      closeText={closeText}
      submitText={submitText}
      deleteAllText={deleteAllText}
      options={options}
      notFoundComponent={notFoundComponent}
      size={size}
      isFullWidth={isFullWidth}
      isAlternative={isAlternative}
      visibleRows={visibleRows}
      onChange={onChange}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      <Text>Receiving options as children</Text>
      <Transfer
        direction={direction}
        placeholder={placeholder}
        isDisabled={isDisabled}
        closeText={closeText}
        submitText={submitText}
        deleteAllText={deleteAllText}
        options={options}
        notFoundComponent={notFoundComponent}
        size={size}
        isAlternative={isAlternative}
        isFullWidth={isFullWidth}
        visibleRows={visibleRows}
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Option value={'value1'}>
          <Text>First</Text>
        </Option>
        <Option value={'value2'}>
          <Text>Second</Text>
        </Option>
        <Option value={'value3'}>
          <Text>Third</Text>
        </Option>
        <Option value={'value4'}>
          <Text>Fourth</Text>
        </Option>
        <Option value={'value5'}>
          <Text>Fifth</Text>
        </Option>
        <Option value={'value6'}>
          <Text>Sixth</Text>
        </Option>
        <Option value={'value7'}>
          <Text>Seventh</Text>
        </Option>
        <Option value={'value8'}>
          <Text>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Text>
        </Option>
      </Transfer>
      <br />
      <Text>Receiving options as array</Text>
      <Transfer
        isAlternative={isAlternative}
        direction={direction}
        placeholder={placeholder}
        isDisabled={isDisabled}
        closeText={closeText}
        submitText={submitText}
        deleteAllText={deleteAllText}
        options={options}
        notFoundComponent={notFoundComponent}
        size={size}
        isFullWidth={isFullWidth}
        visibleRows={visibleRows}
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export const tests = (
  transfer = Component(
    defaultValues.placeholder,
    defaultValues.isDisabled,
    defaultValues.closeText,
    defaultValues.submitText,
    defaultValues.deleteAllText,
    defaultValues.options,
    defaultValues.size,
    defaultValues.isFullWidth,
    defaultValues.direction,
    defaultValues.isAlternative
  )
) => {
  let output = shallow(transfer);
  let expected;

  return describe('Transfer', () => {
    it(`Should have placeholder: ${transfer.props.placeholder}`, () => {
      expect(output.props().placeholder).toEqual(transfer.props.placeholder);
    });

    it(`Should have isDisabled: ${transfer.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(transfer.props.isDisabled);
    });

    it(`Should have isFullWidth: ${transfer.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(transfer.props.isFullWidth);
    });

    it(`Should have closeText: ${transfer.props.closeText}`, () => {
      expect(output.props().closeText).toEqual(transfer.props.closeText);
    });

    it(`Should have submitText: ${transfer.props.submitText}`, () => {
      expect(output.props().submitText).toEqual(transfer.props.submitText);
    });

    it(`Should have deleteAllText: ${transfer.props.deleteAllText}`, () => {
      expect(output.props().deleteAllText).toEqual(
        transfer.props.deleteAllText
      );
    });

    it(`Should have options: ${transfer.props.options}`, () => {
      expect(output.props().options).toEqual(transfer.props.options);
    });

    it(`Should have size: ${transfer.props.size}`, () => {
      expect(output.props().size).toEqual(transfer.props.size);
    });

    it(`Should have direction: ${transfer.props.direction}`, () => {
      expect(output.props().direction).toEqual(transfer.props.direction);
    });

    it(`Should have isAlternative: ${transfer.props.isAlternative}`, () => {
      expect(output.props().isAlternative).toEqual(
        transfer.props.isAlternative
      );
    });

    expected = transferItemsRender({ value: 'value1', label: 'First' });
    assert(
      expected.type === 'span' && expected.props.children === 'First',
      `transferItemsRender should return type 'span'.`
    );
    assert(
      expected.props.children === 'First',
      `transferItemsRender should return children 'First'.`
    );

    expected = transferItemsRender({
      value: 'value1',
      label: <Text>First</Text>
    });
    assert(
      expected.type === 'span' && expected.props.children === 'First',
      `transferItemsRender should return type 'span'.`
    );
    assert(
      expected.props.children === 'First',
      `transferItemsRender should return children 'First'.`
    );

    expected = transferItemsRender(
      {
        value: 'value1',
        label: <Text>First</Text>
      },
      true
    );
    assert(
      typeof expected.type === 'symbol' && expected.props.children === 'First',
      `transferItemsRender should return type 'symbol'.`
    );
    assert(
      expected.props.children === 'First',
      `transferItemsRender should return children 'First'.`
    );

    expected = transferItemsRender(
      {
        value: 'value1',
        label: <Text>First</Text>
      },
      false
    );
    assert(
      expected.type === 'span' && expected.props.children === 'First',
      `transferItemsRender should return type 'symbol'.`
    );
    assert(
      expected.props.children === 'First',
      `transferItemsRender should return children 'First'.`
    );

    expected = distinguishTypeAndReturnLabel({
      value: 'value1',
      label: 'First'
    });
    assert(
      expected === 'First',
      `distinguishTypeAndReturnLabel should return 'First'.`
    );

    expected = distinguishTypeAndReturnLabel({
      value: 'value1',
      label: <Text>First</Text>
    });
    assert(
      expected === 'First',
      `distinguishTypeAndReturnLabel should return 'First'.`
    );
  });
};

tests();
