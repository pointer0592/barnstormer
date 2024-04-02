import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconExpandMore({
  size = BsIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="expand-more" {...attributes}>
      <path d="M17 9.003a1 1 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41" />
    </BsIconBase>
  );
}
