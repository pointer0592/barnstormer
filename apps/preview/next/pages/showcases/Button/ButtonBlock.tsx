import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton } from '@barnstormer/react';

export default function ButtonBlock() {
  return <BsButton className="w-full">Hello</BsButton>;
}
// #endregion source
ButtonBlock.getLayout = ShowcasePageLayout;
