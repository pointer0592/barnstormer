import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsProgressCircular } from '@barnstormer/react';

export default function ProgressCircularColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <BsProgressCircular className="!text-cyan-700" value={70} size="3xl" />
      <BsProgressCircular size="3xl" value={70} />
      <BsProgressCircular className="!ring-yellow-200" value={70} size="3xl" />
    </div>
  );
}

// #endregion source
ProgressCircularColors.getLayout = ShowcasePageLayout;
