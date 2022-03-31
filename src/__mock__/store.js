// __mock__/store

import Task from '../modules/task';

export default class Store {
  static getEmptyTasks() {
    return [];
  }

  static getTasksWith3Tasks() {
    const todos = [];
    const neo = new Task('Make breakfast', 1);
    const trinity = new Task('Cook lunch', 2);
    const morpheous = new Task('Buy dinner', 3);

    todos.push(neo);
    todos.push(trinity);
    todos.push(morpheous);

    return todos;
  }

  static setTasks() {
    return true;
  }
}