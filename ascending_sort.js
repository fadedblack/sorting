const ascendingSort = function (numbers) {
  return numbers.sort(function (left, right) {
    return left - right;
  })
};