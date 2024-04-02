import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLoaderCircular } from '@barnstormer/react';

export default function LoaderCircularColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <BsLoaderCircular className="!text-cyan-700" size="2xl" />
      <BsLoaderCircular className="w-12" size="2xl" />
      <BsLoaderCircular className="!ring-yellow-400" size="2xl" />
    </div>
  );
}

// #endregion source
LoaderCircularColors.getLayout = ShowcasePageLayout;
