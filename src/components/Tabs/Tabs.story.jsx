import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Tabs } from './Tabs';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const { Text, Paragraph } = Typography;
    const isBordered = boolean(`isBordered:`, defaultValues.isBordered);
    const isAlternative = boolean(
      `isAlternative:`,
      defaultValues.isAlternative
    );
    const children = text(`children:`, defaultValues.children);
    const onChange = action(`onChange`);
    const tabs = [
      {
        value: `cz`,
        label: (
          <>
            <Icon name={'flagCzech'} />
            <Text>{`Czech Republic`}</Text>
          </>
        )
      },
      {
        value: `sk`,
        label: (
          <>
            <Icon name={'flagSlovakia'} />
            <Text>{`Slovakia`}</Text>
          </>
        )
      },
      {
        value: `disabled`,
        label: (
          <>
            <Icon name={'clear'} />
            <Text>{`isDisabled`}</Text>
          </>
        ),
        isDisabled: true
      },
      {
        value: `eu`,
        label: (
          <>
            <Icon name={'flagEU'} />
            <Text>{`Europe`}</Text>
          </>
        )
      }
    ];

    return (
      <Tabs
        isAlternative={isAlternative}
        isBordered={isBordered}
        tabs={tabs}
        onChange={onChange}
      >
        <Paragraph>
          <Text key={children}>{children}</Text>
        </Paragraph>
      </Tabs>
    );
  },
  {
    info: { inline: true }
  }
);
