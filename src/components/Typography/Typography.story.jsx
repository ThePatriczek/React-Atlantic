import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Typography } from './Typography';

const stories = storiesOf('Typography', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <div>
      <div>
        <Title>{`Title 1`}</Title>
        <Title level={2}>{`Title 2`}</Title>
        <Title level={3}>{`Title 3`}</Title>
        <Title level={4}>{`Title 4`}</Title>
        <Title level={5}>{`Title 5`}</Title>
      </div>
      <div>
        <Paragraph>
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Maecenas libero. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nulla non lectus sed nisl molestie malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.`}
          <Link href={`#`}>{`Custom link in paragraph`}</Link>
        </Paragraph>
      </div>
      <div>
        <div>
          <Text>{`Text`}</Text>
        </div>
        <div>
          <Text isStrong>{`Strong Text`}</Text>
        </div>
        <div>
          <Link href={`#`}>{`Link`}</Link>
        </div>
        <div>
          <Text isCopyable>{`Copyable Text`}</Text>
        </div>
        <div>
          <Text isEditable>{`Editable Text`}</Text>
        </div>
      </div>
    </div>
  );
});
