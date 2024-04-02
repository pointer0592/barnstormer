import React from 'react';
import { BsCounterSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsCounterBaseObject from './BsCounter.PageObject';

const { vue: BsCounterVue, react: BsCounterReact } = useComponent('BsCounter');

describe('BsCounter', () => {
  const slotDefaultContent = '123';
  let pill: boolean;
  let size: BsCounterSize;
  const page = () => new BsCounterBaseObject('counter');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsCounterVue,
        global: {},
        props: {
          size,
          pill,
        },
        slots: {
          default: slotDefaultContent,
        },
      },
      react: (
        <BsCounterReact size={size} pill={pill}>
          {slotDefaultContent}
        </BsCounterReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('When pill is set to true', () => {
    it('pill should be visible', () => {
      pill = true;
      initializeComponent();

      page().isPill().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(BsCounterSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when slots are loaded', () => {
    it('value is shown in the slots', () => {
      initializeComponent();

      page().hasValue(slotDefaultContent).makeSnapshot();
    });
  });
});
