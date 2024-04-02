import React from 'react';
import { BsProgressSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsProgressCircularBaseObject from './BsProgressCircular.PageObject';

const { vue: BsProgressCircularVue, react: BsProgressCircularReact } = useComponent('BsProgressCircular');

describe('BsProgressCircular', () => {
  let size: BsProgressSize;
  let value: number;
  let ariaLabel: string;

  const page = () => new BsProgressCircularBaseObject('progress');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsProgressCircularVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <BsProgressCircularReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = BsProgressSize.base;
    value = 0;
    ariaLabel = '';
  });

  it('initial state', () => {
    initializeComponent();
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(BsProgressSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          value = 50;
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
