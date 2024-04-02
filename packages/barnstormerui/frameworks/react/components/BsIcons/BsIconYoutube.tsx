import type { BsIconProps } from '@barnstormer/react';
import { BsIconBase, BsIconSize } from '@barnstormer/react';

export default function BsIconYoutube({ size = BsIconSize.base, viewBox = '0 0 24 24', ...attributes }: BsIconProps) {
  return (
    <BsIconBase size={size} viewBox={viewBox} data-testid="youtube" {...attributes}>
      <path d="M22.54 6.42a2.76 2.76 0 0 0-1.944-1.957C18.88 4 12 4 12 4s-6.88 0-8.596.463A2.76 2.76 0 0 0 1.46 6.42C1 8.147 1 11.75 1 11.75s0 3.603.46 5.33a2.72 2.72 0 0 0 1.945 1.926c1.716.463 8.596.463 8.596.463s6.879 0 8.595-.463a2.72 2.72 0 0 0 1.945-1.926c.46-1.727.46-5.33.46-5.33s0-3.603-.46-5.33M9.75 15.021V8.48l5.75 3.271z" />
    </BsIconBase>
  );
}
