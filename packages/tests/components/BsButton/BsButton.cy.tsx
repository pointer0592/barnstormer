import React from 'react';
import { BsButtonSize, BsButtonVariant } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsButtonBaseObject from './BsButton.PageObject';

const { vue: BsButtonVue, react: BsButtonReact } = useComponent('BsButton');
const { vue: BsIconCheckCircleVue, react: BsIconCheckCircleReact } = useComponent('BsIconCheckCircle');
const { vue: BsIconIndeterminateCheckBoxVue, react: BsIconIndeterminateCheckBoxReact } =
  useComponent('BsIconIndeterminateCheckBox');

describe('BsButton', () => {
  const slotDefaultContent = 'button content';

  const page = () => new BsButtonBaseObject('button');

  type InitializeComponentParams = {
    size?: BsButtonSize;
    variant?: BsButtonVariant;
    disabled?: boolean;
    square?: boolean;
    slotPrefix?: boolean;
    slotSuffix?: boolean;
    slotDefault?: boolean;
  };
  const initializeComponent = ({
    size = BsButtonSize.base,
    variant = BsButtonVariant.primary,
    disabled,
    square,
    slotPrefix,
    slotSuffix,
    slotDefault = true,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: BsButtonVue,
        global: {
          components: {
            BsIconCheckCircleVue,
            BsIconIndeterminateCheckBoxVue,
          },
        },
        props: {
          size,
          variant,
          disabled,
          square,
        },
        slots: {
          ...(slotPrefix && { prefix: '<BsIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<BsIconIndeterminateCheckBoxVue/>' }),
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <BsButtonReact
          size={size}
          variant={variant}
          disabled={disabled}
          square={square}
          slotPrefix={slotPrefix && <BsIconCheckCircleReact />}
          slotSuffix={slotSuffix && <BsIconIndeterminateCheckBoxReact />}
        >
          {slotDefault ? slotDefaultContent : undefined}
        </BsButtonReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(200, 200);
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(BsButtonSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(BsButtonVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });

          page().makeSnapshot();
        });
      });
    });

    describe('when prop disabled=true', () => {
      it(`should render as disabled`, () => {
        initializeComponent({ disabled: true });

        page().isDisabled().makeSnapshot();
      });
    });

    describe('when prop square=true', () => {
      it(`should render as square button`, () => {
        initializeComponent({ square: true, size: BsButtonSize.base });

        page().isSquare('p-2').makeSnapshot();
      });
    });

    describe('when only prefix', () => {
      it(`should render square button`, () => {
        initializeComponent({ slotPrefix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when only suffix', () => {
      it(`should render square button`, () => {
        initializeComponent({ slotSuffix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when suffix and prefix', () => {
      it(`should render button with same gaps`, () => {
        initializeComponent({ slotPrefix: true, slotSuffix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when suffix, content and prefix', () => {
      it(`should render button with same gaps`, () => {
        initializeComponent({ slotPrefix: true, slotSuffix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });

    describe('when prefix and content', () => {
      it(`should render button with prefix and content with correct gaps`, () => {
        initializeComponent({ slotPrefix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });

    describe('when content and suffix', () => {
      it(`should render button with content and suffix with correct gaps`, () => {
        initializeComponent({ slotSuffix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });
  });
});
