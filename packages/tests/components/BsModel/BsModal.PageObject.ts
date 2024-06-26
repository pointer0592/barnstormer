import { BasePage } from '../../utils/BasePage';

export default class BsModalBaseObject extends BasePage<HTMLDialogElement> {
  pressEsc() {
    this.container.then((el) => el[0].focus());
    this.container.trigger('keydown', { key: 'Escape' });
    return this;
  }
}
