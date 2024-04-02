import type { Ref } from 'vue';
import type {
  UseFloatingOptions,
  ReferenceElement,
  FloatingElement,
  MaybeElement,
  MaybeReadonlyRef,
} from '@floating-ui/vue';
import { BsPopoverPlacement, BsPopoverStrategy, type BsPopoverBasePlacement } from '@barnstormer/shared';

export { BsPopoverPlacement, BsPopoverStrategy, type BsPopoverBasePlacement };

export interface UsePopoverOptions<ReferenceEl extends ReferenceElement = ReferenceElement> {
  referenceRef?: Readonly<Ref<MaybeElement<ReferenceEl>>>;
  floatingRef?: Readonly<Ref<MaybeElement<FloatingElement>>>;
  isOpen?: UseFloatingOptions['open'];
  placement?: MaybeReadonlyRef<`${BsPopoverPlacement}` | undefined>;
  middleware?: UseFloatingOptions['middleware'];
  strategy?: MaybeReadonlyRef<`${BsPopoverStrategy}` | undefined>;
}
