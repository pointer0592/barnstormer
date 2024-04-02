import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsLoaderCircular } from '@barnstormer/react';

export default function LoaderCircularSizes() {
  return (
    <div className="flex flex-col gap-4 flex-wrap sm:flex-row mb-6 mr-6">
      <BsLoaderCircular size="xs" />
      <BsLoaderCircular size="sm" />
      <BsLoaderCircular size="base" />
      <BsLoaderCircular />
      <BsLoaderCircular size="lg" />
      <BsLoaderCircular size="xl" />
      <BsLoaderCircular size="2xl" />
      <BsLoaderCircular size="3xl" />
      <BsLoaderCircular size="4xl" />
    </div>
  );
}

// #endregion source
LoaderCircularSizes.getLayout = ShowcasePageLayout;
