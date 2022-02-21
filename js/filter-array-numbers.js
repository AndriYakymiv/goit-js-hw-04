function filterArray(numbers, value) {
  const filteredNumbers = [];

    numbers.forEach((element) => {
        console.log(element)
        if (element > value) {
            filteredNumbers.push(element);
        }
    })

  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3)