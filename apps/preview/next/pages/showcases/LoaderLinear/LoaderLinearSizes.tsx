import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLoaderLinear } from '@barnstormer/react';

export default function LoaderLinearSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row">
      <BsLoaderLinear className="w-12" />
      <BsLoaderLinear className="w-12" size="minimal" />
      <BsLoaderLinear className="w-12" size="xs" />
      <BsLoaderLinear className="w-12" size="sm" />
      <BsLoaderLinear className="w-12" size="base" />
      <BsLoaderLinear className="w-12" size="lg" />
      <BsLoaderLinear className="w-12" size="xl" />
      <BsLoaderLinear className="w-12" size="2xl" />
      <BsLoaderLinear className="w-12" size="3xl" />
      <BsLoaderLinear className="w-12" size="4xl" />
    </div>
  );
}

// #endregion source
LoaderLinearSizes.getLayout = ShowcasePageLayout;
