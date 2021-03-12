const projectModule = (() => {
  const projectList = document.getElementById('projectList');
  const projectForm = document.getElementById('projectForm');

  // Project form input
  const projectTitle = document.getElementById('projectTitle');


  const createForm = () => {
    projectForm.parentNode.classList.remove('d-none');
    projectForm.classList.remove('d-none');
  };


  const destroyForm = () => {
    projectTitle.value = '';
    projectForm.parentNode.classList.add('d-none');
    projectForm.classList.classList.add('d-none');
  };

  const getFormData = () => projectTitle.value;

  const renderProject = (project, index) => {
    const projectContainer = document.createElement('li');
    const projectLink = document.createElement('a');
    const removeButton = document.createElement('i');
    projectLink.setAttribute('data-attribute', index);
    projectLink.classList.add('projectLinks');
    removeButton.classList.add('btn', 'btn-danger', 'bi', 'bi-trash');
    removeButton.setAttribute('data-attribute', index);
    projectContainer.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between');
    projectContainer.setAttribute('data-attribute', index);
    projectLink.textContent = project.title;
    projectContainer.appendChild(projectLink);
    projectContainer.appendChild(removeButton);
    projectList.appendChild(projectContainer);
  };


  return {
    createForm,
    getFormData,
    destroyForm,
    renderProject,
  };
})();


export { projectModule as default };
