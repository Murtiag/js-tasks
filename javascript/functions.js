const addAll = (...numbers) => {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
};

console.log(addAll(1, 2, 3, 4, 5, 6));

// Array forEach
const carBrands = ["BMW", "Audi", "Toyota"];

const printArrayElements = (array) => {
  array.forEach((element) => console.log(element));
};

printArrayElements(carBrands);

//
