const listSum = function (list) {
  return list.reduce(function (sum, element) {
    return sum + element;
  }, 0);
};

const sortBySum = function (listOfLists) {
  return listOfLists.sort(function (leftList, rightList) {
    const leftListSum = listSum(leftList);
    const rightListSum = listSum(rightList);

    return leftListSum - rightListSum;
  });
};