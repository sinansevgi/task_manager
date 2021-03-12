import Project from '../models/project';
import projectModule from '../view/project_view';
import LocalStorage from '../models/localStorage';

const projectController = () => {
  const createProjectButton = document.getElementById('createProject');
  const closeProjectButton = document.getElementById('projectClose');
  const submitButton = document.getElementById('submitProject');


  const renderAll = (() => {
    Project.projectList.forEach((project) => {
      const indexOfProject = Project.projectList.indexOf(project);
      projectModule.renderProject(project, indexOfProject);
    });
  })();

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
    projectModule.renderProject(project, indexOfProject);
    projectModule.destroyForm();
  });
};

export { projectController as default };
