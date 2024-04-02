import React from 'react';
import { BsProgressLinearSize, BsProgressSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsProgressLinearBaseObject from './BsProgressLinear.PageObject';

const { vue: BsProgressLinearVue, react: BsProgressLinearReact } = useComponent('BsProgressLinear');

describe('BsProgressLinear', () => {
  let size: BsProgressSize | BsProgressLinearSize;
  let value: number;
  let ariaLabel: string | undefined;

  const page = () => new BsProgressLinearBaseObject('progress-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsProgressLinearVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <BsProgressLinearReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = BsProgressSize.base;
    value = 0;
    ariaLabel = undefined;
  });

  it('initial state', () => {
    initializeComponent();
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    [...Object.values(BsProgressLinearSize), ...Object.values(BsProgressSize)].forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop value is 90', () => {
    before(() => {
      value = 90;
    });
    it('should render with 90%', () => {
      initializeComponent();

      page().hasValue(90).makeSnapshot();
    });
  });

  describe('when ariaLabel provided', () => {
    it('should render with 90%', () => {
      ariaLabel = 'some value';
      initializeComponent();

      page().hasAriaLabel('some value').makeSnapshot();
    });
  });
});
