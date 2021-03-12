import Todo from '../models/todo';
import Project from '../models/project';
import taskModule from '../view/todo_view';

const taskController = () => {
  const createTaskButton = document.getElementById('createTask');
  const closeTaskButton = document.getElementById('taskClose');
  const submitButton = document.getElementById('submitTask');
  const projectLinks = document.querySelectorAll('.projectLinks');

  const taskListIterate = (taskList) => {
    taskList.forEach((task) => { taskModule.renderTask(task, taskList.indexOf(task)); });
  };

  projectLinks.forEach((link) => {
    const myId = Number(link.getAttribute('data-attribute'));
    const taskList = Project.projectList[myId].taskList;
    console.log(taskList);
    link.addEventListener('click', () => {
      taskModule.renderSection(myId);
      taskListIterate(taskList);
    });
  });


  submitButton.addEventListener('click', () => {
  });

  createTaskButton.addEventListener('click', () => {
    taskModule.createForm();
  });

  closeTaskButton.addEventListener('click', () => {
    taskModule.destroyForm();
  });
};

export { taskController as default };
