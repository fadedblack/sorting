const alphabeticalSort = function (strings) {
  return strings.sort(function (left, right) {
    if (left.toLowerCase() < right.toLowerCase()) {
      return -1;
    }

    if (left.toLowerCase() === right.toLowerCase()) {
      return 0;
    }

    return 1;
  });
};