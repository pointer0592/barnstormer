import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  BsAccordionItem,
  BsCounter,
  BsIconArrowBack,
  BsListItem,
  BsIconChevronLeft,
  BsIconCheck,
} from '@barnstormer/react';
import classNames from 'classnames';
import { useState } from 'react';

const categories = [
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
];
export default function CategoryFilter() {
  const [opened, setOpened] = useState(true);
  return (
    <BsAccordionItem
      open={opened}
      onToggle={() => setOpened(!opened)}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Category</p>
          <BsIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <ul className="mt-2 mb-6">
        <li>
          <BsListItem size="sm" as="button" type="button">
            <div className="flex items-center">
              <BsIconArrowBack size="sm" className="text-neutral-500 mr-3" />
              Back to {categories[0].label}
            </div>
          </BsListItem>
        </li>
        {categories.map((category, index) => (
          <li key={category.key}>
            <BsListItem
              size="sm"
              as="a"
              href={category.link}
              className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                'bg-primary-100 hover:bg-primary-100 font-medium': index === 0,
              })}
              slotSuffix={index === 0 && <BsIconCheck size="sm" className="text-primary-700" />}
            >
              <span className="flex items-center">
                {category.label}
                <BsCounter className="ml-2 typography-text-sm font-normal">{category.counter}</BsCounter>
              </span>
            </BsListItem>
          </li>
        ))}
      </ul>
    </BsAccordionItem>
  );
}

// #endregion source
CategoryFilter.getLayout = ShowcasePageLayout;
