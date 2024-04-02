import React from 'react';
import { BsThumbnailSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
const { vue: BsThumbnailVue, react: BsThumbnailReact } = useComponent('BsThumbnail');
import BsThumbnailBaseObject from './BsThumbnail.PageObject';

const { vue: BsIconCheckCircleVue, react: BsIconCheckCircleReact } = useComponent('BsIconCheckCircle');

describe('BsThumbnail', () => {
  type InitializeComponentParams = {
    size?: BsThumbnailSize;
    slotDefault?: boolean;
  };

  const page = () => new BsThumbnailBaseObject('thumbnail');

  const initializeComponent = ({
    size = BsThumbnailSize.base,
    slotDefault = false,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: BsThumbnailVue,
        props: {
          size,
        },
        slots: {
          ...(slotDefault && { default: () => <BsIconCheckCircleVue /> }),
        },
        global: {
          components: {
            BsIconCheckCircleVue,
          },
        },
      },
      react: <BsThumbnailReact size={size}>{slotDefault && BsIconCheckCircleReact}</BsThumbnailReact>,
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(BsThumbnailSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });
  describe('when icon is passed via slot', () => {
    it(`should render thumbnail with icon`, () => {
      initializeComponent({ slotDefault: true });

      page().makeSnapshot();
    });
  });
});
