const renderProject = (() => {
  const projectButton = document.getElementById('createProject');
  const projectList = document.getElementById('projectList');
 const projectForm = document.getElementById("projectForm");

  // Project form input
  projectTitle = document.getElementById("projectTitle");
  

  const createForm = () => { 
    projectForm.parentNode.classList.remove('d-none');
    projectForm.classList.remove('d-none');
  };


  const destroyForm = () => {
    projectTitle.value = "";
    projectForm.parentNode.classList.add('d-none');
    projectForm.classList.classList.add('d-none');
  }

  const getFormData = () => {
    return projectTitle.value
  }

  const renderProjects = (project) => {
    const projectContainer = document.createElement('li');
    const projectLink = document.createElement('a'); 
    projectContainer.classList.add('list-group-item', 'list-group-item-action');
    projectLink.textContent = project.title;
    projectContainer.appendChild(projectLink);
    projectList.appendChild(projectContainer); 
  }

 

  return {
    createForm, 
    getFormData,
    destroyForm,
    renderProjects
  }
})();


export { renderProject as default }
