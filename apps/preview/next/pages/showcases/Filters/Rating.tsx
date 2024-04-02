import { ShowcasePageLayout } from '../../showcases';
import {
  BsAccordionItem,
  BsCounter,
  BsListItem,
  BsRadio,
  BsRating,
  BsIconChevronLeft,
  useDisclosure,
} from '@barnstormer/react';
import { useState } from 'react';
import classNames from 'classnames';

const ratingsValues = [
  { id: 'r1', label: '5', value: '5', counter: 10 },
  { id: 'r2', label: '4 & up', value: '4', counter: 123 },
  { id: 'r3', label: '3 & up', value: '3', counter: 12 },
  { id: 'r4', label: '2 & up', value: '2', counter: 3 },
  { id: 'r5', label: '1 & up', value: '1', counter: 13 },
];

export default function RatingFilter() {
  const [rating, setRating] = useState<string | null>(null);
  const { toggle, isOpen } = useDisclosure({ initialValue: true });

  return (
    <BsAccordionItem
      open={isOpen}
      onToggle={() => toggle()}
      className="w-full md:max-w-[376px]"
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="font-medium">Rating</p>
          <BsIconChevronLeft className={classNames('text-neutral-500', `${isOpen ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
    >
      <fieldset id="radio-rating">
        {ratingsValues.map(({ id, label, value, counter }) => (
          <BsListItem
            key={id}
            as="label"
            size="sm"
            className={classNames('!items-center py-4 md:py-1 bg-transparent hover:bg-transparent')}
            slotPrefix={
              <BsRadio
                value={value}
                className="flex items-center"
                checked={rating === value}
                name="radio-rating"
                onChange={() => setRating(rating === value ? null : value)}
              />
            }
          >
            <div className="flex flex-wrap items-center">
              <BsRating className="-mt-px" value={Number(value)} max={5} size="sm" />
              <span
                className={classNames('mx-2 text-base md:text-sm', {
                  'font-medium': value === rating,
                })}
              >
                {label}
              </span>
              <BsCounter size="sm">{counter}</BsCounter>
            </div>
          </BsListItem>
        ))}
      </fieldset>
    </BsAccordionItem>
  );
}

RatingFilter.getLayout = ShowcasePageLayout;
