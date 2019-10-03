import * as React from 'react';
import { Type } from '../../../types';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon } from '../../Icon';
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
}

const { TextArea } = Input;

export const Text: React.FC<TextProps> = (
  props: TextProps
): React.ReactElement => {
  const {
    children,
    type,
    isCopyable,
    isEditable,
    onEditConfirm,
    className,
    element,
    editText
  } = props;
  const [isEditing, setEditing] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(children);
  const [copyText, setCopyText] = React.useState<string>(
    props.copyText as string
  );
  const copyBtnRef = React.createRef<HTMLButtonElement>();
  const editBtnRef = React.createRef<HTMLButtonElement>();

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
      />
    );
  }

  const Content = (
    <>
      {value}
      {isEditable && (
        <StyledTypoButton
          onClick={onEdit}
          data-tip={editText}
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
          <Icon name={'edit'} />
          <Tooltip />
        </StyledTypoButton>
      )}
      {isCopyable && (
        <StyledTypoButton
          onClick={onCopy}
          data-tip={copyText}
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
          <Tooltip />
        </StyledTypoButton>
      )}
    </>
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
