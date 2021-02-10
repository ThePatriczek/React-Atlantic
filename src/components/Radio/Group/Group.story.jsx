import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Radio } from "../Radio";
import { action } from "@storybook/addon-actions";
import { Typography } from "../../Typography";

const stories = storiesOf("Radio", module);
const { Text } = Typography;
stories.addDecorator(withKnobs);

stories.add(
  "Radio.Group",
  () => {
    const group = (
      <div>
        <Radio.Group onChange={action(`onChange`)}>
          <div>
            <Radio value={1}>
              <Text>{`A`}</Text>
            </Radio>
          </div>
          <Radio value={2}>
            <Text>{`B`}</Text>
          </Radio>
          <Radio value={3}>
            <Text>{`C`}</Text>
          </Radio>
        </Radio.Group>
        <br />
        <Radio.Group onChange={action(`onChange`)}>
          <div>
            <Radio.Button value={0}>
              <Text>{`Button 0`}</Text>
            </Radio.Button>
          </div>

          <br />

          <Radio.Button value={1}>
            <Text>{`Button 1`}</Text>
          </Radio.Button>

          <Radio.Button value={2}>
            <Text>{`Button 2`}</Text>
          </Radio.Button>
          <Radio.Button value={3}>
            <Text>{`Button 3`}</Text>
          </Radio.Button>
        </Radio.Group>
      </div>
    );

    return group;
  },
  {
    info: { inline: true }
  }
);
