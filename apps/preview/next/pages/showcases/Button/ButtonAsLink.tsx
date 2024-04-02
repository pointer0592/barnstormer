/* eslint-disable jsx-a11y/anchor-is-valid */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton } from '@barnstormer/react';
import Link from 'next/link';

export default function ButtonAsLink() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <BsButton as="a" href="#">
        Link
      </BsButton>
      <Link href="#" passHref legacyBehavior>
        <BsButton as="a">NextLink</BsButton>
      </Link>
    </div>
  );
}

// #endregion source
ButtonAsLink.getLayout = ShowcasePageLayout;
