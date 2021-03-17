import domHelper from '../helpers/domhelper';

const taskModule = (() => {
  const taskList = document.getElementById('tasks');
  const taskForm = document.getElementById('todoForm');


  const submitTaskButton = document.getElementById('submitTask');
  const editTaskButton = document.getElementById('editTask');
  const taskName = document.getElementById('taskName');
  const taskDescription = document.getElementById('taskDescription');
  const taskDue = document.getElementById('taskDue');
  const taskPriority = document.getElementById('taskPriority');

  const clearSection = () => {
    const taskWrapper = document.getElementById('taskWrapper');
    taskWrapper.remove();
  };

  const renderSection = (parentProject) => {
    clearSection();

    const taskWrap = domHelper.createDomElement('div', {
      id: 'taskWrapper',
      'data-attribute': parentProject,
    });
    const taskCreateButton = domHelper.createDomElement('button', {
      id: 'createTask',
      class: 'btn btn-outline-primary my-2',
      'data-attribute': parentProject,
    }, 'Create a new Task');
    const listGroup = domHelper.createDomElement('div', {
      id: 'list-group',
      class: 'list-group',
    });

    domHelper.appendChildren(taskWrap, [taskCreateButton, listGroup]);
    taskList.appendChild(taskWrap);
  };


  const createForm = (isEdit, task = null, index = null) => {
    if (isEdit) {
      submitTaskButton.classList.add('d-none');
      editTaskButton.setAttribute('data-attribute', index);
      taskForm.querySelector('legend').textContent = 'Edit Task';
      document.getElementById('taskName').value = task.title;
      document.getElementById('taskDescription').value = task.description;
      document.getElementById('taskDue').value = task.dueDate;
      document.getElementById('taskPriority').value = task.getPriority();
    } else {
      editTaskButton.classList.add('d-none');
      taskForm.querySelector('legend').textContent = 'Create a New Task';
    }
    taskForm.parentNode.classList.remove('d-none');
    taskForm.classList.remove('d-none');
  };


  const destroyForm = () => {
    taskName.value = '';
    taskForm.parentNode.classList.add('d-none');
    taskForm.classList.add('d-none');
    submitTaskButton.classList.remove('d-none');
    editTaskButton.classList.remove('d-none');
  };

  const getFormData = () => {
    const task = taskName.value;
    const description = taskDescription.value;
    const due = taskDue.value;
    const priority = taskPriority.value;
    return {
      task,
      description,
      due,
      priority,
    };
  };

  const expand = (element) => {
    const description = element.querySelector('.expandable');
    description.classList.toggle('expanded');
  };

  const classifyPriority = (priority) => {
    switch (priority) {
      case 'Urgent':
        return 'alert alert-danger';
      case 'Important':
        return 'alert alert-warning';
      default:
        return 'alert alert-primary';
    }
  };

  const renderTask = (task, index) => {
    const listGroup = document.getElementById('list-group');
    const taskItem = domHelper.createDomElement('div', {
      class: `${classifyPriority(task.getPriority())} tasked`,
      'data-attribute': index,
    });
    const header = domHelper.createDomElement('h3', { class: 'alert-heading w-100 task-title' }, task.title);
    const headerContainer = domHelper.createDomElement('div', { class: 'd-flex justify-content-between align-items-center  header-container' });
    const completedBadge = domHelper.createDomElement('span', { class: 'badge rounded-pill bg-success d-none mx-2' }, 'Completed');
    const checkboxContainer = domHelper.createDomElement('div', { class: 'form-check form-switch' });
    const checkbox = domHelper.createDomElement('input', {
      class: 'form-check-input',
      type: 'checkbox',
      'data-attribute': index,
    });
    const editButton = domHelper.createDomElement('i', {
      class: 'btn text-reset bi bi-pencil-square',
      'data-attribute': index,
    });
    const deleteButton = domHelper.createDomElement('i', {
      class: 'btn text-reset bi bi-trash-fill',
      'data-attribute': index,
    });
    const bodyContainer = domHelper.createDomElement('div', { class: 'expandable' });
    const rightSide = domHelper.createDomElement('div', { class: 'd-flex align-items-center' });
    const description = domHelper.createDomElement('p', null, task.description);
    const dueDate = domHelper.createDomElement('p', null, `Due Date: ${task.dueDate}`);
    const hr = document.createElement('hr');

    if (task.getStatus()) {
      completedBadge.classList.remove('d-none');
      checkbox.checked = true;
    }


    header.addEventListener('click', () => {
      expand(taskItem);
    });

    checkboxContainer.appendChild(checkbox);
    domHelper.appendChildren(rightSide, [completedBadge, checkboxContainer,
      editButton, deleteButton]);
    domHelper.appendChildren(headerContainer, [header, rightSide]);
    domHelper.appendChildren(bodyContainer, [hr, dueDate, description]);
    domHelper.appendChildren(taskItem, [headerContainer, bodyContainer]);
    listGroup.appendChild(taskItem);
  };


  return {
    createForm,
    getFormData,
    destroyForm,
    renderTask,
    renderSection,
  };
})();


export { taskModule as default };
