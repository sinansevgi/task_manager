import LocalStorage from './models/localStorage';
import Project from './models/project';
import Todo from './models/todo';

const seedExamples = () => {
  if (localStorage.getItem('Default') === null) {
    const defaultProject = new Project('Default');
    const defaultTask = new Todo('Hello, Welcome to task manager app please click me for description');
    defaultTask.dueDate = new Date().toLocaleString();
    defaultTask.description = `A task manager app where you can create various projects and add tasks assosiated with that project. To create your own project,
                              click the Create New Project button on the left. To add tasks for that project, click Create New Task Button on the top. To edit or delete the task,
                              Please use the Pen icon or Delete icon. The background of task reflects the priority of task. Blue background means the task is not urgent, 
                              Yellow means the task is important, and the red background means that the task is urgent`;

    defaultProject.addTask(defaultTask);
    LocalStorage.refresh(defaultProject);
    Project.projectList = [];
  }
};

export { seedExamples as default };
