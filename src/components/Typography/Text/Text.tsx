import * as React from 'react';
import { Type } from '../../../types';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
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
  children: React.ReactText;
  /** default | primary | success | warning | error */
  type?: Type;
  /** span | strong | code | del | ins | mark */
  element?: TextElement;
  isCopyable?: boolean;
  isEditable?: boolean;
  onEditConfirm?: (value: React.ReactText) => void;
  /** custom className */
  className?: string;
}

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
    element
  } = props;
  const [isEditing, setEditing] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<React.ReactText>(children);

  const { TextArea } = Input;

  const onCopy = async () => {
    if (children) {
      await navigator.clipboard.writeText(children.toString());
    }
  };

  const onEdit = () => setEditing(true);

  if (isEditable && isEditing) {
    const onEnterPress = (val: React.ReactText) => {
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
        <StyledTypoButton onClick={onEdit}>
          <Icon name={'edit'} />
        </StyledTypoButton>
      )}
      {isCopyable && (
        <StyledTypoButton onClick={onCopy}>
          <Icon name={'copy'} />
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
  type: 'default'
};

Text.displayName = `Text`;
