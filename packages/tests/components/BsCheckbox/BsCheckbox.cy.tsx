import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import BsCheckboxBaseObject from './BsCheckbox.PageObject';

const { vue: BsCheckboxVue, react: BsCheckboxReact } = useComponent('BsCheckbox');

describe('BsCheckbox', () => {
  let disabled: boolean;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 'value';

  const page = () => new BsCheckboxBaseObject('checkbox');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsCheckboxVue,
        props: {
          disabled,
          invalid,
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: <BsCheckboxReact disabled={disabled} invalid={invalid} onChange={onChangeSpy} />,
    });
  };

  beforeEach(() => {
    value = 'value';
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent({ invalid: true });

    page().makeSnapshot();
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when it is checked', () => {
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isNotDisabled().isChecked();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });

  describe('when invalid=true', () => {
    before(() => (invalid = true));
    after(() => (invalid = false));
    it('should render with "invalid" style', () => {
      initializeComponent();

      page().hasInvalidStyle().makeSnapshot();
    });
  });
});
