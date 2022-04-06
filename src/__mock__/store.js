// __mock__/store

import Task from '../modules/task';

export default class Store {
  static getEmptyTasks() {
    return [];
  }

  static getTasksWith3Tasks() {
    const todos = [];
    const neo = new Task('Cook breakfast', 0);
    const trinity = new Task('Cook lunch', 1);
    const morpheous = new Task('Cook dinner', 2);

    trinity.isCompleted = true;

    todos.push(neo);
    todos.push(trinity);
    todos.push(morpheous);

    return todos;
  }

  static setTasks() {
    return true;
  }
}