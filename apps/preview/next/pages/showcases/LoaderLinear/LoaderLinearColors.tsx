import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLoaderLinear } from '@barnstormer/react';

export default function LoaderLinearColors() {
  return (
    <div className="flex gap-4 flex-wrap">
      <BsLoaderLinear className="w-12 !text-cyan-700" size="lg" />
      <BsLoaderLinear className="w-12" size="lg" />
      <BsLoaderLinear className="w-12 !bg-yellow-200" size="lg" />
    </div>
  );
}

// #endregion source
LoaderLinearColors.getLayout = ShowcasePageLayout;
