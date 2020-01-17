import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './Pagination';
import expect from 'expect';

export const Component = (
  total,
  onChange,
  onSizeChange,
  isDisabled,
  pageSizeOptions,
  hideArrowJumper,
  showDoubleArrowJumper,
  showSizeChanger,
  isSimple,
  showThreeDots,
  showQuickJumper
) => {
  return (
    <Pagination
      total={total}
      onChange={onChange}
      onSizeChange={onSizeChange}
      hideArrowJumper={hideArrowJumper}
      isDisabled={isDisabled}
      isSimple={isSimple}
      showDoubleArrowJumper={showDoubleArrowJumper}
      showSizeChanger={showSizeChanger}
      pageSizeOptions={pageSizeOptions}
      showThreeDots={showThreeDots}
      showQuickJumper={showQuickJumper}
    />
  );
};

export const tests = (pagination = Component()) => {
  let output = shallow(pagination);

  console.log(`props`, pagination.props);

  return describe(`Pagination`, () => {
    it(`Should have total: ${pagination.props.total}`, () => {
      expect(output.props().total).toEqual(pagination.props.total);
    });
    it(`Should have hideArrowJumper: ${pagination.props.hideArrowJumper}`, () => {
      expect(output.props().hideArrowJumper).toEqual(pagination.props.hideArrowJumper);
    });
    it(`Should have isDisabled: ${pagination.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(pagination.props.isDisabled);
    });
    it(`Should have isSimple: ${pagination.props.isSimple}`, () => {
      expect(output.props().isSimple).toEqual(pagination.props.isSimple);
    });
    it(`Should have showDoubleArrowJumper: ${pagination.props.showDoubleArrowJumper}`, () => {
      expect(output.props().showDoubleArrowJumper).toEqual(pagination.props.showDoubleArrowJumper);
    });
    it(`Should have showSizeChanger: ${pagination.props.showSizeChanger}`, () => {
      expect(output.props().showSizeChanger).toEqual(pagination.props.showSizeChanger);
    });
    it(`Should have showSizeChanger: ${pagination.props.showThreeDots}`, () => {
      expect(output.props().showThreeDots).toEqual(pagination.props.showThreeDots);
    });
    it(`Should have showQuickJumper: ${pagination.props.showQuickJumper}`, () => {
      expect(output.props().showQuickJumper).toEqual(pagination.props.showQuickJumper);
    });
  });
};

tests();
