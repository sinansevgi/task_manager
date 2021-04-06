import Todo from '../modules/models/todo';


const testTask = new Todo('Test Task', 'Test Desc', '2019-12-01');

describe('Todo Model', () => {
  describe('#constructor', () => {
    test('it creates a new Todo instance', () => {
      expect(testTask).toBeInstanceOf(Todo);
    });
    test('the Todo instance should have title variable', () => {
      expect(testTask).toHaveProperty('title');
      expect(testTask.title).toBe('Test Task');
    });
    test('the Todo instance should have description variable', () => {
      expect(testTask).toHaveProperty('description');
      expect(testTask.description).toBe('Test Desc');
    });
    test('the Todo instance should have dueDate variable', () => {
      expect(testTask).toHaveProperty('dueDate');
      expect(testTask.dueDate).toBe('2019-12-01');
    });
  });
  describe('#setPriority', () => {
    test('It sets the priority', () => {
      testTask.setPriority('urgent');
      expect(testTask.getPriority()).toBe('urgent');
    });
  });
  describe('#getPriority', () => {
    test('It gets the priority', () => {
      testTask.setPriority('test');
      expect(testTask.getPriority()).not.toBe('urgent');
      expect(testTask.getPriority()).toBe('test');
    });
  });
  describe('#changeStatus', () => {
    test('It changes the status', () => {
      testTask.changeStatus();
      expect(testTask.getStatus()).toBe(true);
    });
  });
  describe('#getStatus', () => {
    test('It gets the status', () => {
      testTask.changeStatus();
      expect(testTask.getStatus()).toBe(false);
    });
  });
});
