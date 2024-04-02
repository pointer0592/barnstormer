import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/react';

export default function BadgeBasic() {
  return (
    <div className="flex gap-3">
      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={10} />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content={10000} />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge content="New" />
      </BsButton>

      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge variant="dot" />
      </BsButton>
    </div>
  );
}

// #endregion source
BadgeBasic.getLayout = ShowcasePageLayout;
