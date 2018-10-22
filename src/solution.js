'use strict';

let foundValue1 = false;

module.exports = function isAChild(root, value1, value2) {
  if (!root) {
    return false;
  }
  if (root.value === value1) {
    foundValue1 = true;
  }
  if (root.value === value2 && foundValue1 === true) {
    return true;
  }
  const findValueLeft = isAChild(root.left, value1, value2);
  const findValueRight = isAChild(root.right, value1, value2);
  if (findValueLeft === true || findValueRight === true) {
    return true;
  }
  if (root.value === value1 && findValueLeft === false && findValueRight === false) {
    foundValue1 = false;
  }
  return false;
};
