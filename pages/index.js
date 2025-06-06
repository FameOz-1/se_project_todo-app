import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = new Todo(item, "#todo-template");
    return todo.getView();
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// Adds an event listener for closing popup with Esc key
const handleEscClose = (evt) => {
  if (evt.key === "Escape") {
    closeModal(addTodoPopup);
    document.removeEventListener("keydown", handleEscClose);
  }
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
  document.addEventListener("keydown", handleEscClose);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
  document.removeEventListener("keydown", handleEscClose);
});

// The logic in this function should all be handled in the Todo class.
const renderTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  todosList.append(todoElement);
};

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  section.addItem(values);
  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
