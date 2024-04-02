import type { UseFloatingProps } from '@floating-ui/react-dom';
import { BsPopoverPlacement, BsPopoverStrategy, type BsPopoverBasePlacement } from '@barnstormer/shared';

export { BsPopoverPlacement, BsPopoverStrategy, type BsPopoverBasePlacement };

export interface UsePopoverOptions {
  isOpen?: boolean;
  placement?: `${BsPopoverPlacement}`;
  middleware?: UseFloatingProps['middleware'];
  strategy?: `${BsPopoverStrategy}`;
}
