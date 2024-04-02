import React from 'react';
import { BsInputSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';
import BsInputBaseObject from './BsInput.PageObject';

const { vue: BsInputVue, react: BsInputReact } = useComponent('BsInput');

describe('BsInput', () => {
  let disabled: boolean;
  let size: BsInputSize;
  let placeholder: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let wrapperAs: string;
  let wrapperTag: string;
  let value = '';
  let readonly;

  const page = () => new BsInputBaseObject('input');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsInputVue,
        props: {
          disabled,
          size,
          placeholder,
          invalid,
          readonly,
          wrapperTag,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <BsInputReact
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          invalid={invalid}
          size={size}
          readOnly={readonly}
          wrapperAs={wrapperAs}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = BsInputSize.base;
    (placeholder = 'Placeholder'), (readonly = undefined);
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(BsInputSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled();
      page().makeSnapshot();
    });
  });

  describe('when prop placeholder is filled in', () => {
    before(() => {
      placeholder = 'Select value';
    });
    it('should render with no placeholder', () => {
      initializeComponent();

      page().hasPlaceholder().makeSnapshot();
    });
  });

  describe('when prop wrapperAs/wrapperTag is set as label', () => {
    before(() => {
      wrapperAs = 'label';
      wrapperTag = 'label';
    });
    it(`should render input wrapper as label tag`, () => {
      initializeComponent();

      page().hasTag('LABEL');
      page().makeSnapshot();
    });
  });

  describe('when prop readonly is provided', () => {
    before(() => {
      readonly = true;
    });
    it(`should render as readonly input`, () => {
      initializeComponent();

      page().hasReadonly();
      page().makeSnapshot();
    });
  });

  describe('when input value change', () => {
    before(() => {
      value = 'abc';
    });
    it(`should render proper value`, () => {
      initializeComponent();

      page().hasValue(value);
      page().makeSnapshot();
    });
  });
});
