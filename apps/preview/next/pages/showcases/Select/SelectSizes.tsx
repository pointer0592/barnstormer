/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsSelect } from '@barnstormer/react';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];

export default function SelectSizes() {
  return (
    <div className="flex flex-col gap-y-6">
      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <BsSelect placeholder="-- Select --" size="sm">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </BsSelect>
      </label>

      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <BsSelect placeholder="-- Select --" size="base">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </BsSelect>
      </label>

      <label>
        <span className="pb-1 text-sm font-medium text-neutral-900 font-body">Label</span>
        <BsSelect placeholder="-- Select --" size="lg">
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </BsSelect>
      </label>
    </div>
  );
}

// #endregion source
SelectSizes.getLayout = ShowcasePageLayout;
