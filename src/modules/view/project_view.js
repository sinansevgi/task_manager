import domHelper from '../helpers/domhelper';

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
    const projectContainer = domHelper.createDomElement('li', { class: 'list-group-item list-group-item-action d-flex justify-content-between', 'data-attribute': index });
    const projectLink = domHelper.createDomElement('a', { 'data-attribute': index, class: 'projectLinks' }, project.title);
    const removeButton = domHelper.createDomElement('i', { class: 'btn btn-danger bi bi-trash', 'data-attribute': index });

    domHelper.appendChildren(projectContainer, [projectLink, removeButton]);

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
