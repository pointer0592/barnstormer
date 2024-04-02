import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconCheck({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="check" {...attributes}>
      <path d="M4.535 12.705 8 16.17l9.885-9.875a.997.997 0 0 1 1.41 1.41L8.707 18.293a1 1 0 0 1-1.414 0L3.12 14.12a1 1 0 0 1 1.415-1.415" />
    </BsIconBase>
  );
}
