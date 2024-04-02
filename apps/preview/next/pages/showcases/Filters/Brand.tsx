/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsAccordionItem, BsCheckbox, BsCounter, BsIconChevronLeft, BsListItem } from '@barnstormer/react';
import { useState } from 'react';
import classNames from 'classnames';

const details = [
  { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
  { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
  { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
  { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
];

export default function BrandFilter() {
  const [opened, setOpened] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const isFilterSelected = (selectedValue: string) => selectedFilters.includes(selectedValue);
  const handleFilterSelection = (selectedValue: string) => {
    if (selectedFilters.indexOf(selectedValue) > -1) {
      setSelectedFilters([...selectedFilters.filter((value) => value !== selectedValue)]);
    } else {
      setSelectedFilters([...selectedFilters, selectedValue]);
    }
  };
  return (
    <BsAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="mb-2 font-medium typography-headline-5">Brand</p>
          <BsIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      {details.map(({ label, value, counter }) => (
        <BsListItem
          key={value}
          as="label"
          size="sm"
          disabled={counter === 0}
          className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
            'font-medium': isFilterSelected(value),
          })}
          slotPrefix={
            <BsCheckbox
              disabled={counter === 0}
              className="flex items-center"
              value={value}
              checked={isFilterSelected(value)}
              onChange={(event) => {
                handleFilterSelection(event.target.value);
              }}
            />
          }
        >
          <p>
            <span className="mr-2 text-sm">{label}</span>
            <BsCounter size="sm">{counter}</BsCounter>
          </p>
        </BsListItem>
      ))}
    </BsAccordionItem>
  );
}

// #endregion source
BrandFilter.getLayout = ShowcasePageLayout;
