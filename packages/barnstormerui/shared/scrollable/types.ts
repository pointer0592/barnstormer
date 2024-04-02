export enum BsScrollableDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum BsScrollableButtonsPlacement {
  none = 'none',
  floating = 'floating',
  block = 'block',
}

export type BsScrollableOnDragStartData = {
  isDragged: boolean;
};

export type BsScrollableOnDragEndData = BsScrollableOnDragStartData & {
  swipeLeft: boolean;
  swipeRight: boolean;
};

export type BsScrollableOnScrollData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export type BsScrollableOnPrevData = {
  preventDefault: () => void;
};
export type BsScrollableOnNextData = BsScrollableOnPrevData;

export type ScrollableOptions = {
  reduceMotion?: boolean;
  drag?: { sensitivity?: number; containerWidth?: boolean } | boolean;
  direction?: `${BsScrollableDirection}`;
  isActiveIndexCentered?: boolean;
  onDragStart?: (data: BsScrollableOnDragStartData) => void;
  onDragEnd?: (data: BsScrollableOnDragEndData) => void;
  onScroll?: (data: BsScrollableOnScrollData) => void;
  onPrev?: (data: BsScrollableOnPrevData) => void;
  onNext?: (data: BsScrollableOnNextData) => void;
}; 
