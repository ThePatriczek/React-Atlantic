import React from 'react';
import { Button } from '../../../Button';
import { StyledTransferFooter } from '../Transfer.style';
var Footer = function (props) {
    var size = props.size, onClose = props.onClose, closeText = props.closeText, onSubmit = props.onSubmit, submitText = props.submitText;
    return (React.createElement(StyledTransferFooter, null,
        React.createElement(Button, { size: size, type: 'default', onClick: onClose }, closeText),
        React.createElement(Button, { size: size, type: 'primary', onClick: onSubmit, htmlType: 'submit' }, submitText)));
};
export default Footer;
//# sourceMappingURL=Footer.js.map