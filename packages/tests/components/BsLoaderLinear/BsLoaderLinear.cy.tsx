import React from 'react';
import { BsLoaderLinearSize, BsLoaderSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsLoaderLinearBaseObject from './BsLoaderLinear.PageObject';

const { vue: BsLoaderLinearVue, react: BsLoaderLinearReact } = useComponent('BsLoaderLinear');

describe('BsLoaderLinear', () => {
  let size: BsLoaderLinearSize | BsLoaderSize;
  let ariaLabel: string;

  const page = () => new BsLoaderLinearBaseObject('loader-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsLoaderLinearVue,
        props: {
          size,
          ariaLabel,
        },
        attrs: {
          style: 'width: 100px;',
        },
      },
      react: <BsLoaderLinearReact style={{ width: '100px' }} size={size} ariaLabel={ariaLabel} />,
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
    [...Object.values(BsLoaderLinearSize), ...Object.values(BsLoaderSize)].forEach((componentSize) => {
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
