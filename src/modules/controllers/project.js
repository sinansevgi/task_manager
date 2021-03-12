import Project from '../models/project'
import renderProject from '../view/project_view'
import LocalStorage from '../models/localStorage'

const projectController = () => {

  const createProjectButton = document.getElementById("createProject");
  const closeProjectButton = document.getElementById("projectClose");
  const submitButton = document.getElementById("submitProject");


  const renderAll = (()=> {
    Project.projectList.forEach((project) => {
      renderProject.renderProjects(project);
    })
  })();

  createProjectButton.addEventListener('click', ()=> {
    renderProject.createForm();
  })

  closeProjectButton.addEventListener('click', ()=> {
    renderProject.destroyForm();
  })

  submitButton.addEventListener('click', ()=> {
    let formData = renderProject.getFormData();
    let project = new Project(formData);
    LocalStorage.refresh(project);
    renderProject.renderProjects(project);
    renderProject.destroyForm();
  })
  

}

export { projectController as default }
