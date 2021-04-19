//-------------------------------------//
//MAP
const numbers = [1, 2, 3, 4];

const map = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const mappedItem = callback(array[index]);
    newArray.push(mappedItem);
  }
  return newArray;
};

console.log(map(numbers, (number) => number * 2));

const states = [ 
  {}, 
];

