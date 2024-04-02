import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useId, useState } from 'react';
import { BsRatingButton } from '@barnstormer/react';

export default function RatingButtonMax() {
  const labelId = useId();
  const [rating, setRating] = useState(5);

  return (
    <div>
      <p id={labelId}>Select Rating</p>
      <BsRatingButton max={10} value={rating} onChange={setRating} aria-labelledby={labelId} />
    </div>
  );
}

// #endregion source
RatingButtonMax.getLayout = ShowcasePageLayout;
