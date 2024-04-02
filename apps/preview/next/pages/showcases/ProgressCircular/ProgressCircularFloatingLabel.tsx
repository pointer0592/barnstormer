import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsProgressCircular } from '@barnstormer/react';

export default function ProgressCircularWithLabels() {
  const value = 70;

  return (
    <div className="flex gap-4 flex-wrap">
      <BsProgressCircular size="2xl" value={value}>
        <text className="font-medium" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </BsProgressCircular>
      <BsProgressCircular size="3xl" value={value}>
        <text
          className="font-medium fill-neutral-400"
          textAnchor="middle"
          alignmentBaseline="central"
          x="100%"
          y="100%"
        >
          {value}%
        </text>
      </BsProgressCircular>
      <BsProgressCircular size="3xl" value={value}>
        <text className="font-medium text-2xs" textAnchor="middle" alignmentBaseline="central" x="100%" y="100%">
          {value}%
        </text>
      </BsProgressCircular>
    </div>
  );
}

// #endregion source
ProgressCircularWithLabels.getLayout = ShowcasePageLayout;
