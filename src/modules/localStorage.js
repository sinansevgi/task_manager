class LocalStorage {

  static refresh(object) {
    window.localStorage.setItem(object.title, JSON.stringify(object.taskList))
  }


  static parse() {
    Object.keys(window.localStorage).forEach(key => {
      new Project(key)
    })

    Project.projectList.forEach(project => {
      project.taskList = JSON.parse(window.localStorage.getItem(project.title))

      project.taskList.forEach(task => {
        Object.setPrototypeOf(task, Todo.prototype)
      })
    })
    
  }

}


