import * as React from 'react';
import ReactTooltip from 'react-tooltip';

export const Tooltip: React.FC<ReactTooltip.Props> & {
  show: (target?: Element) => void;
  hide: (target?: Element) => void;
  rebuild: () => void;
} = (props: ReactTooltip.Props): React.ReactElement => {
  return <ReactTooltip {...props} />;
};

Tooltip.defaultProps = {
  place: 'top',
  type: 'dark',
  effect: 'solid'
};

Tooltip.show = (target?: Element): void => ReactTooltip.show(target as Element);
Tooltip.hide = (target?: Element): void => ReactTooltip.hide(target as Element);
Tooltip.rebuild = (): void => ReactTooltip.rebuild();
