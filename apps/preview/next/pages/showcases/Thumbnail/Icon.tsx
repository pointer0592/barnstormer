import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsThumbnail, BsIconFavorite } from '@barnstormer/react';

export default function ThumbnailIcon() {
  return (
    <BsThumbnail size="xl" className="bg-gray-100 flex items-center justify-center">
      <BsIconFavorite />
    </BsThumbnail>
  );
}

// #endregion source
ThumbnailIcon.getLayout = ShowcasePageLayout;
