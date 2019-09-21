import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
var stories = storiesOf('Components', module);
stories.add('Button', function () { return React.createElement(Button, null, "Test"); }, {
    info: { inline: true }
});
//# sourceMappingURL=Button.story.js.map