import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton, BsIconHome, BsIconStar, BsIconShoppingCart } from '@barnstormer/react';

export default function ButtonContent() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
      <BsButton slotPrefix={<BsIconHome />}>Home</BsButton>

      <BsButton slotSuffix={<BsIconStar />}>Hello</BsButton>

      <BsButton square aria-label="Add to cart">
        <BsIconShoppingCart />
      </BsButton>
    </div>
  );
}
// #endregion source
ButtonContent.getLayout = ShowcasePageLayout;
