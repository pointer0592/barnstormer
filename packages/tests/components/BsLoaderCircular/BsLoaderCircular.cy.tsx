import React from 'react';
import { BsLoaderSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsLoaderCircularBaseObject from './BsLoaderCircular.PageObject';

const { vue: BsLoaderCircularVue, react: BsLoaderCircularReact } = useComponent('BsLoaderCircular');

describe('BsLoaderCircular', () => {
  const page = () => new BsLoaderCircularBaseObject('loader-circular');
  let size: BsLoaderSize;
  let ariaLabel: string;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsLoaderCircularVue,
        props: {
          size,
          ariaLabel,
        },
      },
      react: <BsLoaderCircularReact size={size} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = BsLoaderSize.lg;
    ariaLabel = 'loading';
  });

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when size is changed to ', () => {
    Object.values(BsLoaderSize).forEach((componentSize) => {
      describe(componentSize, () => {
        it('should render proper loader size', () => {
          size = componentSize;

          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when ariaLabel is changed', () => {
    it('should render proper content', () => {
      ariaLabel = 'is loading';
      initializeComponent();

      page().hasAriaLabel(ariaLabel).makeSnapshot();
    });
  });
});
