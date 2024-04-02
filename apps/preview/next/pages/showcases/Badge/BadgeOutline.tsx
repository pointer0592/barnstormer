import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsBadge, BsButton, BsIconShoppingCart } from '@barnstormer/react';

export default function BadgeOutline() {
  return (
    <div className="flex gap-3">
      <div className="p-3 bg-white">
        <BsButton className="group relative" square variant="tertiary">
          <BsIconShoppingCart />
          <BsBadge
            content={100}
            max={99}
            className="outline outline-white group-hover:outline-primary-100 group-active:outline-primary-200"
          />
        </BsButton>
      </div>

      <div className="p-3 bg-primary-700">
        <BsButton className="group relative hover:bg-primary-800 active:bg-primary-900" square variant="tertiary">
          <BsIconShoppingCart className="text-white" />
          <BsBadge
            content={100}
            max={99}
            className="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
          />
        </BsButton>
      </div>
    </div>
  );
}

// #endregion source
BadgeOutline.getLayout = ShowcasePageLayout;
