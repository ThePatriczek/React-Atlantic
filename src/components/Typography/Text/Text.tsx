import * as React from 'react';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { StyledStrongText, StyledText } from './Text.style';

export interface TextProps {
  children: React.ReactText;
  isStrong?: boolean;
  isCopyable?: boolean;
  isEditable?: boolean;
  onEditConfirm?: (value: React.ReactText) => void;
}

export const Text: React.FC<TextProps> = (
  props: TextProps
): React.ReactElement => {
  const { children, isStrong, isCopyable, isEditable, onEditConfirm } = props;
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

  if (isStrong) {
    return (
      <StyledStrongText>
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
      </StyledStrongText>
    );
  }

  return (
    <StyledText>
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
    </StyledText>
  );
};

Text.displayName = `Text`;
