import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'clickBtn', 'resetBtn' ]

  disable(event) {
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = "Loading...";
    this.resetBtnTarget.classList.remove("d-none");
  }

  reset() {
    this.resetBtnTarget.classList.add("d-none");
    this.clickBtnTarget.disabled = false;
    this.clickBtnTarget.innerText = "Click me!";
  }
}