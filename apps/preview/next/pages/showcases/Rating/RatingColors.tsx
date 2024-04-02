import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsRating } from '@barnstormer/react';

export default function RatingColors() {
  return (
    <div className="flex flex-col">
      <BsRating className="!text-red-600" value={4} />
      <BsRating className="!text-purple-500" value={4} />
      <BsRating className="!text-cyan-700" value={4} />
    </div>
  );
}

// #endregion source
RatingColors.getLayout = ShowcasePageLayout;
