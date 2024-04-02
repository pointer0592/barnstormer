import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsThumbnail } from '@barnstormer/react';

export default function ThumbnailColor() {
  return <BsThumbnail className="bg-primary-500" />;
}

// #endregion source
ThumbnailColor.getLayout = ShowcasePageLayout;
