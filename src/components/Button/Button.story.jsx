import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Button } from './Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { defaultValues } from '../../constants/defaultValues';
import { tests, Component } from './Button.test';
import { PureButton } from './Pure';
import { SimpleButton } from './Simple';

const stories = storiesOf('Button', module);

const { Text } = Typography;

stories.addDecorator(withKnobs);

stories.add(
  'Overview',
  () => (
    <div>
      <div>
        <Button>{`Default`}</Button>
        <br />
        <Button type={'dashed'}>{`Dashed`}</Button>
        <br />
        <Button isDisabled>{`Disabled`}</Button>
        <br />
        <Button>{`Upload`}</Button>
        <br />
        <SimpleButton>{`Simple`}</SimpleButton>
        <SimpleButton type={'dashed'}>{`Dashed`}</SimpleButton>
        <SimpleButton type={'primary'}>{`Primary`}</SimpleButton>
        <SimpleButton type={'success'} isDisabled>{`Success isDisabled`}</SimpleButton>
        <SimpleButton type={'warning'}>{`Warning`}</SimpleButton>
        <SimpleButton type={'error'}>{`Error`}</SimpleButton>
        <br />
        <SimpleButton isAlternative>{`Simple isAlternative`}</SimpleButton>
        <br />
        <Button isTransparent type={'primary'}>{`Primary`}</Button>
        <Button isTransparent type={'success'}>{`Success`}</Button>
        <Button isTransparent type={'warning'}>{`Warning`}</Button>
        <Button isTransparent type={'error'}>{`Error`}</Button>
        <br />
      </div>
      <div>
        <Button type={'primary'}>{`Primary`}</Button>
        <br />
        <Button type={'success'}>{`Success`}</Button>
        <br />
        <Button type={'warning'}>{`Warning`}</Button>
        <br />
        <Button type={'error'}>{`Error`}</Button>
        <br />
      </div>
      <div>
        <Button isRound>{`Rounded`}</Button>
        <br />
      </div>
      <div>
        <Button size={'small'}>{`Small`}</Button>
        <br />
        <Button>{`Medium (default)`}</Button>
        <br />
        <Button size={'large'}>{`Large`}</Button>
        <br />
      </div>
      <div>
        <br />
        <Button isDisabled={true}>
          <Icon name={'arrowLeft'} />
          <Text>{`Is disabled with icon left`}</Text>
        </Button>
        <br />
        <br />
        <Button size={'small'}>
          <Icon name={'arrowLeft'} />
          <Text>{`Small with icon left`}</Text>
        </Button>
        <br />
        <Button>
          <Icon name={'arrowLeft'} />
          <Text>{`Medium with icon left`}</Text>
        </Button>
        <br />
        <Button size={'large'}>
          <Icon name={'arrowLeft'} />
          <Text>{`Large with icon left`}</Text>
        </Button>
        <br />
      </div>
      <div>
        <Button size={'small'}>
          <Text>{`Small with icon right`}</Text>
          <Icon name={'arrowRight'} />
        </Button>
        <br />
        <Button>
          <Text>{`Medium with icon right`}</Text>
          <Icon name={'arrowRight'} />
        </Button>
        <br />
        <Button size={'large'}>
          <Text>{`Large with icon right`}</Text>
          <Icon name={'arrowRight'} />
        </Button>
        <br />
      </div>
      <div>
        <Button isFullWidth>{`Full Width default`}</Button>
        <Button isFullWidth type={'primary'}>
          <Text>{`Full Width primary`}</Text>
        </Button>
        <Button isFullWidth type={'success'}>
          <Text>{`Full Width success`}</Text>
        </Button>
        <Button isFullWidth type={'warning'}>
          <Text>{`Full Width warning`}</Text>
        </Button>
        <Button isFullWidth type={'error'}>
          <Text>{`Full Width error`}</Text>
        </Button>
        <Button isFullWidth icon={'arrowLeft'}>
          <Text>{`Full Width default`}</Text>
        </Button>
        <Button isFullWidth>
          <Text>{`Full Width default`}</Text>
          <Icon name={'arrowRight'} />
        </Button>
        <Button isFullWidth type={'dashed'}>{`Full Width default`}</Button>
      </div>
      <div>
        <Button isFullWidth size={`small`}>
          <Icon name={'arrowLeft'} />
          <Text>{`Full Width small`}</Text>
        </Button>
        <Button isFullWidth size={`large`}>
          <Text>{`Full Width large`}</Text>
          <Icon name={'arrowRight'} />
        </Button>
        <Button isFullWidth isTransparent type={'primary'}>
          <Text>{`Full Width transparent`}</Text>
        </Button>
        <Button isFullWidth isTransparent type={'success'}>
          <Text>{`Full Width transparent`}</Text>
        </Button>
        <Button isFullWidth isTransparent type={'warning'}>
          <Text>{`Full Width transparent`}</Text>
        </Button>
        <Button isFullWidth isTransparent type={'error'}>
          <Text>{`Full Width transparent`}</Text>
        </Button>
        <br/>
      </div>
    </div>
  ),
  { info: { inline: true } }
);

stories.add(
  'Playground',
  () => {
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isFullWidth = boolean(`isFullWidth:`, defaultValues.isFullWidth);
    const isRound = boolean(`isRound:`, defaultValues.isRound);
    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );
    const type = select(
      `type:`,
      ['default', 'primary', 'success', 'warning', 'error', 'dashed'],
      defaultValues.type
    );
    const children = text(`text:`, defaultValues.value);
    const onClick = action(`onClick`);
    const button = Component(
      isDisabled,
      isFullWidth,
      isRound,
      size,
      type,
      children,
      onClick
    );

    specs(() => tests(button));

    return button;
  },
  {
    info: { inline: true }
  }
);
