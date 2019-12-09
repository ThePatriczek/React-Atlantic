import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { theme as defaultTheme } from './theme';
import { Button, Checkbox, Input, Radio, Select, Switch, Typography } from '../components';
import { SketchPicker } from 'react-color';

const { Title, Text } = Typography;

const stories = storiesOf('Theme', module);
stories.addDecorator(withKnobs);

const theme = JSON.parse(JSON.stringify(defaultTheme));

const ThemeStory = props => {
  const { type, size } = props;
  const [key, setKey] = React.useState();

  return (
    <>
      <div>
        <Title level={2}>{`Color`}</Title>
        <Text>{`Primary`}</Text>
        <SketchPicker
          color={theme.color.primary}
          onChangeComplete={color => {
            theme.color.primary.alpha = color.hex;
            setKey(color.hex);
          }}
        />
      </div>
      <br />
      <br />
      <ThemeProvider theme={theme} key={key}>
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
      </ThemeProvider>
    </>
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
