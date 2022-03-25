// /src/modules/helpfulFunctions - handy funcitons

// function to help validate input
const validateDescription = (text) => {
  if (text === null || text === '') {
    return false;
  }
  return true;
};

const retsIndexInTaskList = (li) => {
  const ulList = document.querySelector('#taskList');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);
  return index;
};

export { validateDescription, retsIndexInTaskList };