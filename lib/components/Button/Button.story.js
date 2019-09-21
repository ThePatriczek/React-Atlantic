import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
var stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);
stories.add('Button', function () { return (React.createElement(Button, { isDisabled: boolean('Disabled', false) }, text('Label', 'Test'))); }, { info: { inline: true }, notes: 'A very simple example of addon notes' });
//# sourceMappingURL=Button.story.js.map