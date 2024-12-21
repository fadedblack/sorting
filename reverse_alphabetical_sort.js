const reverseAlphabeticalSort = function (strings) {
  return strings.sort(function (left, right) {
    if (left < right) {
      return 1;
    }

    if (left === right) {
      return 0;
    }

    return -1;
  })
}