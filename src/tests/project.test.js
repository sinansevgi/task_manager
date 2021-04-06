import Project from '../modules/models/project';


const testProject = new Project("title");
const testTask = {"title": "Test Task"};

describe('Projects Model', () => {

  describe('constructor', () => {

    test("it creates a new Project instance", () => {
      expect(testProject).toBeInstanceOf(Project);
    })

    test("it creates the Project instance with title variable", () => {
      expect(testProject.title).toBe("title");
    })

    test("it creates the Project instance with taskList variable as an array", () => {
      expect(testProject.taskList).toEqual([]);
    })

    test("it pushes the created instance to the class variable ProjectList", () => {
      expect(Project.projectList).toEqual(expect.arrayContaining([testProject]))
    })
  })

  describe('addTask', () => {
    
    test("it adds a new to task to the taskList", () => {
      testProject.addTask(testTask);
      expect(testProject.taskList).toContain(testTask);
    })
  })

  describe('removeTask', () => {
    
    test("it removes the task from the project's taskList", () => {
      testProject.removeTask(0);
      expect(testProject.taskList).not.toContain(testTask);
    })
  })
})
