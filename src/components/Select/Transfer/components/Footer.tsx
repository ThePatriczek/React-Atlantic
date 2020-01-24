import React from 'react';
import { Button } from '../../../Button';
import { StyledTransferFooter } from '../Transfer.style';

const Footer = (props: any) => {
  const { size, onClose, closeText, onSubmit, submitText } = props;

  return (
    <StyledTransferFooter>
      <Button size={size} type={'default'} onClick={onClose}>
        {closeText}
      </Button>
      <Button
        size={size}
        type={'primary'}
        onClick={onSubmit}
        htmlType={'submit'}
      >
        {submitText}
      </Button>
    </StyledTransferFooter>
  );
};

export default Footer;