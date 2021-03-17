import LocalStorage from './models/localStorage';
import Project from './models/project';
import Todo from './models/todo';

const seedExamples = () => {
  if (localStorage.getItem('Default') === null) {
    const defaultProject = new Project('Default');
    const defaultTask = new Todo('Hello, Welcome to task manager app please click me for description');
    defaultProject.addTask(defaultTask);
    LocalStorage.refresh(defaultProject);
    Project.projectList = [];
  }
};

export { seedExamples as default };
