import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/react';

export default function BadgePlacement() {
  return (
    <div className="flex gap-3">
      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={100} max={99} placement="top-right" />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={100} max={99} placement="bottom-right" />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={100} max={99} placement="top-left" />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={100} max={99} placement="bottom-left" />
      </BsButton>
    </div>
  );
}

// #endregion source
BadgePlacement.getLayout = ShowcasePageLayout;
