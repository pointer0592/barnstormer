import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsProgressCircular } from '@barnstormer/react';

export default function ProgressCircularSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mr-6 mb-6">
      <BsProgressCircular value={30} size="xs" />
      <BsProgressCircular value={30} size="sm" />
      <BsProgressCircular value={30} size="base" />
      <BsProgressCircular value={30} />
      <BsProgressCircular value={30} size="lg" />
      <BsProgressCircular value={30} size="xl" />
      <BsProgressCircular value={30} size="2xl" />
      <BsProgressCircular value={30} size="3xl" />
      <BsProgressCircular value={30} size="4xl" />
    </div>
  );
}

// #endregion source
ProgressCircularSizes.getLayout = ShowcasePageLayout;
