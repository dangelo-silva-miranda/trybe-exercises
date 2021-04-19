const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const compare = (a, b) => {
    return a - b;
    /* if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1
    }
    return 0; */
}

console.log(`pizzas antes de sort:  ${pizzas}`);
pizzas.sort();
console.log(`pizzas depois de sort: ${pizzas}`);

/* console.log(`numbers antes de sort:  ${numbers}`);
//console.log(numbers.sort(compare));
numbers.sort(compare);
console.log(`numbers depois de sort: ${numbers}`); */