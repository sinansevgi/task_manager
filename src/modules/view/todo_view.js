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
    const taskWrap = document.createElement('div');
    const taskCreateButton = document.createElement('button');
    const listGroup = document.createElement('div');
    taskCreateButton.setAttribute('id', 'createTask');
    taskCreateButton.classList.add('btn', 'btn-outline-primary', 'my-2');
    taskCreateButton.setAttribute('data-attribute', parentProject);
    taskCreateButton.textContent = 'Create a New Task';
    listGroup.classList.add('list-group');
    listGroup.setAttribute('id', 'list-group');
    taskWrap.appendChild(taskCreateButton);
    taskWrap.setAttribute('id', 'taskWrapper');
    taskWrap.setAttribute('data-attribute', parentProject);
    taskWrap.appendChild(listGroup);
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

  const renderTask = (task, index) => {
    const listGroup = document.getElementById('list-group');
    const taskItem = document.createElement('div');
    const header = document.createElement('h3');
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const headerContainer = document.createElement('div');
    const bodyContainer = document.createElement('div');
    const hr = document.createElement('hr');
    const description = document.createElement('p');
    const priority = task.getPriority();

    header.textContent = task.title;
    description.textContent = task.description;

    header.classList.add('alert-heading');
    headerContainer.classList.add('d-flex', 'justify-content-between');
    checkboxContainer.classList.add('form-check', 'form-switch');
    checkbox.classList.add('form-check-input');
    checkbox.setAttribute('type', 'checkbox');
    bodyContainer.classList.add('expandable');

    switch (priority) {
      case 'Urgent':
        taskItem.classList.add('alert', 'alert-danger');
        break;
      case 'Important':
        taskItem.classList.add('alert', 'alert-warning');
        break;
      default:
        taskItem.classList.add('alert', 'alert-primary');
        break;
    }

    taskItem.addEventListener('click', () => { expand(taskItem); });
    checkboxContainer.appendChild(checkbox);
    headerContainer.appendChild(header);
    headerContainer.appendChild(checkboxContainer);

    taskItem.appendChild(headerContainer);
    bodyContainer.appendChild(hr);
    bodyContainer.appendChild(description);
    taskItem.appendChild(bodyContainer);

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
