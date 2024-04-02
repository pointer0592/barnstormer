import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconSort({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="sort" {...attributes}>
      <path d="M4 18a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 6a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" />
    </BsIconBase>
  );
}
