import { BasePage } from '../../utils/BasePage';

export default class BsSwitchObject extends BasePage {
  isChecked() {
    this.container.check();
    return this;
  }
}
