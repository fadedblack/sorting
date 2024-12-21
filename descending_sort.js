const descendingSort = function (array) {
  return array.sort(function (left, right) {
    return right - left;
  });
};