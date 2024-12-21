const sortStringAsNumber = function (strings) {
  return strings.sort(function (leftString, rightString) {
    return +leftString - +rightString;
  });
};