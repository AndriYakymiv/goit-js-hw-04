function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

    firstArray.forEach(number => {
        if (secondArray.includes(number)) {
            commonElements.push(number);
        } 
    })

  return commonElements;
}