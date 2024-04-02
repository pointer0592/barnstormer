import { BasePage } from '../../utils/BasePage';

export default class BsTooltipObject extends BasePage {
  isTooltipHidden() {
    this.tooltip.should('not.exist');
    return this;
  }

  isTooltipVisible() {
    this.tooltip.should('exist');
    this.tooltip.should('be.visible');
    return this;
  }

  get tooltip() {
    return this.container.get('[role="tooltip"]');
  }
}
