import React from 'react';
import { BsTextareaSize } from '@barnstormer/vue';
import { mount, useComponent } from '../../utils/mount';

const { vue: BsTextareaVue, react: BsTextareaReact } = useComponent('BsTextarea');
import BsTextareaBaseObject from './BsTextarea.PageObject';

describe('BsTextarea', () => {
  let disabled: boolean;
  let size: BsTextareaSize;
  let placeholder: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';
  let readonly;

  const page = () => new BsTextareaBaseObject('textarea');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsTextareaVue,
        props: {
          disabled,
          size,
          placeholder,
          invalid,
          readonly,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <BsTextareaReact
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          invalid={invalid}
          size={size}
          readOnly={readonly}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(BsTextareaSize).forEach((componentSize) => {
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

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop placeholder is filled in', () => {
    before(() => {
      placeholder = 'Select value';
    });
    it('should render with set placeholder value', () => {
      initializeComponent();

      page().hasPlaceholderValue(placeholder).makeSnapshot();
    });
  });

  describe('when prop readonly is provided', () => {
    before(() => {
      readonly = true;
    });
    it(`should render as readonly textarea`, () => {
      initializeComponent();

      page().hasReadonly().makeSnapshot();
    });
  });

  describe('when textarea value change', () => {
    before(() => {
      value = 'abc';
    });
    it(`should render proper value`, () => {
      initializeComponent();

      page().hasValue(value).makeSnapshot();
    });
  });
});
