import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsIconHome } from '@barnstormer/react';

export default function IconSizesDemo() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <BsIconHome size="sm" />
      <BsIconHome />
      <BsIconHome size="lg" />
      <BsIconHome size="xl" />
      <BsIconHome size="2xl" />
      <BsIconHome size="3xl" />
      <BsIconHome size="4xl" />
    </div>
  );
}

// #endregion source
IconSizesDemo.getLayout = ShowcasePageLayout;
