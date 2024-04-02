import React from 'react';
import { BsRatingSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsRatingBaseObject from './BsRating.PageObject';

const { vue: BsRatingVue, react: BsRatingReact } = useComponent('BsRating');

describe('BsRating', () => {
  let size: BsRatingSize;
  let max: number;
  let value: number;
  let ariaLabel: string;
  let halfIncrement: boolean;

  const page = () => new BsRatingBaseObject('rating');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsRatingVue,
        props: {
          max,
          size,
          value,
          ariaLabel,
          halfIncrement,
        },
      },
      react: <BsRatingReact max={max} size={size} value={value} ariaLabel={ariaLabel} halfIncrement={halfIncrement} />,
    });
  };

  afterEach(() => {
    (size = BsRatingSize.base), (max = 5), (value = 0), (ariaLabel = undefined), (halfIncrement = false);
  });

  it('initial state', () => {
    value = 2.5;
    initializeComponent();

    page().hasFilledIconsCount(3).hasEmptyIconsCount(2).hasAriaLabel('2.5 out of 5').makeSnapshot();
  });

  describe('when prop halfIncrement added', () => {
    it('should display half star for value = 2.5', () => {
      value = 2.5;
      halfIncrement = true;
      initializeComponent();

      page().hasFilledIconsCount(2).hasEmptyIconsCount(2).hasHalfFilledIconsCount(1).makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(BsRatingSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop max is set', () => {
    it(`should render correct rating items`, () => {
      max = 7;
      initializeComponent();
      page().hasIconsCount(max).makeSnapshot();
    });
  });

  describe('when value prop is set to 3', () => {
    it(`should have 3 filled icons`, () => {
      value = 3;
      initializeComponent();

      page()
        .hasFilledIconsCount(value)
        .hasEmptyIconsCount(max - value)
        .makeSnapshot();
    });
  });

  describe('when ariaLabel prop is set', () => {
    it(`should render ariaLabel attribute set`, () => {
      ariaLabel = 'new aria label';
      initializeComponent();

      page().hasAriaLabel(ariaLabel).makeSnapshot();
    });
  });
});
