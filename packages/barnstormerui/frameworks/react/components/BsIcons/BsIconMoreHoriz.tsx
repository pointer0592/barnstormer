import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconMoreHoriz({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="more-horiz" {...attributes}>
      <path d="M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14m4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12m-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12" />
    </BsIconBase>
  );
}
