import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsProgressLinear } from '@barnstormer/react';

export default function ProgressLinearWithLabel() {
  const value = 70;

  return (
    <div className="flex flex-col gap-4">
      <BsProgressLinear size="lg" value={value} className="w-12" aria-label={`${value}%`} />
      <label className="inline-flex items-center gap-2">
        <BsProgressLinear className="w-12" size="lg" value={value} />
        <span className="font-medium text-lg">{value}%</span>
      </label>
    </div>
  );
}

// #endregion source
ProgressLinearWithLabel.getLayout = ShowcasePageLayout;
