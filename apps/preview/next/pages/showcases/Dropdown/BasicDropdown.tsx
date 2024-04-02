import { ShowcasePageLayout } from '../../showcases';

// #region source
import { BsButton, BsDropdown, useDisclosure } from '@barnstormer/react';

export default function BasicDropdown() {
  const { isOpen, toggle, close } = useDisclosure();
  return (
    <BsDropdown trigger={<BsButton onClick={toggle}>Toggle</BsButton>} open={isOpen} onClose={close}>
      <ul className="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </BsDropdown>
  );
}

// #endregion source
BasicDropdown.getLayout = ShowcasePageLayout;
