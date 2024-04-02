import { BsCounter } from '@barnstormer/react';
// #region source
import { ShowcasePageLayout } from '../../showcases';

export default function Showcase() {
  return (
    <BsCounter size="lg" pill className="text-white bg-secondary-700 ring-white">
      123
    </BsCounter>
  );
}
// #endregion source
Showcase.getLayout = ShowcasePageLayout;
