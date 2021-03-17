import Todo from '../models/todo';
import Project from '../models/project';
import taskModule from '../view/todo_view';
import LocalStorage from '../models/localStorage';

const taskController = () => {
  const closeTaskButton = document.getElementById('taskClose');
  const submitTask = document.getElementById('submitTask');
  const editTaskButton = document.getElementById('editTask');
  const projectContainer = document.getElementById('projects');

  const editTask = (node, parentId) => {
    const index = Number(node.getAttribute('data-attribute'));
    const projectIndex = Number(parentId);
    const task = Project.projectList[projectIndex].taskList[index];
    taskModule.createForm(true, task, index);
  };

  const taskListIterate = (taskList) => {
    taskList.forEach((task) => { taskModule.renderTask(task, taskList.indexOf(task)); });
  };


  const bindCreateEvent = () => {
    const createTaskButton = document.getElementById('createTask');
    createTaskButton.addEventListener('click', () => {
      taskModule.createForm(false);
    });
  };

  const removeTask = (node, parentId) => {
    const index = Number(node.getAttribute('data-attribute'));
    const projectIndex = Number(parentId);
    Project.projectList[projectIndex].removeTask(index);
    LocalStorage.refresh(Project.projectList[projectIndex]);
    taskModule.renderSection(projectIndex);
    const { taskList } = Project.projectList[projectIndex];
    taskModule.renderSection(projectIndex);
    taskListIterate(taskList);
  };

  const bindEventTask = () => {
    const taskContainer = document.getElementById('taskWrapper');
    taskContainer.addEventListener('click', (event) => {
      const node = event.target;
      if (node && node.className === 'form-check-input') {
        node.parentNode.parentNode.querySelector('.badge').classList.toggle('d-none');
        const project = Project.projectList[Number(taskContainer.getAttribute('data-attribute'))];
        project.taskList[Number(node.getAttribute('data-attribute'))].changeStatus();
        LocalStorage.refresh(project);
      } else if (node && node.className === 'btn text-reset bi bi-pencil-square') {
        editTask(node, taskContainer.getAttribute('data-attribute'));
      } else if (node && node.className === 'btn text-reset bi bi-trash-fill') {
        const combine = () => {
          removeTask(node, taskContainer.getAttribute('data-attribute'));
          bindEventTask();
        };
        combine();
      }
    });
  };


  const linkifyProjects = (event) => {
    if (event.target && event.target.className === 'projectLinks') {
      const myId = Number(event.target.getAttribute('data-attribute'));
      const { taskList } = Project.projectList[myId];
      taskModule.renderSection(myId);
      taskListIterate(taskList);
      bindCreateEvent();
      bindEventTask();
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

  editTaskButton.addEventListener('click', (event) => {
    const taskContainer = document.getElementById('taskWrapper');
    const index = Number(event.target.getAttribute('data-attribute'));
    const projectIndex = Number(taskContainer.getAttribute('data-attribute'));
    const project = Project.projectList[projectIndex];
    const task = project.taskList[index];
    const formData = taskModule.getFormData();
    task.title = formData.task;
    task.description = formData.description;
    task.dueDate = formData.due;
    task.setPriority(formData.priority);
    LocalStorage.refresh(project);
    taskModule.destroyForm();
    taskModule.renderSection(projectIndex);
    const { taskList } = Project.projectList[projectIndex];
    taskModule.renderSection(projectIndex);
    taskListIterate(taskList);
    bindCreateEvent();
    bindEventTask();
  });


  projectContainer.addEventListener('click', (event) => { linkifyProjects(event); });

  closeTaskButton.addEventListener('click', () => {
    taskModule.destroyForm();
  });

  taskModule.renderSection(0);
  const { taskList } = Project.projectList[0];
  taskListIterate(taskList);
  bindCreateEvent();
  bindEventTask();
};

export { taskController as default };
