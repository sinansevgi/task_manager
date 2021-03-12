/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_models_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/models/localStorage */ \"./src/modules/models/localStorage.js\");\n/* harmony import */ var _modules_models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/models/project */ \"./src/modules/models/project.js\");\n/* harmony import */ var _modules_models_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/models/todo */ \"./src/modules/models/todo.js\");\n/* harmony import */ var _modules_controllers_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controllers/project */ \"./src/modules/controllers/project.js\");\n/* harmony import */ var _modules_controllers_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/controllers/todo */ \"./src/modules/controllers/todo.js\");\n\n\n //\n\n\n // LocalStorage.parse();\n// console.log(Project.projectList);\n// const projets = document.getElementById('projects');\n// const tasks = document.getElementById('tasks');\n// const p1 = document.createElement('p');\n// p1.textContent = Project.projectList[0].title;\n// projets.appendChild(p1);\n// p1.textContent = Project.projectList[0].taskList[0].title;\n// tasks.appendChild(p1);\n// LocalStorage.parse();\n\nvar defaultProject = new _modules_models_project__WEBPACK_IMPORTED_MODULE_1__.default('Default');\ndefaultProject.addTask(new _modules_models_todo__WEBPACK_IMPORTED_MODULE_2__.default('task1', 'Example Task', '2021-03-13'));\n(0,_modules_controllers_project__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_controllers_todo__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://task_manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/controllers/project.js":
/*!********************************************!*\
  !*** ./src/modules/controllers/project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectController)\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/modules/models/project.js\");\n/* harmony import */ var _view_project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/project_view */ \"./src/modules/view/project_view.js\");\n/* harmony import */ var _models_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/localStorage */ \"./src/modules/models/localStorage.js\");\n\n\n\n\nvar projectController = function projectController() {\n  var createProjectButton = document.getElementById('createProject');\n  var closeProjectButton = document.getElementById('projectClose');\n  var submitButton = document.getElementById('submitProject');\n\n  var renderAll = function () {\n    _models_project__WEBPACK_IMPORTED_MODULE_0__.default.projectList.forEach(function (project) {\n      var indexOfProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.default.projectList.indexOf(project);\n      _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.renderProject(project, indexOfProject);\n    });\n  }();\n\n  createProjectButton.addEventListener('click', function () {\n    _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.createForm();\n  });\n  closeProjectButton.addEventListener('click', function () {\n    _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.destroyForm();\n  });\n  submitButton.addEventListener('click', function () {\n    var formData = _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.getFormData();\n    var project = new _models_project__WEBPACK_IMPORTED_MODULE_0__.default(formData);\n    var indexOfProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.default.projectList.indexOf(project);\n    _models_localStorage__WEBPACK_IMPORTED_MODULE_2__.default.refresh(project);\n    _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.renderProject(project, indexOfProject);\n    _view_project_view__WEBPACK_IMPORTED_MODULE_1__.default.destroyForm();\n  });\n};\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/controllers/project.js?");

/***/ }),

/***/ "./src/modules/controllers/todo.js":
/*!*****************************************!*\
  !*** ./src/modules/controllers/todo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskController)\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/modules/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ \"./src/modules/models/project.js\");\n/* harmony import */ var _view_todo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/todo_view */ \"./src/modules/view/todo_view.js\");\n\n\n\n\nvar taskController = function taskController() {\n  var createTaskButton = document.getElementById('createTask');\n  var closeTaskButton = document.getElementById('taskClose');\n  var submitButton = document.getElementById('submitTask');\n  var projectLinks = document.querySelectorAll('.projectLinks');\n\n  var taskListIterate = function taskListIterate(taskList) {\n    taskList.forEach(function (task) {\n      _view_todo_view__WEBPACK_IMPORTED_MODULE_2__.default.renderTask(task, taskList.indexOf(task));\n    });\n  };\n\n  projectLinks.forEach(function (link) {\n    var myId = Number(link.getAttribute('data-attribute'));\n    var taskList = _models_project__WEBPACK_IMPORTED_MODULE_1__.default.projectList[myId].taskList;\n    console.log(taskList);\n    link.addEventListener('click', function () {\n      _view_todo_view__WEBPACK_IMPORTED_MODULE_2__.default.renderSection(myId);\n      taskListIterate(taskList);\n    });\n  });\n  submitButton.addEventListener('click', function () {});\n  createTaskButton.addEventListener('click', function () {\n    _view_todo_view__WEBPACK_IMPORTED_MODULE_2__.default.createForm();\n  });\n  closeTaskButton.addEventListener('click', function () {\n    _view_todo_view__WEBPACK_IMPORTED_MODULE_2__.default.destroyForm();\n  });\n};\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/controllers/todo.js?");

/***/ }),

/***/ "./src/modules/models/localStorage.js":
/*!********************************************!*\
  !*** ./src/modules/models/localStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/models/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/models/todo.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar LocalStorage = /*#__PURE__*/function () {\n  function LocalStorage() {\n    _classCallCheck(this, LocalStorage);\n  }\n\n  _createClass(LocalStorage, null, [{\n    key: \"refresh\",\n    value: function refresh(object) {\n      window.localStorage.setItem(object.title, JSON.stringify(object.taskList));\n    }\n  }, {\n    key: \"parse\",\n    value: function parse() {\n      Object.keys(window.localStorage).forEach(function (key) {\n        var tmp = function tmp(key) {\n          return new _project__WEBPACK_IMPORTED_MODULE_0__.default(key);\n        };\n\n        tmp(key);\n      });\n      _project__WEBPACK_IMPORTED_MODULE_0__.default.projectList.forEach(function (project) {\n        project.taskList = JSON.parse(window.localStorage.getItem(project.title));\n        project.taskList.forEach(function (task) {\n          Object.setPrototypeOf(task, _todo__WEBPACK_IMPORTED_MODULE_1__.default.prototype);\n        });\n      });\n    }\n  }]);\n\n  return LocalStorage;\n}();\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/models/localStorage.js?");

/***/ }),

/***/ "./src/modules/models/project.js":
/*!***************************************!*\
  !*** ./src/modules/models/project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Project = /*#__PURE__*/function () {\n  function Project(title) {\n    _classCallCheck(this, Project);\n\n    this.title = title;\n    this.taskList = [];\n    Project.projectList.push(this);\n  }\n\n  _createClass(Project, [{\n    key: \"addTask\",\n    value: function addTask(task) {\n      this.taskList.push(task);\n    }\n  }, {\n    key: \"removeTask\",\n    value: function removeTask(index) {\n      this.taskList.splice(index, 1);\n    }\n  }], [{\n    key: \"removeProject\",\n    value: function removeProject(index) {\n      Project.projectList.splice(index, 1);\n    }\n  }]);\n\n  return Project;\n}();\n\n_defineProperty(Project, \"projectList\", []);\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/models/project.js?");

/***/ }),

/***/ "./src/modules/models/todo.js":
/*!************************************!*\
  !*** ./src/modules/models/todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _status = new WeakMap();\n\nvar _priority = new WeakMap();\n\nvar Todo = /*#__PURE__*/function () {\n  function Todo(title, description, dueDate) {\n    _classCallCheck(this, Todo);\n\n    _status.set(this, {\n      writable: true,\n      value: false\n    });\n\n    _priority.set(this, {\n      writable: true,\n      value: 1\n    });\n\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n  }\n\n  _createClass(Todo, [{\n    key: \"setPriority\",\n    value: function setPriority(priority) {\n      _classPrivateFieldSet(this, _priority, priority);\n    }\n  }, {\n    key: \"getPriority\",\n    value: function getPriority() {\n      return _classPrivateFieldGet(this, _priority);\n    }\n  }, {\n    key: \"changeStatus\",\n    value: function changeStatus() {\n      _classPrivateFieldSet(this, _status, !_classPrivateFieldGet(this, _status));\n    }\n  }, {\n    key: \"getStatus\",\n    value: function getStatus() {\n      return _classPrivateFieldGet(this, _status);\n    }\n  }]);\n\n  return Todo;\n}();\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/models/todo.js?");

/***/ }),

/***/ "./src/modules/view/project_view.js":
/*!******************************************!*\
  !*** ./src/modules/view/project_view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectModule)\n/* harmony export */ });\nvar projectModule = function () {\n  var projectList = document.getElementById('projectList');\n  var projectForm = document.getElementById('projectForm'); // Project form input\n\n  var projectTitle = document.getElementById('projectTitle');\n\n  var createForm = function createForm() {\n    projectForm.parentNode.classList.remove('d-none');\n    projectForm.classList.remove('d-none');\n  };\n\n  var destroyForm = function destroyForm() {\n    projectTitle.value = '';\n    projectForm.parentNode.classList.add('d-none');\n    projectForm.classList.classList.add('d-none');\n  };\n\n  var getFormData = function getFormData() {\n    return projectTitle.value;\n  };\n\n  var renderProject = function renderProject(project, index) {\n    var projectContainer = document.createElement('li');\n    var projectLink = document.createElement('a');\n    var removeButton = document.createElement('i');\n    projectLink.setAttribute('data-attribute', index);\n    projectLink.classList.add('projectLinks');\n    removeButton.classList.add('btn', 'btn-danger', 'bi', 'bi-trash');\n    removeButton.setAttribute('data-attribute', index);\n    projectContainer.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'justify-content-between');\n    projectContainer.setAttribute('data-attribute', index);\n    projectLink.textContent = project.title;\n    projectContainer.appendChild(projectLink);\n    projectContainer.appendChild(removeButton);\n    projectList.appendChild(projectContainer);\n  };\n\n  return {\n    createForm: createForm,\n    getFormData: getFormData,\n    destroyForm: destroyForm,\n    renderProject: renderProject\n  };\n}();\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/view/project_view.js?");

/***/ }),

/***/ "./src/modules/view/todo_view.js":
/*!***************************************!*\
  !*** ./src/modules/view/todo_view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskModule)\n/* harmony export */ });\nvar taskModule = function () {\n  var taskList = document.getElementById('tasks');\n  var taskForm = document.getElementById('todoForm'); // Project form input\n\n  var taskName = document.getElementById('taskName');\n  var taskDescription = document.getElementById('taskDescription');\n  var taskDue = document.getElementById('taskDue');\n  var taskPriority = document.getElementById('taskPriority');\n\n  var clearSection = function clearSection() {\n    var taskWrapper = document.getElementById('taskWrapper');\n    taskWrapper.remove();\n  };\n\n  var renderSection = function renderSection(parentProject) {\n    clearSection();\n    var taskWrap = document.createElement('div');\n    var taskCreateButton = document.createElement('button');\n    var listGroup = document.createElement('div');\n    taskCreateButton.setAttribute('id', 'createProject');\n    taskCreateButton.classList.add('btn', 'btn-outline-primary', 'my-2');\n    taskCreateButton.setAttribute('data-attribute', parentProject);\n    taskCreateButton.textContent = 'Create a New Task';\n    listGroup.classList.add('list-group');\n    listGroup.setAttribute('id', 'list-group');\n    taskWrap.appendChild(taskCreateButton);\n    taskWrap.setAttribute('id', 'taskWrapper');\n    taskWrap.setAttribute('data-attribute', 'parentProject');\n    taskWrap.appendChild(listGroup);\n    taskList.appendChild(taskWrap);\n  };\n\n  var createForm = function createForm() {\n    taskForm.parentNode.classList.remove('d-none');\n    taskForm.classList.remove('d-none');\n  };\n\n  var destroyForm = function destroyForm() {\n    taskName.value = '';\n    taskForm.parentNode.classList.add('d-none');\n    taskForm.classList.classList.add('d-none');\n  };\n\n  var getFormData = function getFormData() {\n    var task = taskName.value;\n    var description = taskDescription.value;\n    var due = taskDue.value;\n    var priority = taskPriority.value;\n    return {\n      task: task,\n      description: description,\n      due: due,\n      priority: priority\n    };\n  };\n\n  var renderTask = function renderTask(task, index) {\n    var listGroup = document.getElementById('list-group');\n    var title = document.createElement('p');\n    title.textContent = task.title;\n    listGroup.appendChild(title);\n  };\n\n  return {\n    createForm: createForm,\n    getFormData: getFormData,\n    destroyForm: destroyForm,\n    renderTask: renderTask,\n    renderSection: renderSection\n  };\n}();\n\n\n\n//# sourceURL=webpack://task_manager/./src/modules/view/todo_view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;