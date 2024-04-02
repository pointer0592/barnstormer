import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton } from '@barnstormer/react';

export default function ButtonSizes() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <BsButton size="sm">Hello</BsButton>

      <BsButton size="base">Hello</BsButton>

      <BsButton size="lg">Hello</BsButton>
    </div>
  );
}
// #endregion source
ButtonSizes.getLayout = ShowcasePageLayout;
