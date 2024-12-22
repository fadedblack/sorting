const getFrequencyMap = function (list) {
  return list.map(function (element) {
    return frequencyMap[element] += 1;
  })
}

const sortByFrequency = function (numbers) {
  const frequencyMap = getFrequencyMap(numbers);

  return frequencyMap.sort(function (leftFrequency, rightFrequency) {
    return leftFrequency.frequency - rightFrequency.frequency;
  })
}