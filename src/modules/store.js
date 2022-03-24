// /src/modules/store.js - Store Class: Encapsulates de locacl storage

export default class Store {
  // gets tasks from storage and returns an array of objects
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}