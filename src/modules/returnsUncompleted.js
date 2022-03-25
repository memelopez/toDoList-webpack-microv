// /src/modules/returnsUncompleted.js

export default function returnsUncompleted(task) {
  return !task.isCompleted;
}