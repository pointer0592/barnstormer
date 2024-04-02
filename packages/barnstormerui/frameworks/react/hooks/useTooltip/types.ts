import type { Prettify, CSSLength } from '@barnstormer/shared';
import type { UsePopoverOptions } from '../usePopover';

export type UseTooltipOptions = Prettify<
  Omit<UsePopoverOptions, 'isOpen'> & {
    arrowSize?: CSSLength;
  }
>;
