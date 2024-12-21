const absoluteSort = function (numbers) {
  return numbers.sort(function (left, right) {
    return Math.abs(left) - Math.abs(right);
  });
};