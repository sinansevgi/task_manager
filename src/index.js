import LocalStorage from './modules/models/localStorage';
import Project from './modules/models/project';
import Todo from './modules/models/todo';

LocalStorage.parseProject();
console.log(Project.projectList);
const projets = document.getElementById('projects');
const tasks = document.getElementById('tasks');
const p1 = document.createElement('p');
p1.textContent = Project.projectList[0].title;
projets.appendChild(p1);
p1.textContent = Project.projectList[0].taskList[0].title;
tasks.appendChild(p1);