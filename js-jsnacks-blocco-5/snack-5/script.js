const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const getEvenNumbers = (inputArray) => {
  return nums.filter(number => number % 2 === 0);
};


const evenNumbers = getEvenNumbers(nums);
console.log(getEvenNumbers());