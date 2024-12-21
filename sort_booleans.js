const sortBooleans = function (listOfBooleans) {
  return listOfBooleans.sort(function (boolean) {
    return boolean === false ? 1 : -1;
  });
};