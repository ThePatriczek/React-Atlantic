import * as React from 'react';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { StyledParagraph } from './Paragraph.style';

export interface ParagraphProps {
  children: React.ReactText;
  isCopyable?: boolean;
  isEditable?: boolean;
  onEditConfirm?: (value: React.ReactText) => void;
}

export const Paragraph: React.FC<ParagraphProps> = (
  props: ParagraphProps
): React.ReactElement => {
  const { children, isCopyable, isEditable, onEditConfirm } = props;
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
      />
    );
  }

  return (
    <StyledParagraph>
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
    </StyledParagraph>
  );
};

Paragraph.displayName = `Paragraph`;
