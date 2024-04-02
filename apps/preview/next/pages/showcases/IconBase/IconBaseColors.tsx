import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsIconThumbUp } from '@barnstormer/react';

export default function IconColors() {
  return (
    <>
      <BsIconThumbUp className="text-red-600" />
      <BsIconThumbUp className="text-purple-500" />
      <BsIconThumbUp className="text-cyan-700" />
      <span className="text-gray-500">
        <BsIconThumbUp />
      </span>
    </>
  );
}

// #endregion source
IconColors.getLayout = ShowcasePageLayout;
