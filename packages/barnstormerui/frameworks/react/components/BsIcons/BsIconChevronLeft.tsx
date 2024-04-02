import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconChevronLeft({
  size = BsIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="chevron-left" {...attributes}>
      <path d="M14.706 17.297a1 1 0 0 0 0-1.41l-3.876-3.885 3.877-3.885a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.997.997 0 0 0 1.41 0" />
    </BsIconBase>
  );
}
