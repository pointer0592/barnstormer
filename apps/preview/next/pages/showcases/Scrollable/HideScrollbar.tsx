import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsScrollable } from '@barnstormer/react';

export default function ScrollableHideScrollbar() {
  return (
    <BsScrollable className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300"
        >
          {i + 1}
        </div>
      ))}
    </BsScrollable>
  );
}
// #endregion source

ScrollableHideScrollbar.getLayout = ShowcasePageLayout;
