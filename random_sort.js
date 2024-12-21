const shuffle = function (values) {
  return values.sort(function () {
    const pivot = Math.random();

    if (pivot > 0.5) {
      return -1;
    }

    if (pivot < 0.5) {
      return 1;
    }

    return 0;
  });
};