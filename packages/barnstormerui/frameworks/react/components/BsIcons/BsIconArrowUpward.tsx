import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconArrowUpward({
  size = BsIconSize.base,
  viewBox = '0 0 24 24',
  ...attributes
}: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="arrow-upward" {...attributes}>
      <path d="M12 20a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 19V7.825L6.125 12.7q-.3.3-.713.3a.97.97 0 0 1-.712-.3.96.96 0 0 1-.3-.7q0-.4.3-.7l6.6-6.6q.15-.15.325-.213.175-.062.375-.062t.388.062a.7.7 0 0 1 .312.213l6.6 6.6q.3.3.3.7t-.3.7-.713.3a.97.97 0 0 1-.712-.3L13 7.825V19q0 .424-.287.712A.97.97 0 0 1 12 20" />
    </BsIconBase>
  );
}
