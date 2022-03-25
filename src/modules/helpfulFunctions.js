// /src/modules/helpfulFunctions - handy funcitons

// function to help validate input
const validateDescription = (text) => {
  if (text === null || text === '') {
    return false;
  }
  return true;
};

export default validateDescription;