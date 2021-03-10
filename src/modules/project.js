class Project {
  static projectList = [];

  constructor(title) {
    this.title = title;
    this.taskList = [];
    Project.projectList.push(this);
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(index) {
    this.splice(index, 1);
  }

}



