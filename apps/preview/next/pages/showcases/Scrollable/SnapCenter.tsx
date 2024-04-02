import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsScrollable } from '@barnstormer/react';

export default function ScrollableDragSnap() {
  return (
    <BsScrollable className="items-center w-full snap-x snap-mandatory" drag>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300 snap-center"
        >
          {i + 1}
        </div>
      ))}
    </BsScrollable>
  );
}
// #endregion source

ScrollableDragSnap.getLayout = ShowcasePageLayout;
