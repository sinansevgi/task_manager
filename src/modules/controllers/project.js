import Project from '../models/project';
import projectModule from '../view/project_view';
import LocalStorage from '../models/localStorage';
import domHelper from '../helpers/domhelper';

const projectController = () => {
  const createProjectButton = document.getElementById('createProject');
  const closeProjectButton = document.getElementById('projectClose');
  const submitButton = document.getElementById('submitProject');
  const removeButtons = document.getElementsByClassName('bi-trash');

  const renderAll = () => {
    Project.projectList.forEach((project) => {
      const indexOfProject = Project.projectList.indexOf(project);
      projectModule.renderProject(project, indexOfProject);
    });
  };


  const destroyProject = (event) => {
    const projectIndex = Number(event.target.getAttribute('data-attribute'));
    LocalStorage.remove(Project.projectList[projectIndex]);
    Project.removeProject(projectIndex);
    domHelper.removeAllChilds(event.target.parentNode.parentNode);
    renderAll();
    const defaultLink = document.getElementById('defaultProject');
    defaultLink.click();
    [...removeButtons].forEach((button) => {
      button.addEventListener('click', (event) => {
        destroyProject(event);
      });
    });
  };

  const bindRemoveEvent = () => {
    [...removeButtons].forEach((button) => {
      button.addEventListener('click', (event) => {
        destroyProject(event);
      });
    });
  };


  renderAll();
  bindRemoveEvent();

  createProjectButton.addEventListener('click', () => {
    projectModule.createForm();
  });

  closeProjectButton.addEventListener('click', () => {
    projectModule.destroyForm();
  });

  submitButton.addEventListener('click', () => {
    const formData = projectModule.getFormData();
    const project = new Project(formData);
    const indexOfProject = Project.projectList.indexOf(project);
    LocalStorage.refresh(project);
    const pageContent = projectModule.renderProject(project, indexOfProject);
    pageContent.removeButton.addEventListener('click', (e) => { destroyProject(e); });
    pageContent.projectLink.click();
    projectModule.destroyForm();
  });
};

export { projectController as default };
