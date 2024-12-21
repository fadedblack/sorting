const sortArray = function (values) {
  return values.sort(function (left, right) {
    if (left.toString() < right.toString()) {
      return -1;
    }

    if (left.toString() === right.toString()) {
      return 0;
    }

    return 1;
  });
};