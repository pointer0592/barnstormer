import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsThumbnail } from '@barnstormer/react';

export default function ThumbnailSizes() {
  return (
    <div className="flex items-center justify-around max-w-sm">
      <BsThumbnail size="sm" className="bg-primary-500 mr-2" />
      <BsThumbnail size="base" className="bg-primary-500 mr-2" />
      <BsThumbnail size="lg" className="bg-primary-500 mr-2" />
      <BsThumbnail size="xl" className="bg-primary-500" />
    </div>
  );
}

// #endregion source
ThumbnailSizes.getLayout = ShowcasePageLayout;
