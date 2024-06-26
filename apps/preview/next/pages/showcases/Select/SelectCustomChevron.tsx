/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsSelect, BsIconUnfoldMore } from '@barnstormer/react';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];

export default function SelectWithCustomChevron() {
  return (
    <label>
      <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
      <BsSelect
        placeholder="-- Select --"
        slotChevron={<BsIconUnfoldMore className="absolute pointer-events-none top-2 right-4 text-neutral-500" />}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </BsSelect>
    </label>
  );
}

// #endregion source
SelectWithCustomChevron.getLayout = ShowcasePageLayout;
