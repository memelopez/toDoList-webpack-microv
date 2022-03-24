// /src/modules/task.js - TASK: class that reps a single task or 'to-do'
export default class Task {
  constructor(description, index) { // recieves description and index
    this.description = description;
    this.isCompleted = false;
    this.index = index;
  }

  task2str() {
    const isDone = (isCompleted) => (isCompleted ? 'yes' : 'no');
    const myStr = `Task#${this.index}: ${this.description} -- done? ${isDone(this.isCompleted)}`;
    return myStr;
  }
}