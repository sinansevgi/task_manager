class Project {
  static projectList = [];

  static removeProject(index) {
    Project.projectList.splice(index, 1);
  }

  constructor(title) {
    this.title = title;
    this.taskList = [];
    Project.projectList.push(this);
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
  }
}
export { Project as default };