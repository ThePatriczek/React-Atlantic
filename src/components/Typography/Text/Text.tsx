import React, { createRef, FC, Fragment, ReactElement, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { v4 } from 'uuid';
import { Type } from '../../../types';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon, IconName } from '../../Icon';
import { Input } from '../../Input';
import { Tooltip } from '../../Tooltip';
import {
  StyledCodeText,
  StyledDelText,
  StyledInsText,
  StyledMarkText,
  StyledStrongText,
  StyledText
} from './Text.style';

export type TextElement = 'span' | 'strong' | 'code' | 'del' | 'ins' | 'mark';

export interface TextProps {
  children: string;
  /** default | primary | success | warning | error */
  type?: Type;
  /** span | strong | code | del | ins | mark */
  element?: TextElement;
  isCopyable?: boolean;
  isEditable?: boolean;
  onEditConfirm?: (value: string) => void;
  /** custom className */
  className?: string;
  /** text in copy tooltip */
  copyText?: string;
  /** text after click on copy tooltip */
  copiedText?: string;
  /** text in edit tooltip */
  editText?: string;
  /** tooltip tooltip */
  tooltipProps?: Readonly<ReactTooltip.Props>;
  editIcon?: IconName;
}

const { TextArea } = Input;

export const Text: FC<TextProps> = (props: TextProps): ReactElement => {
  const {
    children,
    type,
    isCopyable,
    isEditable,
    onEditConfirm,
    className,
    element,
    editText,
    tooltipProps,
    editIcon
  } = props;
  const id = v4();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(children);
  const [copyText, setCopyText] = useState<string>(props.copyText as string);
  const copyBtnRef = createRef<HTMLButtonElement>();
  const editBtnRef = createRef<HTMLButtonElement>();

  const onCopy = async () => {
    setCopyText(props.copiedText as string);

    if (children) {
      await navigator.clipboard.writeText(children.toString());
    }

    if (copyBtnRef.current) {
      Tooltip.show(copyBtnRef.current);
    }
  };

  const onEdit = () => {
    setEditing(true);

    if (editBtnRef.current) {
      Tooltip.hide(editBtnRef.current);
    }
  };

  if (isEditable && isEditing) {
    const onEnterPress = (val: string) => {
      setEditing(false);
      if (onEditConfirm) {
        onEditConfirm(val);
      }
    };

    return (
      <TextArea
        onChange={val => setValue(val)}
        value={value}
        onEnterPress={onEnterPress}
        onBlur={() => {
          setValue(children);
          setEditing(false);
        }}
        autoFocus
        iconRight={'enter'}
      />
    );
  }

  const Content = (
    <Fragment key={value}>
      {value}
      {isEditable && (
        <StyledTypoButton
          onClick={onEdit}
          data-tip
          data-for={id}
          onMouseEnter={() => {
            if (editBtnRef.current) {
              Tooltip.show(editBtnRef.current);
            }
          }}
          onMouseLeave={() => {
            if (editBtnRef.current) {
              Tooltip.hide(editBtnRef.current);
            }
          }}
          ref={editBtnRef}
        >
          <Icon name={editIcon ?? 'edit'} />
          <Tooltip id={id} {...tooltipProps}>
            {editText}
          </Tooltip>
        </StyledTypoButton>
      )}
      {isCopyable && (
        <StyledTypoButton
          onClick={onCopy}
          data-tip
          data-for={id}
          ref={copyBtnRef}
          key={copyText}
          onMouseEnter={() => {
            if (copyBtnRef.current) {
              Tooltip.show(copyBtnRef.current);
            }
          }}
          onMouseLeave={() => {
            if (copyBtnRef.current) {
              Tooltip.hide(copyBtnRef.current);
              setCopyText(props.copyText as string);
            }
          }}
        >
          <Icon name={'copy'} />
          <Tooltip id={id} {...tooltipProps}>
            {copyText}
          </Tooltip>
        </StyledTypoButton>
      )}
    </Fragment>
  );

  switch (element) {
    case 'strong':
      return (
        <StyledStrongText className={className} type={type as Type}>
          {Content}
        </StyledStrongText>
      );
    case 'code':
      return <StyledCodeText className={className}>{Content}</StyledCodeText>;
    case 'del':
      return <StyledDelText className={className}>{Content}</StyledDelText>;
    case 'mark':
      return <StyledMarkText className={className}>{Content}</StyledMarkText>;
    case 'ins':
      return <StyledInsText className={className}>{Content}</StyledInsText>;
    case 'span':
    default:
      return (
        <StyledText className={className} type={type as Type}>
          {Content}
        </StyledText>
      );
  }
};

Text.defaultProps = {
  element: 'span',
  type: 'default',
  copyText: `Copy`,
  copiedText: `Copied`,
  editText: `Edit`
};

Text.displayName = `Text`;
