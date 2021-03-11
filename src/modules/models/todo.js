class Todo {
  #status = false;

  #priority = 1;

  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.#priority = priority;
  }

  getPriority() {
    return this.#priority;
  }

  changeStatus() {
    this.#status = !(this.#status);
  }

  getStatus() {
    return this.#status;
  }
}
export { Todo as default };