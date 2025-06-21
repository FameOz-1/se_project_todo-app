import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }

  //   setEventListeners() {
  //     super.setEventListeners();
  //     console.log("in child");
  //   }
}
