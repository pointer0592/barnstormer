import {
  Scrollable,
  BsScrollableDirection,
  BsScrollableButtonsPlacement,
  type ScrollableOptions,
  type Prettify,
  type BsScrollableOnDragStartData,
  type BsScrollableOnDragEndData,
  type BsScrollableOnScrollData,
  type BsScrollableOnPrevData,
  type BsScrollableOnNextData,
} from '@barnstormer/shared';

export type UseScrollableOptions = Prettify<
  ScrollableOptions & {
    activeIndex?: number;
  }
>;

export {
  type ScrollableOptions,
  type BsScrollableOnDragStartData,
  type BsScrollableOnDragEndData,
  type BsScrollableOnScrollData,
  type BsScrollableOnPrevData,
  type BsScrollableOnNextData,
  Scrollable,
  BsScrollableDirection,
  BsScrollableButtonsPlacement,
};
