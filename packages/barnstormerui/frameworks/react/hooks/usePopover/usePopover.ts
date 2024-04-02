import { autoUpdate, useFloating } from '@floating-ui/react-dom';
import { BsPopoverPlacement, BsPopoverStrategy, type UsePopoverOptions } from '@barnstormer/react';

export function usePopover(options: UsePopoverOptions) {
  const {
    isOpen,
    middleware,
    placement = BsPopoverPlacement.bottom,
    strategy: initialStrategy = BsPopoverStrategy.absolute,
  } = options;

  const { refs, strategy, x, y, middlewareData } = useFloating<HTMLElement>({
    strategy: initialStrategy,
    placement,
    open: isOpen,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const style = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  };

  return { refs, style, middlewareData };
}
