import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import BsSwitchBaseObject from './BsSwitch.PageObject';

const { vue: BsSwitchVue, react: BsSwitchReact } = useComponent('BsSwitch');

describe('BsSwitch', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const value = 'value';

  const page = () => new BsSwitchBaseObject('switch');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: BsSwitchVue,
        props: {
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: <BsSwitchReact onChange={onChangeSpy} />,
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when it is checked', () => {
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isChecked();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });
});
