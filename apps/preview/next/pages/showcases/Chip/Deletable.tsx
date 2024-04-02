import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsChip, BsThumbnail, BsIconCloseSm } from '@barnstormer/react';
import { useState } from 'react';

const chipValues = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
];

export default function DeletableChips() {
  const [chipList, setChipList] = useState(chipValues);
  const handleRemoveChip = (val: string) => {
    const newList = chipList.filter((item) => item.value !== val);

    setChipList(newList);
  };

  return (
    <ul className="flex flex-wrap gap-4 sm:flex-row">
      {chipList.map(({ label, value }) => (
        <li key={value}>
          <BsChip
            className="mr-2"
            inputProps={{ checked: true, onChange: () => handleRemoveChip(value) }}
            slotPrefix={<BsThumbnail className={`bg-${value}-500`} />}
            slotSuffix={
              <BsIconCloseSm className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
            }
          >
            {label}
          </BsChip>
        </li>
      ))}
    </ul>
  );
}

// #endregion source

DeletableChips.getLayout = ShowcasePageLayout;
