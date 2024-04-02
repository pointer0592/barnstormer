import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import { BsRatingButton } from '@barnstormer/react';

export default function RatingButtonSizes() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <div>
      <BsRatingButton value={rating1} onChange={setRating1} size="sm" />
      <BsRatingButton value={rating2} onChange={setRating2} size="base" />
      <BsRatingButton value={rating3} onChange={setRating3} size="lg" />
    </div>
  );
}

// #endregion source
RatingButtonSizes.getLayout = ShowcasePageLayout;
