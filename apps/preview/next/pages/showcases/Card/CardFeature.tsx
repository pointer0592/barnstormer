/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsButton, BsIconPackage, BsIconWarehouse, BsIconPublishedWithChanges } from '@barnstormer/react';
import classNames from 'classnames';

const cardDetails = [
  {
    icon: <BsIconPackage size="2xl" />,
    title: 'Free shipping',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <BsIconWarehouse size="2xl" />,
    title: 'Click & Collect',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: false,
  },
  {
    icon: <BsIconPublishedWithChanges size="2xl" />,
    title: 'Free 30-Day returns',
    description: 'Learn about our commitments to ethics, our team, our communities and more.',
    buttonText: 'Read more',
    isDisabled: true,
  },
];

export default function CardFeature() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
      {cardDetails.map(({ icon, title, description, buttonText, isDisabled }) => (
        <div key={title} className="flex flex-col w-full max-w-[325px] sm:w-[375px] lg:w-[496px] items-center">
          <span className={classNames(isDisabled && 'text-disabled-900')}>{icon}</span>
          <div className="p-4 flex flex-col items-center">
            <p className={classNames('font-medium typography-text-base', { 'text-disabled-900': isDisabled })}>
              {title}
            </p>
            <p
              className={classNames('mt-1 mb-4 font-normal typography-text-sm text-neutral-700 text-center', {
                'text-disabled-700': isDisabled,
              })}
            >
              {description}
            </p>
            <BsButton size="sm" variant="secondary" disabled={isDisabled} className="mt-auto">
              {buttonText}
            </BsButton>
          </div>
        </div>
      ))}
    </div>
  );
}
// #endregion source
CardFeature.getLayout = ShowcasePageLayout;
