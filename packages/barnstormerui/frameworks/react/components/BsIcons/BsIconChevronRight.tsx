import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconChevronRight({
  size = BsIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="chevron-right" {...attributes}>
      <path d="M8.705 17.297a1 1 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0" />
    </BsIconBase>
  );
}
