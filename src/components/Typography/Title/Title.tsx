import React, {
  createRef,
  FC,
  Fragment,
  PropsWithChildren,
  ReactElement,
  ReactText,
  useState
} from 'react';
import ReactTooltip from 'react-tooltip';
import { v4 } from 'uuid';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon, IconName } from '../../Icon';
import { TextArea } from '../../Input/TextArea';
import { Tooltip } from '../../Tooltip';
import {
  StyledTitle1,
  StyledTitle2,
  StyledTitle3,
  StyledTitle4,
  StyledTitle5
} from './Title.style';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  level?: TitleLevel;
  children: ReactText;
  /** custom className */
  className?: string;
  /** text in edit tooltip */
  editText?: string;
  isEditable?: boolean;
  onEditConfirm?: (value: string) => void;
  editIcon?: IconName;
  tooltipProps?: Readonly<ReactTooltip.Props>;
}

export const Title: FC<PropsWithChildren<TitleProps>> = (
  props: PropsWithChildren<TitleProps>
): ReactElement => {
  const {
    children,
    level,
    className,
    editIcon,
    editText,
    isEditable,
    onEditConfirm,
    tooltipProps
  } = props;
  const id = v4();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<ReactText>(children);
  const editBtnRef = createRef<HTMLButtonElement>();

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
          {editText && (
            <Tooltip id={id} {...tooltipProps}>
              {editText}
            </Tooltip>
          )}
        </StyledTypoButton>
      )}
    </Fragment>
  );

  switch (level) {
    case 5:
      return <StyledTitle5 className={className}>{Content}</StyledTitle5>;
    case 4:
      return <StyledTitle4 className={className}>{Content}</StyledTitle4>;
    case 3:
      return <StyledTitle3 className={className}>{Content}</StyledTitle3>;
    case 2:
      return <StyledTitle2 className={className}>{Content}</StyledTitle2>;
    case 1:
    default:
      return <StyledTitle1 className={className}>{Content}</StyledTitle1>;
  }
};

Title.defaultProps = {
  level: 1
};

Title.displayName = `Title`;
