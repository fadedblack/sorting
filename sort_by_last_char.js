const sortByLastChar = function (strings) {
  return strings.sort(function (string1, string2) {
    if (string1[string1.length - 1] < string2[string2.length - 1]) {
      return -1;
    }

    if (string1[string1.length - 1] === string2[string2.length - 1]) {
      return 0;
    }

    return 1;
  });
};