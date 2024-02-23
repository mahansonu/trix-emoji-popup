export class RichText {
  constructor(picker, button) {
    this.picker = picker;
    this.button = button;
    this.createEmojiPickerButton();
  }
  createEmojiPickerButton() {
    this.button.addEventListener("click", this.toggleEmojiPicker.bind(this));
    document
      .querySelector("[data-trix-button-group=block-tools]")
      .prepend(this.button);
  }

  toggleEmojiPicker(event) {
    this.picker.toggle();
  }

  setPicker(picker) {
    this.picker = picker;
  }
}
