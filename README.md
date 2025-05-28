# Simple Todo App

A simple, interactive to-do list application built with modern JavaScript, CSS, and HTML. This project demonstrates clean code structure, accessibility, and responsive design using BEM methodology and ES6 classes.

## Description

Simple Todo App allows users to manage their daily tasks efficiently. Users can add new to-do items, mark them as completed or uncompleted, and delete them. Each to-do item can also have an optional due date. The app features a modal form for adding new tasks, real-time form validation, and accessibility enhancements.

## Features

- View an initial list of to-do items
- Add new to-do items with a name and optional due date
- Mark tasks as completed or uncompleted
- Delete tasks
- Unique IDs for each to-do item (using the `uuid` package)
- Accessible modal popup for adding tasks
- Form validation with instant feedback
- Keyboard accessibility (close popup with Esc)
- Responsive design and BEM CSS structure

## Technologies & Techniques

- **JavaScript (ES6+)**: Modular code with ES6 classes (`Todo`, `FormValidator`)
- **HTML5 & CSS3**: Semantic markup, BEM methodology for CSS, responsive layout
- **uuid**: For generating unique IDs for each to-do item
- **Prettier**: Code formatting
- **Accessibility**: Keyboard navigation, descriptive `alt` attributes, `:hover` states
- **Directory Structure**:
  - `blocks/`: BEM CSS blocks
  - `components/`: JavaScript classes (`Todo.js`, `FormValidator.js`)
  - `images/`: App images
  - `pages/`: Main CSS file (`index.css`)
  - `vendor/`: `normalize.css`, `fonts.css`, and fonts
  - `index.html`: Main HTML file

### Screenshots

<!-- Add screenshots or GIFs here -->

![Screenshot of Simple Todo App](images\todo-app-screenshots)

## Deployment

This project is deployed on GitHub Pages:

- [View the live app here](https://fameoz-1.github.io/se_project_todo-app/)

---

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/se_project_todo-app.git
   ```
2. Open `index.html` in your browser or visit the GitHub Pages link above.

---

## License

This project is open source and available under the [MIT License](LICENSE).
