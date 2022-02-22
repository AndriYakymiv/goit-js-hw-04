function changeEven(numbers, value) {

const newArray = [];
numbers.forEach(number => {
  number % 2 === 0 ? newArray.push(number + value) : newArray.push(number)
})
return newArray;

}