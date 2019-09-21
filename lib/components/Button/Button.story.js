import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
var stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);
stories.add('Overview', function () { return (React.createElement("div", null,
    React.createElement("div", null,
        React.createElement(Button, null, "Default"),
        React.createElement(Button, { type: 'dashed' }, "Dashed"),
        React.createElement(Button, { isDisabled: true }, "Disabled"),
        React.createElement(Button, null, "Upload"),
        React.createElement(Button, { type: 'transparent' }, "Transparent")),
    React.createElement("div", null,
        React.createElement(Button, { type: 'primary' }, "Primary"),
        React.createElement(Button, { type: 'success' }, "Success"),
        React.createElement(Button, { type: 'warning' }, "Warning"),
        React.createElement(Button, { type: 'error' }, "Error")),
    React.createElement("div", null,
        React.createElement(Button, { isRounded: true }, "Rounded")),
    React.createElement("div", null,
        React.createElement(Button, { size: 'small' }, "Small"),
        React.createElement(Button, null, "Medium (default)"),
        React.createElement(Button, { size: 'large' }, "Large")),
    React.createElement("div", null,
        React.createElement(Button, { isFullWide: true }, "Full Wide default"),
        React.createElement(Button, { isFullWide: true, type: 'primary' }, "Full Wide primary"),
        React.createElement(Button, { isFullWide: true, type: 'success' }, "Full Wide success"),
        React.createElement(Button, { isFullWide: true, type: 'warning' }, "Full Wide warning"),
        React.createElement(Button, { isFullWide: true, type: 'error' }, "Full Wide error")))); }, { info: { inline: true } });
stories.add('Playground', function () { return (React.createElement(Button, { isDisabled: boolean("isDisabled:", false), isFullWide: boolean("isFullWide:", false), isRounded: boolean("isRounded:", false), size: select("Size:", ['small', "medium", 'large'], 'medium'), type: select("Type:", [
        'default',
        'primary',
        'success',
        'warning',
        'error',
        'dashed',
        'transparent'
    ], 'default'), onClick: action("onClick") }, text("Text:", "Change me!"))); }, {
    info: { inline: true }
});
//# sourceMappingURL=Button.story.js.map