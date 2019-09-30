import { HorizontalPosition } from '../../types';

export interface RadioProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  position?: HorizontalPosition;
  /** custom className */
  className?: string;
}
