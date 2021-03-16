import Todo from '../models/todo';
import Project from '../models/project';
import taskModule from '../view/todo_view';
import LocalStorage from '../models/localStorage';

const taskController = () => {
  const closeTaskButton = document.getElementById('taskClose');
  const submitTask = document.getElementById('submitTask');
  const projectContainer = document.getElementById('projects');

  const taskListIterate = (taskList) => {
    taskList.forEach((task) => { taskModule.renderTask(task, taskList.indexOf(task)); });
  };

  const bindCreateEvent = () => {
    const createTaskButton = document.getElementById('createTask');
    createTaskButton.addEventListener('click', () => {
      taskModule.createForm();
    });
  };

  const linkifyProjects = (event) => {
    if (event.target && event.target.className === 'projectLinks') {
      const myId = Number(event.target.getAttribute('data-attribute'));
      const { taskList } = Project.projectList[myId];
      taskModule.renderSection(myId);
      taskListIterate(taskList);
      bindCreateEvent();
    }
  };

  submitTask.addEventListener('click', () => {
    const dataAttribute = Number(document.getElementById('taskWrapper').getAttribute('data-attribute'));
    const formData = taskModule.getFormData();
    const task = new Todo(formData.task, formData.description, formData.due);
    task.setPriority(formData.priority);
    const project = Project.projectList[dataAttribute];
    project.addTask(task);

    LocalStorage.refresh(project);
    const index = project.taskList.indexOf(task);
    taskModule.renderTask(task, index);
    taskModule.destroyForm();
  });


  projectContainer.addEventListener('click', (event) => { linkifyProjects(event); });

  closeTaskButton.addEventListener('click', () => {
    taskModule.destroyForm();
  });
};

export { taskController as default };
