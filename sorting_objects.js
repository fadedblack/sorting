const sortObjects = function (listOfObjects, attribute) {
  return listOfObjects.sort(function (object1, object2) {
    if (object1[attribute] < object2[attribute]) {
      return -1;
    }

    if (object1[attribute] === object2[attribute]) {
      return 0;
    }

    return 1;
  });
};