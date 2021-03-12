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
    taskCreateButton.setAttribute('id', 'createProject');
    taskCreateButton.classList.add('btn', 'btn-outline-primary', 'my-2');
    taskCreateButton.setAttribute('data-attribute', parentProject);
    taskCreateButton.textContent = 'Create a New Task';
    listGroup.classList.add('list-group');
    listGroup.setAttribute('id', 'list-group');
    taskWrap.appendChild(taskCreateButton);
    taskWrap.setAttribute('id', 'taskWrapper');
    taskWrap.setAttribute('data-attribute', 'parentProject');
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


  const renderTask = (task, index) => {
    const listGroup = document.getElementById('list-group');
    const title = document.createElement('p');
    title.textContent = task.title;
    listGroup.appendChild(title);
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
