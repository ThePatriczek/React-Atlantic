import * as React from 'react';
import ReactTooltip from 'react-tooltip';

export const Tooltip: React.FC<ReactTooltip.Props> & {
  show: (target: Element) => void;
  hide: (target: Element) => void;
  rebuild: () => void;
} = (props: ReactTooltip.Props): React.ReactElement => {
  return <ReactTooltip {...props}>{props.children}</ReactTooltip>;
};

Tooltip.defaultProps = {
  place: 'top',
  type: 'dark',
  effect: 'solid'
};

Tooltip.show = (target: Element): void => ReactTooltip.show(target);
Tooltip.hide = (target: Element): void => ReactTooltip.hide(target);
Tooltip.rebuild = (): void => ReactTooltip.rebuild();
