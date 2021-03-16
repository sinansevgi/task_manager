import domHelper from '../helpers/domhelper';

const taskModule = (() => {
  const taskList = document.getElementById('tasks');
  const taskForm = document.getElementById('todoForm');

  // Project form input
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

    const taskWrap = domHelper.createDomElement('div', { id: 'taskWrapper', 'data-attribute': parentProject });
    const taskCreateButton = domHelper.createDomElement('button', { id: 'createTask', class: 'btn btn-outline-primary my-2', 'data-attribute': parentProject }, 'Create a new Task');
    const listGroup = domHelper.createDomElement('div', { id: 'list-group', class: 'list-group' });

    domHelper.appendChildren(taskWrap, [taskCreateButton, listGroup]);
    taskList.appendChild(taskWrap);
  };


  const createForm = () => {
    taskForm.parentNode.classList.remove('d-none');
    taskForm.classList.remove('d-none');
  };


  const destroyForm = () => {
    taskName.value = '';
    taskForm.parentNode.classList.add('d-none');
    taskForm.classList.classList.add('d-none');
  };

  const getFormData = () => {
    const task = taskName.value;
    const description = taskDescription.value;
    const due = taskDue.value;
    const priority = taskPriority.value;
    return {
      task, description, due, priority,
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
    const taskItem = domHelper.createDomElement('div', { class: classifyPriority(task.getPriority()) });
    const header = domHelper.createDomElement('h3', { class: 'alert-heading' }, task.title);
    const headerContainer = domHelper.createDomElement('div', { class: 'd-flex justify-content-between' });
    const checkboxContainer = domHelper.createDomElement('div', { class: 'form-check form-switch' });
    const checkbox = domHelper.createDomElement('input', { class: 'form-check-input', type: 'checkbox' });
    const bodyContainer = domHelper.createDomElement('div', { class: 'expandable' });
    const description = domHelper.createDomElement('p', null, task.description);
    const hr = document.createElement('hr');

    taskItem.addEventListener('click', () => { expand(taskItem); });

    checkboxContainer.appendChild(checkbox);
    domHelper.appendChildren(headerContainer, [header, checkboxContainer]);
    domHelper.appendChildren(bodyContainer, [hr, description]);
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
