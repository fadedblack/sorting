const sortByAttributes = function (listOfObjects) {
  return listOfObjects.sort(function (leftObject, rightObject) {
    if (leftObject.score === rightObject.score) {
      return leftObject.id - rightObject.id;
    }

    return leftObject.score - rightObject.score;
  });
};