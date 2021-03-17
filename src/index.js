import LocalStorage from './modules/models/localStorage';
import projectController from './modules/controllers/project';
import taskController from './modules/controllers/todo';
import seedExamples from './modules/seed';

seedExamples();
LocalStorage.parse();
projectController();
taskController();
