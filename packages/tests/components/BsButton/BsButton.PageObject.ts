import { BasePage } from '../../utils/BasePage';

export default class BsButtonBaseObject extends BasePage {
  isDisabled() {
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.container.should('not.be.disabled');
    return this;
  }

  isSquare(value) {
    this.container.should('have.class', value);
    return this;
  }
}
