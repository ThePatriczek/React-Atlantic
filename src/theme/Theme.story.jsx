import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { theme as defaultTheme } from './theme';
import { Button, Checkbox, Input, Radio, Select, Switch, Typography } from '../components';
import { HuePicker } from 'react-color';

const { Title, Text } = Typography;

const stories = storiesOf('Theme', module);
stories.addDecorator(withKnobs);

const theme = JSON.parse(JSON.stringify(defaultTheme));

const ThemeStory = props => {
  const { type, size } = props;
  const [key, setKey] = React.useState();

  return (
    <ThemeProvider theme={theme} key={key}>
      <>
        <Title level={2}>{`Color`}</Title>
        <div>
          <Text>{`default`}</Text>
          <HuePicker
            color={theme.color.default}
            onChangeComplete={color => {
              theme.color.default = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`primary`}</Text>
          <HuePicker
            color={theme.color.primary}
            onChangeComplete={color => {
              theme.color.primary = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`success`}</Text>
          <HuePicker
            color={theme.color.success}
            onChangeComplete={color => {
              theme.color.success = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`info`}</Text>
          <HuePicker
            color={theme.color.info}
            onChangeComplete={color => {
              theme.color.info = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`warning`}</Text>
          <HuePicker
            color={theme.color.warning}
            onChangeComplete={color => {
              theme.color.warning = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`error`}</Text>
          <HuePicker
            color={theme.color.error}
            onChangeComplete={color => {
              theme.color.error = color.hex;
              setKey(color.hex);
            }}
          />
          <Text>{`border`}</Text>
          <HuePicker
            color={theme.color.border}
            onChangeComplete={color => {
              theme.color.border = color.hex;
              setKey(color.hex);
            }}
          />
        </div>
        <br />
        <br />

        <div>
          <Text type={type}>{`Text of type`}</Text>
          <br />
          <br />
          <Button type={type} size={size}>{`Button`}</Button>
          <br />
          <br />
          <Input placeholder={`Input`} defaultValue={`Input`} size={size} />
          <br />
          <br />
          <Input
            placeholder={`Alternative Input`}
            isAlternative
            defaultValue={`Alternative Input`}
            size={size}
          />
          <br />
          <br />
          <Checkbox isDefaultChecked>
            <Text>{`Checkbox`}</Text>
          </Checkbox>
          <br />
          <br />
          <Radio.Group>
            <Radio value={0} isDefaultChecked>
              <Text>{`Radio 1`}</Text>
            </Radio>
            <Radio value={1}>
              <Text>{`Radio 2`}</Text>
            </Radio>
          </Radio.Group>
          <br />
          <br />
          <Radio.Button isDefaultChecked size={size}>
            <Text>{`Radio.Button`}</Text>
          </Radio.Button>
          <br />
          <br />
          <Switch isDefaultChecked type={type} size={size} />
          <br />
          <br />
          <Select
            defaultValue={`Option 1`}
            options={[
              { value: `Option 1`, label: <Text>{`Option 1`}</Text> },
              { value: `Option 2`, label: <Text>{`Option 2`}</Text> }
            ]}
            size={size}
          />
          <br />
          <br />
          <Select
            isMulti
            defaultValue={`Option 1`}
            options={[
              { value: `Option 1`, label: <Text>{`Option 1`}</Text> },
              { value: `Option 2`, label: <Text>{`Option 2`}</Text> },
              { value: `Option 3`, label: <Text>{`Option 3`}</Text> }
            ]}
            size={size}
          />
        </div>
      </>
    </ThemeProvider>
  );
};

stories.add(
  'Playground',
  () => {
    const type = select(
      `type:`,
      [`default`, `primary`, `success`, `error`, `warning`],
      `primary`
    );

    const size = select(`size:`, [`small`, `medium`, `large`], `medium`);

    return <ThemeStory type={type} size={size} />;
  },
  {
    info: { inline: true, source: false, propTables: false }
  }
);
