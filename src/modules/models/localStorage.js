import Project from './project';
import Todo from './todo';

class LocalStorage {
  static refresh(object) {
    window.localStorage.setItem(object.title, JSON.stringify(object.taskList));
  }

  static remove(object) {
    window.localStorage.removeItem(object.title);
  }


  static parse() {
    const projects = Object.keys(window.localStorage).sort();
    const defaultIndex = projects.indexOf('Default');
    projects.splice(defaultIndex, 1);
    projects.unshift('Default');
    projects.forEach(key => {
      const tmp = (key) => new Project(key);
      tmp(key);
    });

    Project.projectList.forEach(project => {
      project.taskList = JSON.parse(window.localStorage.getItem(project.title));

      project.taskList.forEach(task => {
        Object.setPrototypeOf(task, Todo.prototype);
      });
    });
  }
}
export { LocalStorage as default };