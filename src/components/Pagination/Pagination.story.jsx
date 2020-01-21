import * as React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { specs } from 'storybook-addon-specifications';
import { storiesOf } from '@storybook/react';
import { Pagination } from './Pagination';
import { Component, tests } from './Pagination.test';
import { defaultValues } from '../..';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withKnobs);

const margin = { marginTop: '20px' };

stories.add(
  'Overview',
  () => {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <Pagination />
        </div>

        <div style={margin}>
          <Pagination total={200} />
        </div>
        <div style={margin}>
          <Pagination total={200} showSizeChanger={true} />
        </div>
        <div style={margin}>
          <Pagination total={200} hideArrowJumper={true} />
        </div>
        <div style={margin}>
          <Pagination
            total={200}
            showDoubleArrowJumper={true}
            hideArrowJumper={true}
          />
        </div>
        <div style={margin}>
          <Pagination total={200} isDisabled />
        </div>
        <div style={margin}>
          <Pagination
            total={200}
            showDoubleArrowJumper={true}
            hideArrowJumper={true}
            isDisabled={true}
          />
        </div>
        <div style={margin}>
          <Pagination total={200} isSimple={true} />
        </div>
      </div>
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  'Playground',
  () => {
    const hideArrowJumper = boolean(
      `hideArrowJumper`,
      defaultValues.hideArrowJumper
    );
    const showDoubleArrowJumper = boolean(
      `showDoubleArrowJumper`,
      defaultValues.showDoubleArrowJumper
    );
    const showSizeChanger = boolean(
      `showSizeChanger`,
      defaultValues.showSizeChanger
    );

    const showQuickJumper = boolean(`showQuickJumper`, defaultValues.showQuickJumper);
    const isDisabled = boolean(`isDisabled`, defaultValues.isDisabled);
    const isSimple = boolean(`isSimple`, defaultValues.isSimple);

    const pageSizeOptions = defaultValues.pageSizeOptions;
    const onChange = action(`onChange`);
    const onSizeChange = action(`onSizeChange`);
    const total = text(`total`, defaultValues.total.toString());

    const pageSize = text(`pageSize`, `20`);

    const showThreeDots = boolean(`showThreeDots`, defaultValues.showThreeDots);

    const _total = parseInt(total);


    const pagination = Component(
      _total ? _total : 0,
      onChange,
      onSizeChange,
      isDisabled,
      pageSizeOptions,
      hideArrowJumper,
      showDoubleArrowJumper,
      showSizeChanger,
      isSimple,
      showThreeDots,
      showQuickJumper,
      parseInt(pageSize)
    );

    specs(() => tests(pagination));

    return pagination;
  },
  {
    info: { inline: true }
  }
);
