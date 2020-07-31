import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../constants/defaultValues';
import { specs } from 'storybook-addon-specifications';
import { tests, Component } from '../Typography/Typography.test';
import { Typography } from './Typography';

const stories = storiesOf('Typography', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const onClick = action(`onClick`);

  return (
    <div>
      <div>
        <Title level={1}>{`Title 1`}</Title>
        <Title level={2}>{`Title 2`}</Title>
        <Title level={3}>{`Title 3`}</Title>
        <Title level={4}>{`Title 4`}</Title>
        <Title level={5}>{`Title 5`}</Title>
      </div>
      <div>
        <Paragraph>
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Maecenas libero. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nulla non lectus sed nisl molestie malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.`}
          <Link href={`#`}>{`Custom link in paragraph`}</Link>
          <Text>{`Text`}</Text>
          <Text element={'strong'}>{`Strong Text`}</Text>
          <Text
            isCopyable
            tooltipProps={{ place: 'bottom' }}
          >{`Copyable Text`}</Text>
          <Text
            isCopyable
            tooltipProps={{ place: 'right' }}
          >{`Copyable Text`}</Text>
          <Text isEditable>{`Copyable Text`}</Text>
          <Text isEditable>{`Copyable Text`}</Text>
          <Text
            isCopyable
            tooltipProps={{ place: 'top' }}
          >{`Copyable Text`}</Text>
        </Paragraph>
      </div>
      <div>
        <div>
          <Text>{`Text`}</Text>
        </div>
        <div>
          <Text element={'strong'}>{`Strong Text`}</Text>
        </div>
        <div>
          <Text element={'code'}>{`Code Text`}</Text>
        </div>
        <div>
          <Text element={'del'}>{`Del Text`}</Text>
        </div>
        <div>
          <Text element={'ins'}>{`Ins Text`}</Text>
        </div>
        <div>
          <Text element={'mark'}>{`Mark Text`}</Text>
        </div>
        <div>
          <Link href={`#`}>{`Link`}</Link>
        </div>
        <div>
          <Link href={`#`} onClick={onClick}>{`Link onClick`}</Link>
        </div>
        <div>
          <Text isCopyable>{`Copyable Text`}</Text>
        </div>
        <div>
          <Text isEditable>{`Editable Text`}</Text>
        </div>
        <div>
          <Title
            level={5}
            isEditable
            editIcon={'send'}
            editText={'Edit'}
          >{`Editable Title`}</Title>
        </div>
      </div>
    </div>
  );
});

stories.add(
  'Playground',
  () => {
    const children = text(`text:`, defaultValues.value);
    const textComponent = Component(children);

    specs(() => tests(textComponent));

    return textComponent;
  },
  {
    info: { inline: true }
  }
);
