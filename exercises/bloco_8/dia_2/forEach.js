const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
 /////AULA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

/* numbers.forEach((value, index, array) => {
    console.log(value);
}); */
/* const showNumber = (value) => console.log(value);
numbers.forEach(showNumber); */

// const multiply3 = [];
// numbers.forEach((number) => multiply3.push(number * 3));

//descarta o primeiro parametro (value) e usa apenas o index.
// numbers.forEach((_,index) => multiply3.push(index * 3));

// console.log(multiply3);


//nossa forEach
const forEach = (array, callbackfn) => {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        callbackfn(value, index, array);        
    }
}

forEach(numbers, (value) => console.log(value));