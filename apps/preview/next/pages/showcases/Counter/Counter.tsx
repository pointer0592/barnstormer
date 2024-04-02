import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsCounter } from '@barnstormer/react';

export default function CounterDemo() {
  return (
    <div className="flex items-center gap-2 md:flex-row">
      <BsCounter size="3xs">123</BsCounter>
      <BsCounter size="2xs">123</BsCounter>
      <BsCounter size="xs">123</BsCounter>
      <BsCounter size="sm">123</BsCounter>
      <BsCounter>123</BsCounter>
      <BsCounter size="lg">123</BsCounter>
    </div>
  );
}

// #endregion source
CounterDemo.getLayout = ShowcasePageLayout;
