const sortByDuplicates = function (values) {
  return values.sort(function (leftValue, rightValue) {
    return leftValue - rightValue;
  });
};